import "./styles.css"
import {useRef} from "react"

import Cover from "./Cover"
import Quotes from "./Quotes"
import Bride from "./Bride"
import Event from "./Event"
import Location from "./Location"
// import Gift from "./LoveGift"
import Footer from "./Footer"

const pages = [
  {id: 0, color: "#68a832", component: <Cover />},
  {id: 1, color: "#9120fa", component: <Quotes />},
  {id: 2, color: "#9120fa", component: <Bride />},
  {id: 3, color: "#ffa90a", component: <Event />},
  {id: 4, color: "#ffa90a", component: <Location />},
  // {id: 5, color: "#68a832", component: <Gift />},
  {id: 6, color: "#9120fa", component: <Footer />},
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
        <PageComponent key={item.id}>{item.component}</PageComponent>
      ))}
    </>
  )
}
