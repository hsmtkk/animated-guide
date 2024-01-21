import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/logo.png" alt="logo" width={500} height={486} />
      <h1>Welome to this NextJs Course!</h1>
      <p>Let&apos;s get started!</p>
      <p><a href="/about">About Us</a></p>
    </main>
  )
}