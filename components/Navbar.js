import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="flex flex-wrap justify-between sticky top-0 backdrop-blur-sm bg-stone-900/80 text-white text-xs px-10 sm:px-20 md:text-sm md:px-36 lg:text-base lg:px-52 xl:px-64">
            <h2 className="flex items-center font-bold"><Link href='/'>hafizgv.</Link></h2>
            <div className="flex items-center">
                <Link className="navbar-item p-4" href='#about-me'>.About_me</Link>
                <Link className="navbar-item p-4" href='/'>.my_projects</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;