import Head from 'next/head'

import Link from 'next/link'
const Build = process.env.CONFIG_BUILD_ID;
export default function Home() {
  return (
    <>
    <a href="https://f000.backblazeb2.com/file/2liner/imgplay-mod.apk" download="ImgPlayMod">
     <button className="download">Download {Build}</button>
       </a>
      <br />
<hr />
    
        <br />
  <Link href="/db">
    <a>DB</a>
          </Link>
          <br />
           <br />
  <Link href="/client">
          <a>Client</a>
        </Link>
          <br />
           <br />
  <Link href="/time">
          <a>Time</a>
        </Link>
           <br />
           <br />
  <Link href="/instatic">
          <a>InStatic</a>
        </Link>
           <br />
           <br />
  <Link href="/infinite">
          <a>Infinite</a>
        </Link>
    </>
  )
}
