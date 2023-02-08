import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hafiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className='navbarfiller h-20 sm:h-28 md:h-40 lg:h-52'></div>
      <div className='main-content h-96 pt-20 text-white px-10 text-sm sm:px-20 sm:text-base md:px-36 lg:px-52 xl:px-64'>
        <div id='about-me' className='flex flex-col items-center gap-2 sm:gap-0 sm:flex-row'>
          <h1>Hello, My name is Hafiz. I'm a</h1>
          <div className='animated ml-1 text-center sm:text-left text-sm overflow-hidden h-7 flex-grow'>
            <div><div class="p-1 px-2 mb-4 bg-red-800">Web Developer</div></div>
            <div><div class="p-1 px-2 mb-4 bg-blue-800">Graphic Artist</div></div>
            <div><div class="p-1 px-2 mb-4 bg-purple-800">Gamer</div></div>
          </div>
        </div>
        <Image src='/towew.jpeg' width={300} height={300} alt='Omaga'/>
        <div>
          <p>I'm a student who is currently studying at Samudra Universty Department of Informatics. A person who has an interest in Web Development, Graphic Design and Animation.</p>
          <p>You can find me here : <Link href='https://github.com/hafizgv' target='_blank' className='hover:border-b-2 font-medium border-gray-500'>GitHub</Link> | <Link href='https://www.linkedin.com/in/hafizgv/' target='_blank' className='hover:border-b-2 font-medium border-sky-500'>LinkedIn</Link> | <Link href='https://www.youtube.com/@hafizgv' target='_blank' className='hover:border-b-2 font-medium border-red-400'>YouTube</Link></p>
        </div>
      </div>
      
    </>
  )
}
