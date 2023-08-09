"use client"

import { motion, Variants } from 'framer-motion'
import styles from './Inspire.module.css'
import BetterLink from '../common/buttons/BetterLink'
import Link from 'next/link'

const fadeIn: Variants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Inspire = () => {
    return (
        <motion.div className={styles.inspire}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={fadeIn}>
            <div className={styles.div}>
                <div className={styles.wrapper}>
                    <h6>Don't miss out on the opportunity to elevate your business with a professional and fully-equipped workspace.</h6>
                </div>
                <div className={styles.wrapper}>
                    <Link className={styles.link} href='/en/leasing/properties'>Browse</Link>
                </div>
            </div>
        </motion.div>
    )
}
export default Inspire