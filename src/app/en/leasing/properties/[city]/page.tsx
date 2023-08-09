import Grid from '@/components/common/Grid'
import Vessel from '@/components/common/Vessel'
import Card from '@/components/common/cards/Card'
import { PROPERTIES } from '@/data/Properties'
import { ResolvingMetadata } from 'next'

type Props = {
    params: { city: string }
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

    paths.push('dallas')
    paths.push('houston')
    paths.push('san-antonio')

    return paths
}

/* This is what is displayed on each page as pulled from the params. */
const Page = ({ params, searchParams }: Props) => {
    let id = params.city
    if (id === 'san-antonio') {
        id = 'San Antonio'
    } else if (id === 'houston') {
        id = 'Houston'
    }

    const properties: ({
        address: { city: string; state: string; street: string; zipCode: string }; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; amenities?: undefined; description?: undefined
        schedules?: undefined; class?: undefined; year?: undefined; suites?: undefined; size?: undefined
    } | { address: { city: string; state: string /* This will populate our routes. */; street: string; zipCode: string }; amenities: string[]; description: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; schedules: { building: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }; security?: undefined }; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; class?: undefined; year?: undefined; suites?: undefined; size?: undefined } | { address: { city: string; state: string; street: string; zipCode: string }; amenities: string[]; class: string; description: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; schedules: { building: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }; security?: undefined }; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; year: string; suites?: undefined; size?: undefined } | { address: { city: string; state: string; street: string; zipCode: string }; amenities: string[]; description: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; schedules: { building: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }; security: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string } }; suites: { available: boolean; id: string; images: string[]; psf: string; sqft: string }[]; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; class?: undefined; year?: undefined; size?: undefined } | { address: { city: string; state: string; street: string; zipCode: string }; amenities: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; schedules: { building: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }; security: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string } }; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; year: string; description?: undefined; class?: undefined; suites?: undefined; size?: undefined } | { address: { city: string; state: string; street: string; zipCode: string }; amenities: string[]; description: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; schedules: { building: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }; security: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string } }; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; class?: undefined; year?: undefined; suites?: undefined; size?: undefined } | { address: { city: string; state: string; street: string; zipCode: string }; amenities: string[]; description: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; schedules: { building: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }; security: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string } }; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; year: string; class?: undefined; suites?: undefined; size?: undefined } | { address: { city: string; state: string; street: string; zipCode: string }; amenities: string[]; class: string; description: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; loopnet: string; url: string }; schedules: { building: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }; security: { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string } }; size: string; suites: { available: boolean; id: string; images: string[]; psf: string; sqft: string }[]; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; year: string } | { address: { city: string; state: string; street: string; zipCode: string }; description: string[]; displayName: string; id: string; images: string[]; links: { flyer: string; url: string; loopnet?: undefined }; toggle: { address: boolean; amenities: boolean; class: boolean; description: boolean; displayName: boolean; id: boolean; images: boolean; links: { flyer: boolean; loopnet: boolean; url: boolean }; schedules: { building: boolean; security: boolean }; size: boolean; suites: boolean; type: boolean; year: boolean }; amenities?: undefined; schedules?: undefined; class?: undefined; year?: undefined; suites?: undefined; size?: undefined })[] = []
    PROPERTIES.map((value) => {
        if (value.address.city === id) {
            properties.push(value)
        }
        if (params.city === 'dallas') {
            if (value.address.city === 'The Colony' || value.address.city === 'Richardson') {
                properties.push(value)
            }
        }
    })
    return (
        <Vessel>
            <Grid>
                {properties.map((value, index) => {
                    return (
                        <Card
                            key={index}
                            image={value.images[0]}
                            link={value.links.url}>
                            <h5>{value.displayName}</h5>
                            <h6>{value.address.street}<br />{value.address.city}, {value.address.state} {value.address.zipCode}</h6>
                        </Card>
                    )
                })}
            </Grid>
        </Vessel>
    )
}
export default Page