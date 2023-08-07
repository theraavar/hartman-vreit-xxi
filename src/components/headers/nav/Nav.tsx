"use client"

import Link from 'next/link'
import styles from './Nav.module.css'
import { useState } from 'react'
import Image from 'next/image'

const Nav = () => {
    const [display, setDisplay] = useState(false)

    if (typeof window !== 'undefined') {
        document.addEventListener('keyup', () => { setDisplay(false) })
    }
    return (
        <nav className={styles.nav}>
            {/* This is our mobile navigation bar. */}
            <div className={styles.mobile}>
                <Link className={styles.logo}
                    href="/">
                    <Image
                        src="/logo.png"
                        alt="A logo image."
                        height={64}
                        width={64}
                        quality={100}
                        priority
                        style={{ objectFit: 'contain' }} />
                </Link>
                <span className={`${styles.hamburger} ${display ? styles.active : ""} `}
                    onClick={() => setDisplay(!display)}>
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                </span>
                {!display ? "" :
                    <ul className={styles.menu}>
                        <li>Item One</li>
                    </ul>
                }
            </div>
            {/* This is our desktop navigation bar. */}
            <div className={styles.desktop}>
                <Link className={styles.logo}
                    href="/">
                    <Image
                        src="/logo.png"
                        alt="A logo image."
                        height={64}
                        width={64}
                        quality={100}
                        priority
                        style={{ objectFit: 'contain' }} />
                </Link>
                <ul className={styles.menu}>
                    <li>
                        <Link className={styles.link} href="/">Home</Link>
                    </li>
                    <li className={`${styles.dropdown}`}>About
                        <ul className={styles.submenu}>
                            <li>
                                <Link className={styles.link} href="/en/about/hartman-vreit-xxi">Hartman VReit XXI</Link>
                            </li>
                            <li>
                                <Link className={styles.link} href="/en/about/executives">Our Executives</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`${styles.dropdown}`}>Lease a Space
                        <ul className={styles.submenu}>
                            <li>
                                <Link className={styles.link} href="/en/leasing/properties">Properties</Link>
                            </li>
                            <li className={`${styles.dropdown}`}>By Location
                                <ul className={styles.aux}>
                                    <li>
                                        <Link className={styles.link} href="/en/leasing/properties/dallas">Dallas</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.link} href="/en/leasing/properties/houston">Houston</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.link} href="/en/leasing/properties/san-antonio">San Antonio</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li ><Link className={styles.link} href="/en/support/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav