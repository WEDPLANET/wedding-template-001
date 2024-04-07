import Image from "next/image"

import {parisienne} from "@/utils/constans/FontList"
import {Bride} from "@/mock/bride"
import {Event} from "@/mock/event"

const Cover = () => {
  const eventDate = new Date(Event.date)
  const formatter = new Intl.DateTimeFormat("id-ID", {dateStyle: "full"})
  const formattedDate = formatter.format(eventDate)

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className={`${parisienne.className} text-[30px]`}>
        Undangan Pernikahan
      </div>
      <Image
        src="/image/bg-001.jpeg"
        alt="Next.js Logo"
        width={280}
        height={37}
        className="my-8 rounded-full border-4 border-[#BEB2C8]"
      />
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
