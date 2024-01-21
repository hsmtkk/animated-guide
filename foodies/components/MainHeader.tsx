import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png"

export default function MainHeader() {
    return (
        <header>
            <Link href="/"><Image src={logoImg.src} alt="logo" width={1024} height={1024} />Next Level Food</Link>
            <nav>
                <ul>
                    <li><Link href="/meals">Browse Meals</Link></li>
                    <li><Link href="/community">Foodies Communitiy</Link></li>
                </ul>
            </nav>
        </header>
    )
}