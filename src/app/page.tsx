"use client"
import {useState, useEffect, useMemo} from "react"
import {Fab} from "@mui/material"
import Particles, {initParticlesEngine} from "@tsparticles/react"
import {loadFull} from "tsparticles"
import {type ISourceOptions} from "@tsparticles/engine"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"

import {ParticleBasicOptions} from "@/utils/constans/ParticleOptions"

import HomePage from "./(Homepage)"
import DialogCover from "@/components/DialogCover"

export default function Home() {
  const [initParticle, setInitParticle] = useState<boolean>(false)
  const [play, setPlay] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onPlayPause = () => {
    const audio = document?.getElementById(`audio-background`)

    if (audio) {
      if (play) {
        // @ts-ignore: Unreachable code error
        audio.pause()
      } else {
        // @ts-ignore: Unreachable code error
        audio.play()
      }
    }
    setPlay(!play)
  }

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInitParticle(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(() => ({...ParticleBasicOptions}), [])

  const onCloseModal = () => {
    const audio = document?.getElementById(`audio-background`)
    // @ts-ignore: Unreachable code error
    audio.play()

    setPlay(true)
    setOpenModal(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <audio id="audio-background" src="/bg-music-0.mp3" loop></audio>
      {initParticle && (
        <Particles id="tsparticles" options={options} className="-z-10" />
      )}
      <HomePage />
      <DialogCover
        open={openModal}
        onClose={() => onCloseModal()}
      />
      <Fab
        color="inherit"
        aria-label="add"
        size="small"
        className="text-[#36413e]"
        onClick={onPlayPause}
        sx={{position: "fixed", bottom: 10, right: 10}}
      >
        {play ? (
          <PauseIcon color="primary" />
        ) : (
          <PlayArrowIcon color="primary" />
        )}
      </Fab>
    </main>
  )
}
