import {parisienne, cabin} from "@/utils/constans/FontList"
import {Event} from "@/mock/event"
import Image from "next/image"
import {AddToCalendarButton} from "add-to-calendar-button-react"
import {Bride} from "@/mock/bride"
import {useMemo} from "react"

const EventComponent = () => {
  const eventDate = new Date(Event.date)
  const formatter = new Intl.DateTimeFormat("id-ID", {dateStyle: "full"})
  const formattedDate = formatter.format(eventDate)

  const calculateTimeLeft = () => {
    // @ts-ignore: Unreachable code error
    const difference = new Date(Event.date) - new Date()
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30)) // Convert milliseconds to months
    const days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    )
    const years = Math.floor(months / 12)

    return {years, months, days}
  }

  const renderedDate = useMemo(() => {
    const eventDate = new Date(Event.date)
    const fullYear = eventDate.getFullYear()
    const month = String(eventDate.getMonth() + 1).padStart(2, "0")
    const day = String(eventDate.getDate()).padStart(2, "0")

    return {year: String(fullYear), month, day}
  }, [Event.date])

  return (
    <div className="flex flex-col items-center text-center gap-4 p-8">
      <div className={`${parisienne.className} text-3xl font-semibold`}>
        Waktu Menuju Acara
      </div>
      <Image
        src="/image/flower_004.png"
        alt="Next.js Logo"
        width={240}
        height={37}
        className="absolute z-[-1] opacity-75 left-0"
      />
      <div className={`${cabin.className} flex gap-2 mb-4text-sm`}>
        <div className="border border-[#7C606B] border-4 rounded-lg text-center justify-center flex flex-col p-4 py-2">
          <span className="absolute border h-12 w-20 rounded-lg bg-[#7C606B] opacity-25 animate-ping"></span>
          {calculateTimeLeft().days} Hari Lagi
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
        <div className="flex justify-center">
          <AddToCalendarButton
            name={`Wedding ${Bride.woman.nickName} & ${Bride.man.nickName}`}
            startDate={`${renderedDate.year}-${renderedDate.month}-${renderedDate.day}`}
            startTime={Event.akad.start}
            endTime={Event.resepsi.end}
            timeZone="Asia/Jakarta"
            location={Event.placeName}
            options="'Google'"
            size="2"
            buttonsList
            label="Add to Calendar"
          ></AddToCalendarButton>
        </div>
      </div>
    </div>
  )
}

export default EventComponent
