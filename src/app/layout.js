 import Link from 'next/link';
 import './Gone.css'
 export const runtime = 'edge';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className="yep">
      <nav>
       {/* <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="logo">
            <h1>Enjoy Movies</h1>
          </div>
          <div className="menu-items">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/new">Rated</Link></li>
            <li><Link href="/search">Browse</Link></li>
          </div>
        </div>
      </div>  */}
   

      <div className='navcon'>

      <div className='hams'>
          <div className='hamline'></div>
          <div className='hamline'></div>
          <div className='hamline'></div>
        </div>
        <li ><Link href={'/'} className='na'>Hone</Link></li>
        <li ><Link href={'/new'} className='na'>New</Link></li>
        <li ><Link href={'/search'} className='na'> Search</Link></li>

      
      </div>
    </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
