'use client'

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Logo from "@public/icons/chessbook_icon.png"
import InputGroup from "@components/InputGroup"

const Register = () => {
  const { push } = useRouter()
  const [ email, setEmail ] = useState( '' );
  const [ isValidEmail, setIsValidEmail ] = useState( true );

  const handleEmailChange = ( e ) => {
    const inputEmail = e.target.value;
    console.log( 'i am checking email' )
    if ( inputEmail.length > 0 ) {
      setEmail( inputEmail );

      // Regular expression for validating an Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the input email matches the pattern
      const isValid = emailRegex.test( inputEmail );
      setIsValidEmail( isValid );
    }
    else {
      setIsValidEmail( true )
    }
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className="flex flex-col justify-center gap-5 items-center border-2 border-rose-quartz-2 pb-10 px-10 rounded-xl bg-[#F7F7F7] z-10">
        <Image
          src={ Logo }
          width={ 200 }
          alt="App_logo"
          className="object-contain mix-blend-multiply aspect-auto z-0"
        />
        <InputGroup input_name={ "firstname" } type={ "text" } maxLength={ 20 } label_name={ "First Name" } />
        <InputGroup input_name={ "lastname" } type={ "text" } maxLength={ 20 } label_name={ "Last Name" } />
        <InputGroup input_name={ "email" } type={ "text" } input_on_change={ handleEmailChange } label_name={ "Email" } />
        <InputGroup input_name={ "password" } type={ "password" } label_name={ "Password" } />
        <button type="button" className="min-w-full border-2 border-light-cyan rounded-lg h-12 bg-columbia-blue text-neutral-100 text-lg hover:bg-light-cyan hover:border-columbia-blue" onClick={ () => alert( "hello" ) }>Register</button>
        { !isValidEmail && <p style={ { color: 'red' } }>Please enter a valid email address.</p> }
        <section className="flex justify-between items-center gap-2">
          <div className="bar"></div>
          <p>OR</p>
          <div className="bar"></div>
        </section>
        <p>Already have an account? <span className="text-cyan-600 cursor-pointer" onClick={ () => push( "/login" ) }>Login</span></p>
      </div>
    </div>
  )
}

export default Register