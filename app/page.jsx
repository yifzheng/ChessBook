import Image from "next/image";
import Logo from "../public/icons/chessbook_icon-transformed.png"

export default function Home () {
  return (
    <main className="flex-center flex-col h-screen text-center">
      <Image
        src={ Logo }
        width={ 500 }
        height={ 600 }
        alt="App_logo"
        className="object-contain mix-blend-multiply"
      />
      <h2 className="text-xl max-w-3xl">Welcome to ChessBook, a place where passionate chess players can share their chess games in a global chess community</h2>
      <section className="flex gap-4 mt-10">
        <button type="button" className="login_btn">Login</button>
        <button type="button" className="register_btn">Register</button>
      </section>
    </main>
  )
}
