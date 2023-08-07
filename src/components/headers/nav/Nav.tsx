"use client"

import Link from 'next/link'
import styles from './Nav.module.css'
import { useState } from 'react'
import Image from 'next/image'

const Nav = () => {
    const [open, isOpen] = useState(false)

    if (typeof window !== 'undefined') {
        document.addEventListener('keyup', () => { isOpen(false) })
    }
    return (
        <nav className={styles.nav}>
            {/* This is our mobile navigation bar. */}
            <div className={styles.mobile}>
                <Image className={styles.logo}
                    src="/logo.png"
                    alt="A logo image."
                    height={64}
                    width={64}
                    quality={100}
                    style={{ objectFit: 'contain' }} />
                <span className={styles.burgerIcon}
                    onClick={() => isOpen(!open)}>
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                </span>
                <div className={styles.wrapper}>

                </div>
            </div>
            {/* This is our desktop navigation bar. */}
            <div className={styles.desktop}>
                <Image className={styles.logo}
                    src="/logo.png"
                    alt="A logo image."
                    height={64}
                    width={64}
                    quality={100}
                    style={{ objectFit: 'contain' }} />
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