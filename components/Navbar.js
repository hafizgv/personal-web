import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="sticky top-0 backdrop-blur-sm bg-stone-900/80 text-xs md:text-sm lg:text-base px-10 sm:px-20">
            <nav className="z-10 flex flex-wrap justify-between text-white max-w-5xl m-auto">
                <h2 className="flex items-center font-bold"><Link className="border-2 border-white rounded-md p-1" href='/'>hafizgv.</Link></h2>
                <div className="flex items-center">
                    <Link className="navbar-item p-4" href='#about-me'>.About_me</Link>
                    <Link className="navbar-item p-4" href='#projects'>.my_projects</Link>
                </div>
            </nav>
        </div>
        
     );
}
 
export default Navbar;