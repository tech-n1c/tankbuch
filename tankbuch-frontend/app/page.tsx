'use client';  // ← Das macht es zu einem Client Component

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [name, setName] = useState("Hello...");
    const [backendStatus, setBackendStatus] = useState("Loading...");  // ← Initialwert

    useEffect(() => {
      // Im Docker Network: "backend" statt "localhost"
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://backend:8080';

      fetch(`${apiUrl}/api/test/hello`)
        .then(res => res.text())
        .then(data => setBackendStatus(data))
        .catch(err => setBackendStatus('ERROR: ' + err.message));
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Bla fasel blubber.
                    </h1>
                    <strong>Backend Status:</strong> {backendStatus}
                </div>
            </main>
        </div>
    );
}
