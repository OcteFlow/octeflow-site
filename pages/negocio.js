import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import BannerPage from "../components/BannerPage";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";
import ProcessSection from "../components/ProcessSection";
import UseCasesSection from "../components/UseCasesSection";
import { useCasesData } from "../data/useCasesData";
import BrandsSection from "../components/BrandsSection";
import CTASection from "../components/CTASection";

import { catalogData } from "../data/catalogData";

export default function Negocio() {

  return (

    <>
      <HeaderPages/>

      <Head>
        <title>Soluciones para tu Negocio | OcteFlow</title>
      </Head>

    <BannerPage
title="Soluciones para tu Negocio"
subtitle="Diseñadas para mejorar la conectividad, la protección y la experiencia de tus clientes."
image="/negocio.jpg"
  />

      <CatalogSection
        title="Soluciones para Negocios"
        items={catalogData.negocio}
      />

        <ProcessSection/>

        <UseCasesSection
title="Casos de uso para negocios"
cases={useCasesData.negocio}
/>

  <BrandsSection showTitle={false} />
        
        <CTASection
        title="Mejora la conectividad de tu negocio"
        text="Podemos evaluar tu red actual y proponerte una solución profesional."
        button="Solicitar asesoría"
      />

      <Footer/>

    </>

  );

}
