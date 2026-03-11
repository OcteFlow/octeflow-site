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

      {/* HERO */}
      <section className="page-hero">
        <h1>Sobre OcteFlow</h1>
        <p>
          Creamos soluciones de conectividad inteligentes para empresas,
          negocios y hogares que necesitan redes confiables y seguras.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="page-section">

        <h2 className="section-title">Nuestra Misión</h2>

        <p className="page-text">
          En OcteFlow ayudamos a empresas y negocios a contar con redes
          modernas, seguras y escalables que les permitan operar sin
          interrupciones.
        </p>

        <p className="page-text">
          Diseñamos, implementamos y optimizamos infraestructura de red,
          conectividad inalámbrica y sistemas de seguridad tecnológica
          con estándares profesionales.
        </p>

      </section>

      {/* QUE HACEMOS */}
      <section className="page-section gray">

        <h2 className="section-title">Qué Hacemos</h2>

        <div className="service-grid">

          <div className="service-card">
            <h3>Redes Profesionales</h3>
            <p>
              Diseño e implementación de redes LAN y WiFi para empresas
              que necesitan conectividad estable y escalable.
            </p>
          </div>

          <div className="service-card">
            <h3>Seguridad y CCTV</h3>
            <p>
              Sistemas de videovigilancia IP y soluciones de monitoreo
              para proteger tu empresa o negocio.
            </p>
          </div>

          <div className="service-card">
            <h3>Optimización de Infraestructura</h3>
            <p>
              Mejora de redes existentes para eliminar fallas,
              zonas muertas y problemas de rendimiento.
            </p>
          </div>

        </div>

      </section>

      <CTASection
        title="Mejora la conectividad de tu red"
        text="Podemos evaluar tu red actual y proponerte una solución profesional."
        button="Solicitar asesoría"
      />

      <Footer />
    </>
  );
}
