import Main from "@/components/Main"
import Box from "@/components/common/Box"
import Vessel from "@/components/common/Vessel"
import Footer from "@/components/footers/Footer"
import Banner from "@/components/headers/Banner"
import Nav from "@/components/headers/nav/Nav"

const notFound = () => {
    return (
        <Vessel>
            <Banner>
                <Nav />
            </Banner>
            <Main>
                <Box>
                    <h1>Error 404: Page Not Found</h1>
                </Box>
            </Main>
            <Footer>

            </Footer>
        </Vessel>
    )
}
export default notFound