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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <ul className={styles.submenu}>
                        <li><Link href="/">Hartman VReit XXI</Link></li>
                        <li><Link href="/">Our Executives</Link></li>
                    </ul>
                    <li><Link href="/">Lease a Space</Link></li>
                    <ul className={styles.submenu}>
                        <li><Link href="/">Properties</Link></li>
                        <li><Link href="/">By Location</Link></li>
                    </ul>
                    <li><Link href="/">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav