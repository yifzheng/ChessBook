'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Chess from "@public/images/chess_board_drawing.jpg"

export default function Home () {
  const router = useRouter();

  const handleSignInClick = () => {
    // Handle sign-in click, e.g., navigate to sign-in page
    router.push( "/login" );
  };

  const handleRegisterClick = () => {
    // Handle register click, e.g., navigate to register page
    router.push( "/register" );
  };

  return (
    <main className="min-h-screen max-h-screen text-center">
      <header className="absolute top-0 right-0 m-5 flex items-center gap-5 z-10">
        <button type="button" className="login_btn" onClick={ handleSignInClick } onBlur={ ( e ) => e.preventDefault() }>
          Sign In
        </button>
        <button type="button" className="register_btn" onClick={ handleRegisterClick } onBlur={ ( e ) => e.preventDefault() }>
          Register
        </button>
      </header>
      <Image
        src={ Chess }
        width={ 900 }
        alt="App_logo"
        className="object-contain mix-blend-multiply aspect-auto absolute bottom-0 left-0 z-0"
      />
      <div className="flex flex-col justify-center items-center z-1 pt-[60%] sm:pt-[30%] md:pt-[17%] z-1">
        <h1 className="text-4xl px-10 font-bold leading-10 sm:text-6xl text-black pb-4 blue_gradient">
          ChessBook
        </h1>
        <h2 className="title_text blue_gradient mb-8">
          A place where passionate chess players can share their chess games in a global chess
          community
        </h2> 
      </div>
    </main>
  );
}
