# Build Backend
FROM maven:3.9-eclipse-temurin-25 AS backend-build
WORKDIR /build
COPY tankbuch-backend ./tankbuch-backend
RUN cd tankbuch-backend && mvn -B package -DskipTests

# Build Frontend
FROM node:20 AS frontend-build
WORKDIR /build
COPY tankbuch-frontend ./tankbuch-frontend
WORKDIR /build/tankbuch-frontend
RUN npm ci && npm run build

# Runtime
FROM eclipse-temurin:25-jre-alpine AS runtime
WORKDIR /app

# Backend JAR
COPY --from=backend-build /build/tankbuch-backend/target/*.jar app.jar

# Frontend statisch (separates RUN mit Fehlerbehandlung)
RUN mkdir -p public
RUN if [ -d "/build/tankbuch-frontend/dist" ]; then cp -r /build/tankbuch-frontend/dist/* public/; fi || true
RUN if [ -d "/build/tankbuch-frontend/build" ]; then cp -r /build/tankbuch-frontend/build/* public/; fi || true

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
