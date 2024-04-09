import {cabin, parisienne} from "@/utils/constans/FontList"
import {Bride} from "@/mock/bride"
// import Image from "next/image"

const BrideComponent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-4">
      <div className={`${parisienne.className} text-2xl mb-4`}>
        Assalamualaikum Wr. Wb.
      </div>
      <div className={`${cabin.className} my-2`}>
        Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i untuk
        menghadiri acara pernikahan kami:
      </div>
      {/* <Image
        src="/image/Sample-PNG-Image-square.png"
        alt="Next.js Logo"
        width={80}
        height={80}
        className="rounded-full border-4 border-[#BEB2C8]"
      /> */}
      <div className={`${parisienne.className} text-4xl`}>
        {Bride.woman.fullName}
      </div>
      <div className={cabin.className}>Putri</div>
      <div className={cabin.className}>
        Bapak {Bride.woman.fatherName} & Ibu {Bride.woman.motherName}
      </div>
      <div className="my-2 text-2xl">&</div>
      {/* <Image
        src="/image/Sample-PNG-Image-square.png"
        alt="Next.js Logo"
        width={80}
        height={80}
        className="rounded-full border-4 border-[#BEB2C8]"
      /> */}
      <div className={`${parisienne.className} text-4xl`}>
        {Bride.man.fullName}
      </div>
      <div className={cabin.className}>Putra</div>
      <div className={cabin.className}>
        Bapak {Bride.man.fatherName} & Ibu {Bride.man.motherName}
      </div>
    </div>
  )
}

export default BrideComponent
