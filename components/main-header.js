'use client';

import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
	const path = usePathname();
	return (
		<>
		<MainHeaderBackground/>
		<header className={styles.header}>
			<Link href="/" className={styles.logo}>
				<Image src={LogoImg} alt="Logo img" priority />
				NextLevel Foodies
			</Link>
			<nav className={styles.nav}>
				<ul>
					<li><Link href={"/meals"} className={path.startsWith('/meals') ? styles.active : undefined }>Browse meals</Link></li>
					<li><Link href={"/community"}className={path.startsWith('/community') ? styles.active : undefined }>Foodie community</Link></li>
				</ul>
			</nav>
		</header>
		</>
	);
}
