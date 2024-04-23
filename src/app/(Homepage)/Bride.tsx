import {cabin, parisienne} from "@/utils/constans/FontList"
import {Bride} from "@/mock/bride"
import Image from "next/image"

const BrideComponent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-4">
      <div className={`${parisienne.className} text-3xl font-medium`}>
        Assalamualaikum Wr. Wb.
      </div>
      <Image
        src="/image/flower_005.png"
        alt="Next.js Logo"
        width={240}
        height={37}
        className="mb-4 opacity-75"
      />
      <div className={`${cabin.className} my-2`}>
        Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i untuk
        menghadiri acara pernikahan kami:
      </div>
      <div className={`${parisienne.className} text-4xl`}>
        {Bride.woman.fullName}
      </div>
      <div className={cabin.className}>Putri</div>
      <div className={cabin.className}>
        Bapak {Bride.woman.fatherName} & Ibu {Bride.woman.motherName}
      </div>
      <div className={`${parisienne.className} my-2 text-3xl font-semibold`}>
        &
      </div>
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
