import Main from "@/components/Main"
import Vessel from "@/components/common/Vessel"
import Footer from "@/components/footers/Footer"
import Banner from "@/components/headers/Banner"
import Nav from "@/components/headers/nav/Nav"

const Page = () => {
    return (
        <Vessel>
            <Banner>
                <Nav />
            </Banner>
            <Main>
                <h1>Error 404: Page Not Found</h1>
            </Main>
            <Footer>

            </Footer>
        </Vessel>
    )
}
export default Page