import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import BannerPage from "../components/BannerPage";

export default function Nosotros() {

  return (

    <>
      <HeaderPages />

      <Head>
        <title>Acerca de OcteFlow</title>
      </Head>

      {/* BANNER */}

      <BannerPage
        title="Acerca de OcteFlow"
        subtitle="Creamos soluciones de conectividad inteligentes para empresas, negocios y hogares que necesitan redes confiables y seguras."
        image="/nosotros.jpg"
      />

      {/* MISION */}

      <section className="about-section">

        <h2 className="section-title">
          Nuestra misión
        </h2>

        <div className="about-card">

          <p>
            En OcteFlow ayudamos a empresas y negocios a contar con redes
            modernas, seguras y escalables que les permitan operar sin
            interrupciones.
          </p>

          <p>
            Diseñamos, implementamos y optimizamos infraestructura de red,
            conectividad inalámbrica y sistemas de seguridad tecnológica
            con estándares profesionales.
          </p>

        </div>

      </section>

      {/* QUE HACEMOS */}

      <section className="about-section gray">

        <h2 className="section-title">
          Qué hacemos
        </h2>

        <div className="about-grid">

          <div className="about-service-card">

            <h3>Redes profesionales</h3>

            <p>
              Diseño e implementación de redes LAN y WiFi para empresas
              que necesitan conectividad estable y escalable.
            </p>

          </div>

          <div className="about-service-card">

            <h3>Seguridad y CCTV</h3>

            <p>
              Sistemas de videovigilancia IP y soluciones de monitoreo
              para proteger empresas y negocios.
            </p>

          </div>

          <div className="about-service-card">

            <h3>Optimización de infraestructura</h3>

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
