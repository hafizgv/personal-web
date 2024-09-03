import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const About = () => {
    return ( 
        <>
            <Head>
                <title>Hafiz</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <div className='flex flex-col gap-5 pt-20 pb-10 text-white max-w-5xl m-auto text-sm md:text-base px-10 sm:px-20'>
                <h1 className='font-bold text-2xl'>Hello! I'm Hafiz 👋</h1>
                <p>I'm a student who is currently studying at Samudra Universty Department of Informatics based in Aceh, Indonesia 🌏.</p>
                <p>Currently interested on Web Developing, Graphic Artist and Animation. On this website, I am practicing and learning many stuff I interested on. 
                    May it looks bad, weird and junky. But hey, I'm on the process of learning something new here, and you're come along with my journey here 🚀. </p>
                <p>Outside of study I play a lot of games like Team Fortress 2, The Sims 4, SA-MP, Point Blank, Minecraft, Don't Starve Together and also Mobile Legends.</p>
                <p>If you want getting closer with me, you can find me here:
                    <br/>📌 I'm <span className='border-b border-b-orange-400'><i>@hafizgv</i></span> on <Link className='hover:text-blue-400' href='https://www.facebook.com/hafiz.gv/' target='_blank'>Facebook</Link>, <Link className='hover:text-pink-400' href='https://www.instagram.com/hafizgv/' target='_blank'>Instagram</Link>, <Link href='https://github.com/hafizgv' target='_blank' className='hover:text-gray-400'>GitHub</Link>, <Link className='hover:text-cyan-400' href='https://www.linkedin.com/in/hafizgv/' target='_blank'>LinkedIn</Link> and <Link className='hover:text-red-400' href='https://www.youtube.com/@hafizgv' target='_blank'>Youtube</Link>
                    <br/>📌 May you want contact me from <Link className='border-b border-b-orange-400 hover:bg-orange-500' href='mailto:hafizgv@gmail.com' target='_blank'>email📧</Link>
                </p>
                <div className='bg-stone-700 rounded-sm h-1 w-full my-8'></div>
                <h1 className='font-bold text-2xl'>Work Station 💻</h1>

                <p><b><i>Current Laptop</i></b></p>
                <p>
                    <b>🔸 Device</b> : MSI GF63 Thin 9SCSR<br/>
                    <b>🔸 Processor</b> : Intel(R) Core(TM) i5-9300H CPU @ 2.40GHz (8 CPUs), ~2.4GHz<br/>
                    <b>🔸 Memory</b> : 12 GB DDR4 RAM<br/>
                    <b>🔸 OS</b> : Windows 11 Home Single Language 64-bit<br/>
                    <b>🔸 VGA</b> : NVIDIA GeForce GTX 1650 Ti with Max-Q Design 4 GB VRAM<br/>
                    <b>🔸 Storage</b> : KIOXIA NVMe SSD 256GB + Seagate 300GB BarraCuda 2.5" HDD<br/>
                </p>
                <p><b><i>Old Laptop</i></b></p>
                <p>
                    <b>🔸 Device</b> : Laptop Acer Aspire E1-471<br/>
                    <b>🔸 Processor</b> : Intel(R) Core(TM) i3-2348M CPU @ 2.30GHz (4 CPUs), ~2.3GHz<br/>
                    <b>🔸 Memory</b> : 4 GB DDR3 RAM<br/>
                    <b>🔸 OS</b> : Windows 10 Pro 64-bit<br/>
                    <b>🔸 VGA</b> : Intel(R) HD Graphics 3000<br/>
                    <b>🔸 Storage</b> : JOINT SSD SATA 2.5' H500 128GB<br/>
                </p>
                <p><b><i>My Gears</i></b></p>
                <p>
                    <b>🔸 Mouse</b> : G102 Prodigy Gaming Mouse<br/>
                    <b>🔸 Keyboard</b> : <i>default</i><br/>
                    <b>🔸 Monitor</b> : <i>default</i><br/>
                    <b>🔸 Audio</b> : 1$ Earbuds
                </p>
                <div className='bg-stone-700 rounded-sm h-1 w-full my-8'></div>
                <h1 className='font-bold text-2xl'>Career 💼</h1>
                <div className='grid md:grid-cols-2 gap-10'>

                    <div>
                        <h2 className='font-semibold text-lg'>Mangayaro</h2>
                        <p>Staff
                            <br/>Sep 2020 - Jan 2024
                        </p>
                    </div>
                    
                    <div>
                        <h2 className='font-semibold text-lg'>Ngomik.net</h2>
                        <p>Volunteer
                            <br/>Aug 2020 - May 2023
                        </p>
                    </div>

                    <div>
                        <h2 className='font-semibold text-lg'>Ruangguru</h2>
                        <p>Frontend Engineer (Independent study)
                            <br/>Aug 2022 - Dec 2022
                        </p>
                    </div>
                </div>
                <div className='bg-stone-700 rounded-sm h-1 w-full my-8'></div>
                <footer className='text-center text-sm'>Copyright © 2023 HafizGv</footer>
            </div>
        </>
     );
}
 
export default About;
