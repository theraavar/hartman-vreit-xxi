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
    const id = params.id

    const result = await fetch(`https://.../${id}`).then((res) => res.json())

    /* Any of the metadata options that we want to generate needs to be in the return statement. */
/*
return {
    title: result.title
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
                            <div className={styles.heading}>
                                <h4>{value.displayName}</h4>
                                <h5>{value.address.street}, {value.address.city}, {value.address.state} {value.address.zipCode}</h5>
                            </div>
                            <div className={styles.slideshow}>
                                <Slideshow
                                    values={value.images} />
                            </div>
                            <div className={styles.description}>
                                {value.description}
                            </div>
                            <div className={styles.people}>

                            </div>
                            <div className={styles.availableSpaces}>

                            </div>
                            <div className={styles.reviews}>

                            </div>
                            <div className={styles.amenities}>

                            </div>
                            <div className={styles.hours}>

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