import Vessel from '@/components/common/Vessel'
import Slideshow from '@/components/common/slideshows/Slideshow'
import { PROPERTIES } from '@/data/Properties'
import { ResolvingMetadata } from 'next'
import styles from './Page.module.css'
import Box from '@/components/common/Box'
import Link from 'next/link'

type Props = {
    params: { property: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
/*
export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata) {
    const id = params.property
    let data = ''
    console.log(parent)
    PROPERTIES.map((value) => {
        if (value.id === id) {
            data = value.displayName
        }
    })
    return {
        title: data
    }
}

/* This will populate our routes. */
export async function generateStaticParams() {
    return getPaths()
}

/* This function will return the ids used in the generateStaticParams() function. */
async function getPaths() {
    const paths: string[] = []

    PROPERTIES.map((value) => {
        paths.push(value.id)
    })

    return paths
}

/* This is what is displayed on each page as pulled from the params. */
const Page = ({ params, searchParams }: Props) => {
    return (
        <Vessel>
            {PROPERTIES.map((value, index) => {
                if (params.property === value.id) {
                    return (
                        <div className={styles.wrapper}
                            key={index}>
                            {/* This is our heading. */}
                            <div className={styles.header}>
                                <h5>{value.displayName}</h5>
                                <h6>{value.address.street}, {value.address.city}, {value.address.state} {value.address.zipCode}</h6>
                            </div>
                            {/* This is our slideshow. */}
                            <div className={styles.slideshow}>
                                <Slideshow
                                    values={value.images} />
                            </div>
                            {/* This is our overview. */}
                            <div className={styles.overview}>
                                <h6>Property Overview</h6>
                                <p>{value.description}</p>
                            </div>
                            {/* These are our property managers and engineers. */}
                            <div className={styles.staff}>
                                <p>Property Staff</p>
                            </div>
                            {/* These are our available spaces. */}
                            <div className={styles.availableSpaces}>
                                <p>Available Spaces</p>
                            </div>
                            {/* These are our reviews. */}
                            <div className={styles.reviews}>
                                <p>Reviews</p>
                            </div>
                            <div className={styles.amenities}>
                                <p>Amenities</p>
                            </div>
                            <div className={styles.hours}>
                                <p>Hours</p>
                            </div>
                            <div className={styles.resources}>
                                <h5>Resources</h5>
                                <Link href={`${value.links.loopnet}`} target='_blank' rel='noreferrer noopener'>Loopnet</Link>
                                <Link href={`${value.links.flyer}`} target='_blank' rel='noreferrer noopener'>Official Property Flyer</Link>
                            </div>
                        </div>
                    )
                }
            })}
        </Vessel>
    )
}
export default Page