import {Button} from "@mui/material"
import {parisienne, cabin} from "@/utils/constans/FontList"
import {Event} from "@/mock/event"
// import countdown  from "countdown"
// import Countdown from "react-countdown"

// const countdown = require("countdown")

const EventComponent = () => {
  const eventDate = new Date(Event.date)
  const formatter = new Intl.DateTimeFormat("id-ID", {dateStyle: "full"})
  const formattedDate = formatter.format(eventDate)

  // console.log("countdown", countdown(new Date("05/04/2024")))

  return (
    <div className="flex flex-col items-center text-center gap-4 p-8">
      <div className={`${parisienne.className} text-2xl`}>
        Waktu Menuju Acara
      </div>
      {/* <Countdown date={new Date(Event.date)}>
        <div>ulala</div>
      </Countdown> */}
      <div className={`${cabin.className} flex gap-2 mb-4text-sm`}>
        <div className="border rounded-lg w-16 h-12 text-center justify-center flex flex-col">
          9 D
        </div>
        <div className="border rounded-lg w-16 h-12 text-center justify-center flex flex-col">
          9 H
        </div>
        <div className="border rounded-lg w-16 h-12 text-center justify-center flex flex-col">
          9 M
        </div>
        <div className="border rounded-lg w-16 h-12 text-center justify-center flex flex-col">
          9 S
        </div>
      </div>
      <div className={`${cabin.className} flex flex-col gap-4 mb-4`}>
        <div>
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala,
          insyaAllah kami akan menyelenggarakan acara :
        </div>
        <div className={`${parisienne.className} text-2xl`}>Akad</div>
        <div>
          {Event.akad.start} - {Event.akad.end}
        </div>
        <div className={`${parisienne.className} text-2xl`}>Resepsi</div>
        <div>
          {Event.resepsi.start} - {Event.resepsi.end}
        </div>
        <div className="mt-8">{formattedDate}</div>
      </div>
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
      <div className={cabin.className}>{Event.place}</div>
    </div>
  )
}

export default EventComponent
