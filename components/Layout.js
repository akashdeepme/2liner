import Link from 'next/link'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
     <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
         <link rel='manifest' href='/manifest.json' />
         <meta name="theme-color" content="#ff3370e5"/>
      </Head>
  
  <div className="header">
  <Link href="/"><a className="logo" >ModApk</a></Link>
<input className="hidden" type="checkbox" id="nav-toggle" style={{display: 'none'}} />
  <label htmlFor="nav-toggle" className="pointer-cursor" >
 
  </label>

  <nav>
   <div className="nav">
  
 
<ul><a href="">Nothing To Show 😟</a></ul>
</div>
  </nav>
</div>
<main>

<div className="main-head">
 <h1> Welcome To ModApk 👋</h1>
</div>
<div className="main-content">
   {children}
</div>

</main>
<sidenav>
  I'm SideNav
</sidenav>
<sidebar>
  I'm SideBar
</sidebar>
<footer>
  <p>© Copyright 2021 - ModApk.vercer.app</p>
</footer>

    </>
  )
}



export default Layout
