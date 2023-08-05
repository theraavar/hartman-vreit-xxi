"use client"

import { motion, Variants } from 'framer-motion'
import styles from './Full.module.css'

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

const Full = ({ children, title }: Partial<IComponent>) => {
    return (
        <motion.header className={styles.header}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={fadeIn}>
            {title}
            {children}
        </motion.header>
    )
}
export default Full