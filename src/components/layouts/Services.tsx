/** @format */

"use client";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

type Props = {
  id?: string;
};

const itemServices = [
  {
    num: "01",
    title: "Bàn cắt gạch Panapro",
    description: "lorem ipsum dolor sit amet",
    image: "/images/bancatgach/2.png",
    href: "",
    idTarget: "bancatgach",
  },
  {
    num: "02",
    title: "Bàn cắt gạch Ryobi",
    description: "lorem ipsum dolor sit amet",
    image: "/images/bancatgach/3.png",
    href: "",
    idTarget: "bancatgach-ryobi",
  },
  {
    num: "03",
    title: "Máy rửa xe Panapro",
    description: "lorem ipsum dolor sit amet",
    image: "/images/mayruaxe_panapro/1.jpg",
    href: "",
    idTarget: "mayruaxe-panapro",
  },
  {
    num: "04",
    title: "Sản phẩm Makita",
    description: "lorem ipsum dolor sit amet",
    image: "/images/dungcupin_makita/2.png",
    href: "",
    idTarget: "makita",
  },
  {
    num: "05",
    title: "Máy bơm nước Panasonic",
    description: "lorem ipsum dolor sit amet",
    image: "/images/maybomnuoc_panasonic/A-130JAK.png",
    href: "",
    idTarget: "maybomnuoc-panasonic",
  },
  {
    num: "06",
    title: "Sản phẩm Honda",
    description: "lorem ipsum dolor sit amet",
    image: "/images/honda/1.png",
    href: "",
    idTarget: "honda",
  },
];

 const Services = ({ id }: Props) => {
  return (
    <section className="flex flex-col gap-4 px-2 mt-[40px] sm:mt-[100px]" id={id}>
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 text-center">
        Các sản phẩm chính
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-accent">
        {itemServices.map((service) => (
          <div
            key={service.num}
            className="p-4 rounded-lg shadow-md hover:scale-105 transform duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <div className="title-service flex flex-col gap-4">
                <p className="text-2xl md:text-3xl lg:text-4xl italic font-semibold">
                  {service.num}
                </p>
                <p className="text-sm md:text-base lg:text-lg font-semibold italic text-accent/90">
                  {service.title}
                </p>
              </div>
              <div className="image-service">
             
                <Image  src={service.image}
                  alt={service.title} height = {70} width={80} priority />
              </div>
              <div className="action-service">
                <div
                  onClick={() => {
                    const targetElement = document.getElementById(
                      service.idTarget
                    );

                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cursor-pointer bg-accent/20 w-[45px] h-[45px] rounded-full flex justify-center items-center hover:bg-accent transition-all duration-500 hover:-rotate-45">
                  <ArrowDownRight className="text-black" size={"20px"} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;