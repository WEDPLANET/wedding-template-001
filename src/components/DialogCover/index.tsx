import {Dialog, Button} from "@mui/material"
import Image from "next/image"

import {parisienne, cabin} from "@/utils/constans/FontList"
import {Bride} from "@/mock/bride"
import {Event} from "@/mock/event"

type PropsType = {
  open: boolean
  onClose: () => void
}

const DialogCover = (props: PropsType) => {
  const {open, onClose} = props
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      // TransitionComponent={Transition}
      // sx={{backgroundImage: "url('/image/bg-pink-blue.jpg')"}}
    >
      <div className="flex flex-col justify-center items-center text-center h-screen p-8 bg-[url('/image/bg-pink-blue.jpg')]">
        <div className={`${parisienne.className} text-4xl font-medium`}>
          Undangan Pernikahan
        </div>
        <Image
          src="/image/Bride_And_Groom_clipart.png"
          alt="Next.js Logo"
          width={350}
          height={37}
          priority
        />
        <div className="flex flex-col gap-4 items-center">
          <div className={`${parisienne.className} text-4xl`}>
            {Bride.woman.nickName} & {Bride.man.nickName}
          </div>
          {/* <div>Kepada Bpk/Ibu/Saudara/i</div>
          <div className="font-bold text-lg">- {to} -</div> */}
          <div className={`${cabin.className}`}>
            Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di
            acara pernikahan kami.
          </div>
          <Button
            variant="contained"
            color="info"
            onClick={onClose}
            // onClick={() => router.push("/")}
          >
            Buka Undangan
          </Button>
          {/* <div className={`${cabin.className}`}>
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </div> */}
        </div>
      </div>
    </Dialog>
  )
}

export default DialogCover
