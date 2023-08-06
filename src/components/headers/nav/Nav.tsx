"use client"

import Link from 'next/link'
import styles from './Nav.module.css'
import { useState } from 'react'

const Nav = () => {
    const [open, isOpen] = useState(false)

    if (typeof window !== 'undefined') {
        document.addEventListener('keyup', () => { isOpen(false) })
    }
    return (
        <nav className={styles.nav}>
            {/* This is our mobile navigation bar. */}
            <div className={styles.mobile}>
                <span className={styles.burgerIcon}
                    onClick={() => isOpen(!open)}>
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                </span>

            </div>
            {/* This is our desktop navigation bar. */}
            <div className={styles.desktop}>
                <ul className={styles.menu}>
                    <li className={styles.li}><Link className={styles.link} href="/">Home</Link></li>
                    <li className={`${styles.li} ${styles.dropdown}`}>About
                        <ul className={styles.submenu}>
                            <li className={styles.li}><Link className={styles.link} href="/en/about/hartman-vreit-xxi">Hartman VReit XXI</Link></li>
                            <li className={styles.li}><Link className={styles.link} href="/en/about/executives">Our Executives</Link></li>
                        </ul>
                    </li>
                    <li className={`${styles.li} ${styles.dropdown}`}>Lease a Space
                        <ul className={styles.submenu}>
                            <li className={styles.li}><Link className={styles.link} href="/en/leasing/properties">Properties</Link></li>
                            <li className={`${styles.li} ${styles.dropdown}`}>By Location
                                <ul className={styles.aux}>
                                    <li className={styles.li}><Link className={styles.link} href="/en/leasing/properties/dallas">Dallas</Link></li>
                                    <li className={styles.li}><Link className={styles.link} href="/en/leasing/properties/houston">Houston</Link></li>
                                    <li className={styles.li}><Link className={styles.link} href="/en/leasing/properties/san-antonio">San Antonio</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.li}><Link className={styles.link} href="/en/support/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav