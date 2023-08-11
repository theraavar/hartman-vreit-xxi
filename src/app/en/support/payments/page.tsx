import Box from "@/components/common/Box"
import Vessel from "@/components/common/Vessel"
import Title from "@/components/headers/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Tenants'
}

const Page = () => {
    return (
        <Vessel>
            <Title title='Payment Information' />
            <Box>
                <p>Please make sure all payments are directed to : <br />Attn: Margaret Hartman<br />11211 Katy Freeway Ste. 309<br />Houston, TX 77079</p>
            </Box>
        </Vessel >
    )
}
export default Page