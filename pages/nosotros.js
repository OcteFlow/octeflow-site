import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <>
      <HeaderPages />

      <Head>
        <title>Sobre OcteFlow</title>
      </Head>

      <section className="page-hero">
        <h1>Sobre OcteFlow</h1>
        <p>
          Especialistas en infraestructura de red, conectividad y soluciones
          tecnológicas para empresas y hogares.
        </p>
      </section>

      <section className="page-section">
        <p className="page-text">
          En OcteFlow diseñamos soluciones tecnológicas enfocadas en
          conectividad confiable, seguridad y crecimiento.
        </p>

        <p className="page-text">
          Nuestro enfoque combina diagnóstico técnico, diseño de
          infraestructura y soporte especializado para garantizar redes
          eficientes y escalables.
        </p>
      </section>

      <Footer />
    </>
  );
}
