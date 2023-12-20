import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
    return ( 
        <>
            <Head>
                <title>Hafiz</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <div className='flex flex-col items-center gap-5 py-20 text-white max-w-5xl m-auto text-sm lg:text-base px-10 sm:px-20'>
                <div id='projects' className='w-full'>
                    <h1 className='text-2xl font-bold'>Projects</h1>
                    <p className='mt-2'>Here's all my projects from small projects to... I don't think I've made big projects yet.</p>
                    <div className='grid justify-items-center md:grid-cols-2 gap-10 mt-16'>

                        <Link href='/hafiz.jpg' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <img className='rounded relative object-cover h-[300px] w-full' src='/hafiz.jpg'/>
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>HafizGv Vector</h3>
                            <p className='text-sm'>May, 2017</p>
                            </figcaption>
                        </figure>
                        </Link>
                        
                        <Link href='https://github.com/hafizgv/3DRumohAceh' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/3d.jpg' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>Rumoh Aceh 3D [GLUT Library]</h3>
                            <p className='text-sm'>July, 2022</p>
                            </figcaption>
                        </figure>
                        </Link>
                        
                        <Link href='https://youtu.be/NJCDntkHEcQ' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/stop-asm.jpg' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>Team Fortress 2 Animation</h3>
                            <p className='text-sm'>April, 2018</p>
                            </figcaption>
                        </figure>
                        </Link>
                        
                        <Link href='https://hafizgv.github.io/udwakmar/' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/webm.jpg' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>Shopping Mobile App Prototype</h3>
                            <p className='text-sm'>Juny, 2022</p>
                            </figcaption>
                        </figure>
                        </Link>

                        <Link href='https://github.com/hafizgv/Analog-to-Digital-Converter' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/adc.png' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>Analog to Digital Converter MATLAB</h3>
                            <p className='text-sm'>Jan, 2022</p>
                            </figcaption>
                        </figure>
                        </Link>

                        <Link href='/kamarsiapa.png' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/kamarsiapa.png' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>Bedroom 3D [Blender]</h3>
                            <p className='text-sm'>March, 2023</p>
                            </figcaption>
                        </figure>
                        </Link>

                        <Link href='https://youtu.be/DWw-EuRniig' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/spider.jpg' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>Spider 3D Animation [Blender]</h3>
                            <p className='text-sm'>March, 2023</p>
                            </figcaption>
                        </figure>
                        </Link>

                        <Link href='https://kkncempa.vercel.app/' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/kkncempa.png' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>KKN Web Project</h3>
                            <p className='text-sm'>July, 2023</p>
                            </figcaption>
                        </figure>
                        </Link>
                        <Link href='https://github.com/hafizgv/sppd-perpus/' target='_blank' className='project w-full h-full'>
                        <figure className='rounded relative -z-10'>
                            <Image className='rounded relative object-cover h-[300px] w-full' src='/sppd.png' width={300} height={300} />
                            <figcaption className='rounded bg-zinc-800/90 backdrop-blur-sm h-16 p-2 absolute bottom-[0px] w-[100%]'>
                            <h3 className='font-semibold'>SPPD Monitoring</h3>
                            <p className='text-sm'>December, 2023</p>
                            </figcaption>
                        </figure>
                        </Link>
                    </div>
                </div>
                <div className='bg-stone-700 rounded-sm h-1 w-full my-8'></div>
                <footer className='text-center text-sm'>Copyright © 2023 HafizGv</footer>
            </div>
        </>
     );
}
 
export default Projects;