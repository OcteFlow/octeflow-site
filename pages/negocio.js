import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";

import { catalogData } from "../data/catalogData";

export default function Negocio() {

  return (

    <>
      <HeaderPages/>

      <Head>
        <title>Redes y WiFi para el Hogar | OcteFlow</title>
      </Head>

      <section className="page-hero">
        <h1>Conectividad inteligente para tu hogar</h1>
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
