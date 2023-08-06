import Main from "@/components/Main"
import Vessel from "@/components/common/Vessel"
import Footer from "@/components/footers/Footer"
import Full from "@/components/headers/Full"
import Title from "@/components/headers/Title"
import Nav from "@/components/headers/nav/Nav"
import { motion } from "framer-motion"

const Page = () => {
  return (
    <Vessel>
      <Full
        title={<Title />}>
        <Nav />
      </Full>
      <Main>

      </Main>
      <Footer>

      </Footer>
    </Vessel>
  )
}
export default Page