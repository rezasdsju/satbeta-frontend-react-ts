import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Features from "./components/Features"
import Footer from "./components/Footer"
// import { useState } from "react"
export default function App() {
  // const [explore,setExplore] = useState<boolean>(false)
  return (
    <div>
      <Nav></Nav>
      <Banner ></Banner>
      {/* {explore && <Features></Features>} */}
      <Features></Features>
      <Footer></Footer>
    </div>
  )
}