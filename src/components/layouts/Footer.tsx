import { FC } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

export const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#333333] to-gray-900 text-gray-200 py-12 shadow-lg">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info Column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-bold text-white relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-white after:left-1/4 after:-bottom-3">
                Giới Thiệu
              </h2>
              <p className="text-sm md:text-base lg:text-base text-gray-300 mt-5 leading-relaxed">
                Chúng tôi luôn muốn mang đến các sản phẩm chất lượng để người dùng có trải nghiệm tốt nhất
              </p>
              <div className="space-y-1 mt-4 text-xs md:text-sm lg:text-base">
                <p>Công Ty TNHH TM Dụng Cụ Tổng Hợp</p>
                <p>Mã số thuế: 0316806043</p>
              </div>
            </div>
            {/* <div className="transform transition-transform duration-300 hover:scale-105">
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                width={180} 
                height={130} 
                className="object-contain" 
              />
            </div> */}
          </div>
  
          {/* Purchase Info Column */}
          <div className="space-y-6">
            <h2 className="uppercase text-lg md:text-xl lg:text-xl font-bold text-white relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-white after:left-1/4 after:-bottom-3">
              Thông tin mua hàng và bảo hành
            </h2>
            <ul className="space-y-4 mt-5 text-sm md:text-base lg:text-md">
              <li className="flex items-start space-x-2 group transition-all duration-300 hover:translate-x-1">
                <div className="mt-1 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="group-hover:text-accent transition-colors duration-300">Mua hàng: <strong>0973 926 139</strong> (8:00 - 22:00)</span>
              </li>
              <li className="flex items-start space-x-2 group transition-all duration-300 hover:translate-x-1">
                <div className="mt-1 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="group-hover:text-accent transition-colors duration-300">Sửa chữa: <strong>0869 757 585</strong> (8:00 - 22:00)</span>
              </li>
              <li className="flex items-start space-x-2 group transition-all duration-300 hover:translate-x-1">
                <div className="mt-1 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="group-hover:text-accent transition-colors duration-300">Bảo hành: <strong>0973 976 139</strong> (8:00 - 22:00)</span>
              </li>
            </ul>
          </div>
  
          {/* Contact Info Column */}
          <div className="space-y-6">
            <h2 className="uppercase text-lg md:text-xl lg:text-xl font-bold text-white relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-white after:left-1/4 after:-bottom-3">
              Liên Hệ
            </h2>
            <ul className="space-y-4 mt-5 text-sm md:text-base lg:text-md">
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <p className="text-gray-300">0973.926.139</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">mayxaydungmoi.co@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p className="text-gray-300">287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-10">
          <a href="https://www.facebook.com/makitatools.vn" className="bg-gray-700 p-2 rounded-full text-white hover:bg-accent hover:text-white transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@makitatools.vn" className="bg-gray-700 p-2 rounded-full text-white hover:bg-accent hover:text-white transition-all duration-300">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M12 2C12 1.447 12.447 1 13 1c0 2.485 1.79 4.518 4.157 4.9A5.003 5.003 0 0 0 19 6v3.5c-1.074 0-2.147-.242-3.073-.699a5.002 5.002 0 0 1-1.927-1.762v7.703a3.991 3.991 0 0 1-1.222 2.876A4.002 4.002 0 0 1 7 19a4 4 0 0 1-3.167-6.494A3.993 3.993 0 0 1 9 10c.342 0 .678.045 1 .13V12a2 2 0 0 0-1-.27 2 2 0 0 0 0 4c.537 0 1.047-.211 1.428-.586A1.992 1.992 0 0 0 11 14V2h1z"/>
</svg>
          </a>
          <a href="https://www.youtube.com/@mayxaydungmoi" className="bg-gray-700 p-2 rounded-full text-white hover:bg-accent hover:text-white transition-all duration-300">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M23.498 6.186a2.86 2.86 0 0 0-2.01-2.02C19.195 3.5 12 3.5 12 3.5s-7.195 0-9.488.666a2.86 2.86 0 0 0-2.01 2.02C0 8.5 0 12 0 12s0 3.5.502 5.814a2.86 2.86 0 0 0 2.01 2.02C4.805 20.5 12 20.5 12 20.5s7.195 0 9.488-.666a2.86 2.86 0 0 0 2.01-2.02C24 15.5 24 12 24 12s0-3.5-.502-5.814zM9.75 15.33V8.67L15.75 12l-6 3.33z"/>
</svg>
          </a>
        </div>
  
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-xs md:text-sm lg:text-base text-gray-400">© 2024 Sữa Chữa Máy Hàn. All rights reserved.</p>
          <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-1">Thiết kế website bởi <span className="text-white hover:underline cursor-pointer">NguyenCuong</span></p>
        </div>
      </div>
    </footer>
  )
}

