import {useState} from "react"
import {Button, Snackbar} from "@mui/material"

import {cabin, parisienne} from "@/utils/constans/FontList"
import {BankList} from "@/utils/constans/BankData"
import {Bank} from "@/mock/bank"
import Image from "next/image"

const Gift = () => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  const findBankLogo = (name: string) => {
    const findBank = BankList.find((item) => item.name === name)

    if (findBank) return findBank.image
    return ""
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)

    // Alert the copied text
    setOpenSnackbar(true)
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpenSnackbar(false)
  }

  return (
    <div className="flex flex-col items-center text-center gap-4 p-8">
      <div className={`${parisienne.className} text-4xl`}>Love Gift</div>
      <div className={cabin.className}>
        Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
        kasih untuk kami, dapat melalui :
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {Bank.map((val, i) => {
          return (
            <div
              className="border rounded-lg w-[250px] h-content p-4 items-center flex flex-col gap-2 bg-[#36413e]"
              key={i}
            >
              <Image
                src={findBankLogo(val.bankName)}
                alt="Next.js Logo"
                width={100}
                height={100}
                className="mb-2"
              />
              <div className={cabin.className}>No. Rekening {val.no}</div>
              <div className={cabin.className}>a.n {val.name}</div>
              <Button
                variant="contained"
                className="!capitalize text-[#36413e]"
                size="small"
                color="inherit"
                onClick={() => copyToClipboard(val.no)}
              >
                Salin No. Rekening
              </Button>
            </div>
          )
        })}
        <Snackbar
          anchorOrigin={{vertical: "top", horizontal: "center"}}
          open={openSnackbar}
          autoHideDuration={1000}
          onClose={handleClose}
          message="No rekening telah disalin"
        />
      </div>
    </div>
  )
}

export default Gift
