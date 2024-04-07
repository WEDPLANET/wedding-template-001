"use client"
import {useState, useMemo, useEffect} from "react"
import {Button} from "@mui/material"
import {useParams, useRouter} from "next/navigation"
import Image from "next/image"
import Particles, {initParticlesEngine} from "@tsparticles/react"
import {loadFull} from "tsparticles"
import {type ISourceOptions} from "@tsparticles/engine"

import {ParticleBasicOptions} from "@/utils/constans/ParticleOptions"
import {parisienne, cabin} from "@/utils/constans/FontList"
import {Bride} from "@/mock/bride"

const InvitationCover = () => {
  const {slug} = useParams<{slug: string}>()
  const router = useRouter()

  const [initParticle, setInitParticle] = useState<boolean>(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInitParticle(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(() => ({...ParticleBasicOptions}), [])

  return (
    <div className="flex flex-col justify-center items-center text-center h-screen p-8">
      {initParticle && (
        <Particles
          id="tsparticles"
          // particlesLoaded={particlesLoaded}
          options={options}
          className="-z-10"
        />
      )}
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
        <div>Kepada Bpk/Ibu/Saudara/i</div>
        <div className="font-bold text-lg">- {slug} -</div>
        <div className={`${cabin.className}`}>
          Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di
          acara pernikahan kami.
        </div>
        <Button
          variant="contained"
          color="info"
          onClick={() => router.push("/")}
        >
          Buka Undangan
        </Button>
        <div className={`${cabin.className}`}>
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </div>
      </div>
    </div>
  )
}

export default InvitationCover
