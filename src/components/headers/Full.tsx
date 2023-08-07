"use client"

import { motion, Variants } from 'framer-motion'
import styles from './Full.module.css'
import Image from 'next/image'

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
            <Image className={styles.image}
                src="/background.jpg"
                alt="A background image."
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />
            {title}
            {children}
        </motion.header>
    )
}
export default Full