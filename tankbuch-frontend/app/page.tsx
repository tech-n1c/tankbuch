import Image from "next/image";

export default function Home() {
    const [name, setName] = React.useState("Hello...");

    useEffect(() => {
        fetch("/api/test/hello")}
        .then((res => res.text()
        .then(data => setName(data))
        .catch(err => setName('Error: ' + err.message)
    }, [])

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

        </div>
      </main>
    </div>
  );
}
