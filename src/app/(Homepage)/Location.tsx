import {Button} from "@mui/material"
import {parisienne, cabin} from "@/utils/constans/FontList"
import {Event} from "@/mock/event"
import Image from "next/image"

const LocationComponent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-8">
      <div className={`${parisienne.className} text-3xl font-semibold`}>
        Lokasi Acara
      </div>
      <Image
        src="/image/flower_005.png"
        alt="Next.js Logo"
        width={240}
        height={37}
        className="mb-8 opacity-75"
      />
      <div className={cabin.className}>{Event.place}</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3458894462638!2d107.80734627499255!3d-6.4778008935140665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6939a81e4ce157%3A0xc061d744d03981bc!2sMAKMUR%20GREENLAND!5e0!3m2!1sid!2sid!4v1713884570522!5m2!1sid!2sid"
        height="300"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Button
        component="a"
        variant="contained"
        size="small"
        className="capitalize text-[#36413e]"
        color="inherit"
        href={Event.mapsLink}
        target="_blank"
      >
        Lihat di Google Maps
      </Button>
    </div>
  )
}

export default LocationComponent
