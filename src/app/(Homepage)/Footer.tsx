import {cabin, parisienne} from "@/utils/constans/FontList"

const FooterComponent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-12 p-8">
      <div className={`${cabin.className}`}>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak /
        Ibu / Saudara / i. berkenan hadir untuk memberikan do&apos;a restunya
        kami ucapkan terimakasih.
      </div>
      <div className={`${parisienne.className} text-2xl mt-4`}>
        Wassalamualaikum Wr. Wb.
      </div>
    </div>
  )
}

export default FooterComponent
