'use client'

import Image from "next/image";
import Logo from "@public/icons/chessbook_icon.png"

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className="flex flex-col justify-center gap-5 items-center border-2 border-rose-quartz-2 pb-10 px-10 rounded-xl bg-[#F7F7F7] z-10">
        <Image
          src={ Logo }
          width={ 200 }
          alt="App_logo"
          className="object-contain mix-blend-multiply aspect-auto z-0"
        />
        <div className="input-group">
          <input required type="text" id="email" className="input" />
          <label htmlFor="email" className="label">Email</label>
        </div>
        <div className="input-group">
          <input required type="password" id="password" className="input" />
          <label htmlFor="password" className="label">Password</label>
        </div>
        <button type="button" className="min-w-full border-2 border-light-cyan rounded-lg h-10 bg-columbia-blue text-neutral-100 text-lg hover:bg-light-cyan hover:border-columbia-blue" onClick={ () => alert( "hello" ) }>Login</button>
        <section className="flex justify-between items-center gap-2">
          <div className="bar"></div>
          <p>OR</p>
          <div className="bar"></div>
        </section>
        <p>Don&#39;t have an account? <span className="text-cyan-600 cursor-pointer">Register</span></p>
      </div>
    </div>
  );
};

export default Login;