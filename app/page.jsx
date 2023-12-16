'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../public/icons/chessbook_icon-transformed.png"

export default function Home () {
  const router = useRouter()
  return (
    <main className="flex flex-col justify-center items-center h-screen text-center">
      <Image
        src={ Logo }
        width={ 500}
        alt="App_logo"
        className="object-contain mix-blend-multiply"
      />
      <h2 className="title_text">Welcome to ChessBook, a place where passionate chess players can share their chess games in a global chess community</h2>
      <section className="flex gap-4 my-10">
        <button className="login_btn" onClick={ () => router.push("/login") }>Login</button>
        <button className="register_btn" onClick={ () => router.push( '/register' ) }>Register</button>
      </section>
    </main>
  )
}
