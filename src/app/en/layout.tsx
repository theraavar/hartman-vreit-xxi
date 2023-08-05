import Vessel from "@/components/common/Vessel"
import Banner from "@/components/headers/Banner"

const Layout = ({ children }: { children: React.ReactNode }){
    return (
        <Vessel>
            <Banner>
            </Banner>
            <main>
                {children}
            </main>

        </Vessel>
    )
}