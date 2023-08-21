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

const Full = ({ children }: Partial<IComponent>) => {
    return (
        <motion.header className={styles.header}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={fadeIn}>
            <Image className={styles.image}
                src={"https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/properties/willowbrook/7915-FM-1960-W-Houston-TX-Entrance-3-LargeHighDefinition.jpg"} //"https://hartman-vreit-xxi.s3.us-east-2.amazonaws.com/images/background.jpg"
                alt=" "
                fill
                objectFit='cover'
                objectPosition='center'
            />
            {children}
        </motion.header>
    )
}
export default Full