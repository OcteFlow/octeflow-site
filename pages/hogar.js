import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import BannerPage from "../components/BannerPage";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";
import CTASection from "../components/CTASection";

import { catalogData } from "../data/catalogData";

export default function Hogar() {

  return (

    <>
      <HeaderPages/>

      <Head>
        <title>Soluciones para el Hogar | OcteFlow</title>
      </Head>

    <BannerPage
title="Soluciones para tu Hogar"
subtitle="Conectividad confiable en toda tu casa y tecnología para disfrutar un hogar más cómodo, seguro y eficiente."
/>

      <CatalogSection
        title="Soluciones para tu Hogar"
        items={catalogData.hogar}
      />

        <CTASection
        title="Mejora tu WiFi en casa"
        text="Podemos optimizar tu red doméstica para una mejor experiencia."
        button="Solicitar diagnóstico"
      />

      <Footer/>

    </>

  );

}
