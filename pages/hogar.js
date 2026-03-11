import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";

import { catalogData } from "../data/catalogData";

export default function Hogar() {

  return (

    <>
      <HeaderPages/>

      <section className="page-hero">
        <h1>Conectividad para tu Hogar</h1>
        <p>
          Disfruta WiFi rápido y estable en toda tu casa.
        </p>
      </section>

      <CatalogSection
        title="Servicios para el Hogar"
        items={catalogData.hogar}
      />

      <Footer/>

    </>

  );

}
