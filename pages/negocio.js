import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";
import CTASection from "../components/CTASection";

import { catalogData } from "../data/catalogData";

export default function Negocio() {

  return (

    <>
      <HeaderPages/>

      <Head>
        <title>Redes y WiFi para tu Negocio | OcteFlow</title>
      </Head>

      <section className="page-hero">
        <h1>Soluciones para tu Negocio</h1>
        <p>
          Disfruta WiFi rápido y estable en toda tu casa con una red bien
          diseñada.
        </p>
      </section>

      <CatalogSection
        title="Soluciones para Negocios"
        items={catalogData.negocio}
      />

        <CTASection
        title="Mejora la conectividad de tu negocio"
        text="Podemos evaluar tu red actual y proponerte una solución profesional."
        button="Solicitar asesoría"
      />

      <Footer/>

    </>

  );

}
