"use client"
import {useState, useEffect, useMemo} from "react"
import Particles, {initParticlesEngine} from "@tsparticles/react"
import {loadFull} from "tsparticles"
import {type ISourceOptions} from "@tsparticles/engine"
import {ParticleBasicOptions} from "@/utils/constans/ParticleOptions"

import HomePage from "./(Homepage)"

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center">
      {initParticle && (
        <Particles id="tsparticles" options={options} className="-z-10" />
      )}
      <HomePage />
    </main>
  )
}
