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

export default function Home() {
  // const audioUrl =
  //   "https://pinangan.id/wp-content/uploads/2021/10/Pink-Sweat-At-My-Worst-feat-Kehlani-Official-Video.mp3"
  const [initParticle, setInitParticle] = useState<boolean>(false)
  const [play, setPlay] = useState<boolean>(false)
  // const [audio] = useState(new Audio(audioUrl))

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   setPlay(false)
  //   audio.pause()
  //   setTimeout(() => {
  //     audio.play()
  //     setPlay(true)
  //   }, 3000)
  // }, [])

  // useEffect(() => {
  //   play ? audio.play() : audio.pause()
  // }, [play])

  // useEffect(() => {
  //   audio.addEventListener("ended", () => setPlay(false))
  //   return () => {
  //     audio.removeEventListener("ended", () => setPlay(false))
  //   }
  // }, [])

  // const initAudio = () => {
  //   const targetAudio = document.getElementById("audioBtn")
  //   if (targetAudio) targetAudio.pla
  // }

  const onPlayPause = () => {
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

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <audio autoPlay>
        <source src="https://pinangan.id/wp-content/uploads/2021/10/Pink-Sweat-At-My-Worst-feat-Kehlani-Official-Video.mp3"></source>
      </audio> */}
      {initParticle && (
        <Particles id="tsparticles" options={options} className="-z-10" />
      )}
      <HomePage />
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
