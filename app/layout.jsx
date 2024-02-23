import '@styles/globals.css'

export const metadata = {
  title: 'ChessBook',
  description: 'ChessBook',
  icons: {
    favicon: '/icon?<generated>'
  }
}

export default function RootLayout ( { children } ) {
  return (
    <html lang="en">
      <body className='w-screen glassmorphism-2'>
        <div>
          <div className="gradient" />
        </div>
        <div className="main">
          { children }
        </div>
      </body>
    </html>
  )
}
