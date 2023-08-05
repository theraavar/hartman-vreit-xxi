"use client"

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
                {!open ? "" :
                    <div className={styles.menu}>
                        <ul>
                            <li>Lease a Space</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                }
            </div>
            {/* This is our desktop navigation bar. */}
            <div className={styles.desktop}>
                Desktop
            </div>
        </nav>
    )
}
export default Nav