import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";

import { catalogData } from "../data/catalogData";

export default function Pyme() {

  return (

    <>
      <HeaderPages/>

      <section className="page-hero">
        <h1>Soluciones de Red para PyME</h1>
        <p>
          Infraestructura tecnológica diseñada para empresas en crecimiento.
        </p>
      </section>

      <CatalogSection
        title="Servicios para PyME"
        items={catalogData.pyme}
      />

      <Footer/>

    </>

  );

}
