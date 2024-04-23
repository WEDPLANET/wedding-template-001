import Image from "next/image"
import {cabin, parisienne} from "@/utils/constans/FontList"

const FooterComponent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-12 pt-0 px-8 pb-40">
      <Image
        src="/image/flower_002.png"
        alt="Next.js Logo"
        width={240}
        height={37}
        className="mb-8"
      />
      <div className={`${cabin.className}`}>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak /
        Ibu / Saudara / i. berkenan hadir untuk memberikan do&apos;a restunya
        kami ucapkan terimakasih.
      </div>
      <div className={`${parisienne.className} text-2xl mt-4`}>
        Wassalamualaikum Wr. Wb.
      </div>
      <Image
        src="/image/flower_006.png"
        alt="Next.js Logo"
        width={240}
        height={37}
        className="left-[-10px] absolute bottom-[60px] opacity-75"
      />
    </div>
  )
}

export default FooterComponent
