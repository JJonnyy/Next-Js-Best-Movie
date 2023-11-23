import Link from 'next/link';
import { GiPopcorn } from "react-icons/gi";

const Header = () =>{
    return(
        <header className="p-5 flex items-center justify-between">
            <Link href="/">
                <GiPopcorn />
            </Link>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>

        </header>
    )
}

export default Header;