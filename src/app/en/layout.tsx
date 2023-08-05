import Vessel from "@/components/common/Vessel"
import Banner from "@/components/headers/Banner"
import Main from "@/components/Main"
import Footer from "@/components/footers/Footer"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Vessel>
            <Banner>

            </Banner>
            <Main>
                {children}
            </Main>
            <Footer>

            </Footer>
        </Vessel>
    )
}
export default Layout