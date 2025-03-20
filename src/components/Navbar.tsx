
// import * as Dialog from "@radix-ui/react-dialog"

import Image from "next/image"

import { ButtonPhoneCall } from "./ButtonPhoneCall"



export const Navbar = () => {


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              width={100}
              height={50}
              alt="Logo"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
              // Prevent any layout shift during loading
              priority={true}
            />
          </div>
                <div className = "block sm:hidden">
                <ButtonPhoneCall />
                </div>


          <div className = "hidden sm:flex flex-row gap-6  ">
            <Image src = "/images/brands/1.jpg" height = {100} width={100} quality={100} alt = "honda" priority></Image>
            <Image src = "/images/brands/2.jpg" height = {100} width={100} alt = "panapro" priority></Image>
            <Image src = "/images/brands/3.jpg" height = {100} width={100} alt = "mikasa" priority></Image>
            <Image src = "/images/brands/4.jpg" height = {100} width={100} alt = "seoul" quality={100}  priority></Image>
          </div>


        </div>
      </div>
    </nav>
  )
}

