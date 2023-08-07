import Vessel from "@/components/common/Vessel"
import Contact from "@/components/common/forms/Contact"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Us'
}

const Page = () => {
    return (
        <Vessel>
            <Contact />
        </Vessel>
    )
}
export default Page