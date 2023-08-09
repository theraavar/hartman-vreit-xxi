import Vessel from '@/components/common/Vessel'
import Slideshow from '@/components/common/slideshows/Slideshow'
import { PROPERTIES } from '@/data/Properties'
import { ResolvingMetadata } from 'next'
import styles from './Page.module.css'

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
                            <Slideshow
                                values={value.images} />
                        </div>
                    )
                }
            })}
        </Vessel>
    )
}
export default Page