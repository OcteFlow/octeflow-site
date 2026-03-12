import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";
import CTASection from "../components/CTASection";

import { catalogData } from "../data/catalogData";

export default function Pyme() {

  return (

    <>
      <HeaderPages/>

    <Head>
        <title>Soluciones de Red para PyME | OcteFlow</title>
      </Head>
    
      <section className="page-hero">
        <h1>Soluciones para PyME</h1>
        <p>
          Infraestructura tecnológica diseñada para empresas en crecimiento.
        </p>
      </section>

      <CatalogSection
        title="Servicios para PyME"
        items={catalogData.pyme}
      />

        <CTASection
        title="Mejora la conectividad de tu Empresa"
        text="Podemos evaluar tu red actual y proponerte una solución profesional."
        button="Solicitar asesoría"
      />

      <Footer/>

    </>

  );

}
