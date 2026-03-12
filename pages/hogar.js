import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
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

      <section className="page-hero">
        <h1>Conectividad inteligente para tu Hogar</h1>
        <p>
          Disfruta WiFi rápido y estable en toda tu casa con una red bien
          diseñada.
        </p>
      </section>

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
