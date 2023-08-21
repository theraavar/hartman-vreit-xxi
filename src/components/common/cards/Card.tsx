'use client'

import styles from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'

const scrollIn: Variants = {
    hide: {
        opacity: 0,
        y: 100,
    },
    leave: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
        }
    }
}

const Card = ({ children, image, link }: Partial<IComponent>) => {
    return (
        <motion.div className={styles.div}
            initial="hide"
            whileInView="show"
            exit="leave"
            variants={scrollIn}>
            <Link className={styles.card}
                href={`${link}`}>
                <div className={styles.wrapper}>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image}
                            src={image || ""}
                            alt=""
                            height={1080}
                            width={1920}
                            quality={100}
                            role='presentation'
                            style={{ objectFit: "fill" }} />
                    </div>
                    <div className={styles.textContainer}>
                        {children}
                    </div>
                </div>
            </Link>
        </motion.div>

    )
}
export default Card