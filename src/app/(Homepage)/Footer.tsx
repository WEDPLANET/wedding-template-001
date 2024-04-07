import {cabin, parisienne} from "@/utils/constans/FontList"

const FooterComponent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-12 p-8">
      <div className={`${cabin.className} bg-[#36413e]`}>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak /
        Ibu / Saudara / i. berkenan hadir untuk memberikan do'a restunya kami
        ucapkan terimakasih.
      </div>
      <div className={`${parisienne.className} text-2xl`}>
        Wassalamualaikum Wr. Wb.
      </div>
    </div>
  )
}

export default FooterComponent
