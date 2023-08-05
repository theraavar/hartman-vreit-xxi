import styles from './Footer.module.css'
import Link from "next/link"

const Footer = ({ children }: { children: React.ReactNode }) => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link className={styles.link} href="/en/support/contact-us">Contact Us</Link>
                <Link className={styles.link} href="en/terms-of-use">Terms of Use</Link>
                <Link className={styles.link} href="/en/privacy-notice">Privacy Notice</Link>
                <Link className={styles.link} href="/en/cookie-settings">Cookie Settings</Link>
            </div>
            <span>Copyright © 2023 Hartman VReit XXI. All rights reserved.</span>
        </footer>
    )
}
export default Footer