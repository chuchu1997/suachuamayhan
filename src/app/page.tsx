
'use client'

import { bancatgachCoDemData, bancatgachData, bancatgachRyobiPro, honda, makita, maybomnuocPanasonic, mayruaxePanapro,  } from "@/data/data";
import dynamic from "next/dynamic";
import Banner from "@/components/Banner";
import Services from "@/components/layouts/Services"

const VideoDescription = dynamic(() => import("@/components/layouts/Videos"), { ssr: false });
const SliderWithProducts = dynamic(()=>import("@/components/SliderWithProducts"),{ssr:false});

export default function Home() {

  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Services/>
      </section>

      <section id ="mayhan_hongkypro">
        <SliderWithProducts products={bancatgachData} title="Máy hàn Hồng Ký Pro" />
      </section>

      <section id = "quehan_kimtin">
        <SliderWithProducts products={bancatgachCoDemData} title="Que hàn Kim Tín" />
      </section>

      <section id = "mayhan_jasic">
        <SliderWithProducts products={bancatgachRyobiPro} title="Máy hàn Jasic " />
      </section>

      <section id="mayhan_hongky">
        <SliderWithProducts products={mayruaxePanapro} title="Máy hàn Hồng Ký HK " />
      </section>


      <section id ="mayhanco_hongky">
        <SliderWithProducts products={makita} title="Máy hàn cơ Hồng Ký - Tiến Đạt" />
      </section>

      <section id="makita">
        <SliderWithProducts products={maybomnuocPanasonic} title="Makita" />
      </section>
      <section id="maynenkhi">
        <SliderWithProducts products={honda} title="Máy nén khí" />
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
