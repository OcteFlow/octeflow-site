import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CatalogSection from "../components/CatalogSection";
import CTASection from "../components/CTASection";

export default function Negocio() {

  const servicios = [
    {
      title: "Red WiFi para negocios",
      list: [
        "Cobertura WiFi profesional",
        "Red para clientes y empleados",
        "Control de acceso",
        "Optimización de velocidad"
      ]
    },
    {
      title: "Cableado estructurado",
      list: [
        "Instalación de red LAN",
        "Organización de rack",
        "Switches empresariales",
        "Certificación de cableado"
      ]
    },
    {
      title: "CCTV para negocios",
      list: [
        "Cámaras IP de alta resolución",
        "Monitoreo remoto",
        "Grabación en red",
        "Instalación profesional"
      ]
    }
  ];

  return (
    <>
      <HeaderPages />

      <Head>
        <title>Soluciones de Red para Negocios | OcteFlow</title>
      </Head>

      <section className="page-hero">
        <h1>Infraestructura Tecnológica para Negocios</h1>
        <p>
          WiFi profesional, redes LAN y videovigilancia diseñadas para
          mantener tu negocio conectado y seguro.
        </p>
      </section>

      <CatalogSection
        title="Soluciones para tu negocio"
        items={servicios}
      />

      <CTASection
        title="Mejora la conectividad de tu negocio"
        text="Podemos evaluar tu red actual y proponerte una solución profesional."
        button="Solicitar asesoría"
      />

      <Footer />
    </>
  );
}
