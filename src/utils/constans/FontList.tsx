import localFont from "next/font/local"
import {Cabin} from "next/font/google"

export const parisienne = localFont({
  src: "../../assets/font/Parisienne-Regular.ttf"
})

export const cabin = Cabin({
  subsets: ["latin"]
})
