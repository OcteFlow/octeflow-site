import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";

import { catalogData } from "../data/catalogData";

export default function Negocio() {

  return (

    <>
      <HeaderPages/>

      <section className="page-hero">
        <h1>Conectividad para Negocios</h1>
        <p>
          Soluciones de red y seguridad para locales comerciales.
        </p>
      </section>

      <CatalogSection
        title="Soluciones para Negocios"
        items={catalogData.negocio}
      />

      <Footer/>

    </>

  );

}
