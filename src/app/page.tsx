


import { SliderWithProducts } from "@/components/SliderWithProducts";

import { bancatgachCoDemData, bancatgachData, bancatgachRyobiPro, honda, makita, maybomnuocPanasonic, mayruaxePanapro,  } from "@/data/data";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/Banner"));
const Services = dynamic(() => import("@/components/layouts/Services"));

const VideoDescription =  dynamic(() => import("@/components/layouts/Videos"));
export default function Home() {

  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Services/>
      </section>

      <section id ="bancatgach">
        <SliderWithProducts products={bancatgachData} title="Bàn cắt gạch Panapro" />
      </section>

      <section>
        <SliderWithProducts products={bancatgachCoDemData} title="Bàn cắt gạch Panapro (Có Đệm)" />
      </section>

      <section id = "bancatgach-ryobi">
        <SliderWithProducts products={bancatgachRyobiPro} title="Bàn cắt gạch Ryobipro " />
      </section>

      <section id="mayruaxe-panapro">
        <SliderWithProducts products={mayruaxePanapro} title="Máy rửa xe Panapro " />
      </section>


      <section id ="makita">
        <SliderWithProducts products={makita} title="Dụng cụ pin Makita" />
      </section>

      <section id="maybomnuoc-panasonic">
        <SliderWithProducts products={maybomnuocPanasonic} title="Máy bơm nước Panasonic" />
      </section>
    
      <section>
        <VideoDescription/>
      </section>


      <section id="honda">
        <SliderWithProducts products={honda} title="Các sản phẩm Honda" />
      </section>
      {/* <section>
        <SliderWithProducts products={product2Dta}  />
      </section> */}
    </div>
  );
}
