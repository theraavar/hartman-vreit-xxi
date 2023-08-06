"use client"

import styles from './Title.module.css'
import { Variants, motion } from "framer-motion"

const fadeIn: Variants = {
    hide: {
        opacity: 0,
        x: -200
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Title = () => {
    return (
        <motion.div className={styles.div}
            initial="hide"
            whileInView="show"
            exit="show"
            variants={fadeIn}>
            <h1>Hartman VReit XXI</h1>
            <h4>Exceptional Service - Inspired Values</h4>
        </motion.div>
    )
}
export default Title