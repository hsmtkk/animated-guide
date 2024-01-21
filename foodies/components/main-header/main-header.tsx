import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "@/components/main-header/main-header.module.css"
import MainHeaderBackground from "@/components/main-header/main-header-background"

export default function MainHeader() {
    return (
        <div>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/"><Image src={logoImg} alt="logo" width={1024} height={1024} />Next Level Food</Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/meals">Browse Meals</Link></li>
                        <li><Link href="/community">Foodies Communitiy</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}