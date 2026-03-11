import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";
import CTASection from "../components/CTASection";

export default function Hogar() {

  const servicios = [
    {
      title: "WiFi en toda tu casa",
      list: [
        "Eliminación de zonas sin señal",
        "Cobertura en todos los pisos",
        "Configuración de routers y mesh"
      ]
    },
    {
      title: "Red doméstica optimizada",
      list: [
        "Configuración de red",
        "Optimización de velocidad",
        "Conexión estable para streaming y gaming"
      ]
    },
    {
      title: "Seguridad con cámaras",
      list: [
        "Instalación de CCTV",
        "Monitoreo desde celular",
        "Grabación segura"
      ]
    }
  ];

  return (
    <>
      <HeaderPages />

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
        title="Soluciones para tu hogar"
        items={servicios}
      />

      <CTASection
        title="Mejora tu WiFi en casa"
        text="Podemos optimizar tu red doméstica para una mejor experiencia."
        button="Solicitar diagnóstico"
      />

      <Footer />
    </>
  );
}
