import Grid from "@/components/common/Grid"
import Vessel from "@/components/common/Vessel"
import { PROPERTIES } from '../../../../data/Properties'
import Card from "@/components/common/cards/Card"
import Title from "@/components/headers/Title"

const Page = () => {
    return (
        <Vessel>
            <Title title='Properties' />
            <Grid>
                {PROPERTIES.map((value, index) => {
                    return (
                        <Card
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