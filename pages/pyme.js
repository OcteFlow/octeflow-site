import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import BannerPage from "../components/BannerPage";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";

import { catalogData } from "../data/catalogData";

export default function Pyme() {

  return (

    <>
      <HeaderPages/>

    <Head>
        <title>Soluciones de Red para PyME | OcteFlow</title>
      </Head>

    <BannerPage
title="Soluciones para PyME"
subtitle="Infraestructura de red profesional diseñada para empresas que necesitan conectividad estable y tecnología preparada para crecer."
image="/pyme.jpg"
  />

      <CatalogSection
        title="Servicios para PyME"
        items={catalogData.pyme}
      />

        <ProcessSection/>
        
        <CTASection
        title="Mejora la conectividad de tu Empresa"
        text="Podemos evaluar tu red actual y proponerte una solución profesional."
        button="Solicitar asesoría"
      />

      <Footer/>

    </>

  );

}
