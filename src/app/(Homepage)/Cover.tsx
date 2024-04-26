import Image from "next/image"
import {motion} from "framer-motion"

import {parisienne} from "@/utils/constans/FontList"
import {Bride} from "@/mock/bride"
import {Event} from "@/mock/event"

const Cover = () => {
  const eventDate = new Date(Event.date)
  const formatter = new Intl.DateTimeFormat("id-ID", {dateStyle: "full"})
  const formattedDate = formatter.format(eventDate)

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div
        className={`${parisienne.className} text-[30px] lg:text-[40px] xs:text-[35px] font-medium`}
      >
        Undangan Pernikahan
      </div>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <Image
          src="/image/sundanese_traditional_wedding.png"
          alt="Next.js Logo"
          width={240}
          height={37}
          className="my-8 rounded-full border-4 border-[#7C606B]"
          style={{
            boxShadow: "rgb(38, 57, 77) 0px 15px 30px -10px",
          }}
        />
      </motion.div>
      <div className={`${parisienne.className} text-4xl`}>
        {Bride.woman.nickName}
      </div>
      <div className={`${parisienne.className}`}>&</div>
      <div className={`${parisienne.className} text-4xl`}>
        {Bride.man.nickName}
      </div>
      <div className="mt-8">{formattedDate}</div>
    </div>
  )
}

export default Cover
