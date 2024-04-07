import "./styles.css"
import {useRef} from "react"

import Cover from "./Cover"
import Bride from "./Bride"
import Event from "./Event"
import Gift from "./LoveGift"
import Footer from "./Footer"

const pages = [
  {id: 0, color: "#68a832", component: <Cover />},
  {id: 1, color: "#9120fa", component: <Bride />},
  {id: 2, color: "#ffa90a", component: <Event />},
  {id: 2, color: "#68a832", component: <Gift />},
  {id: 2, color: "#9120fa", component: <Footer />}
]

const PageComponent = ({children}: any) => {
  const ref = useRef(null)

  return (
    <section>
      <div ref={ref}>{children}</div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      {pages.map((item) => (
        <PageComponent>{item.component}</PageComponent>
      ))}
    </>
  )
}
