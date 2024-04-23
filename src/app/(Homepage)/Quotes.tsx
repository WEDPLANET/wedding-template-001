import {cabin, parisienne} from "@/utils/constans/FontList"
import Image from "next/image"

const QuotesComponent = () => {
  return (
    <div className="flex flex-col justify-around items-center text-center gap-2 p-8">
      <Image
        src="/image/flower_002.png"
        alt="Next.js Logo"
        width={240}
        height={37}
        className="mb-12"
      />
      <div className={`${parisienne.className} text-xl mb-4 text-[#55585c]`}>
        Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
        pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
        tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
        sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
      </div>
      <div className={`${cabin.className} my-2`}>Ar-Rum · Ayat 21</div>
    </div>
  )
}

export default QuotesComponent
