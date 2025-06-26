// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parveez | Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of Parveez, a full-stack web developer skilled in React, Node.js, and Next.js." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-indigo-400">Parveez</span></h1>
          <p className="text-xl md:text-2xl mb-6">A Full-Stack Web Developer</p>
          <p className="max-w-xl text-gray-300 mx-auto mb-6">
            I build responsive web applications using modern tech stacks like React, Next.js, Node.js, and MongoDB.
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <Link href="/projects">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full transition">
                View Projects
              </button>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-400 hover:bg-indigo-400 hover:text-white px-6 py-2 rounded-full transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/Parveez19" target="_blank" rel="noopener noreferrer">
              <Image src="/github.png" alt="GitHub" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/in/parveez-ahmed-5b8423227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="mailto:ahmedparveez090@gmail.com">
              <Image src="/email.webp" alt="Email" width={30} height={30} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
