"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
// import { toast } from "./ui/use-toast"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    // toast({
    //   description: "Telefone copiado com sucesso!",
    // })
  }

  return (
    <div key={phone} className="flex justify-between">
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
