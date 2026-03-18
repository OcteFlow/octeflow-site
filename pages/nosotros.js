import Head from "next/head";
import { useEffect } from "react";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import WhySection from "../components/WhySection";
import { whyData } from "../data/whyData";
import CTASection from "../components/CTASection";
import BannerPage from "../components/BannerPage";

export default function Nosotros() {

  useEffect(() => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }

    });
  });

  const hiddenElements = document.querySelectorAll(".fade-up");

  hiddenElements.forEach((el) => observer.observe(el));

  // efecto hover luz en tarjetas
  const cards = document.querySelectorAll(".feature-light");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);

    });
  });

}, []);

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
            En OcteFlow ayudamos a empresas, negocios y hogares a contar con redes
            modernas, seguras y escalables que les permitan operar sin
            interrupciones.
          </p>

          <p>
            Ofrecemos soluciones de conectividad confiables y de alto rendimiento, adaptadas a las necesidades de cada cliente y
            respaldadas por un servicio profesional y un enfoque personalizado.
          </p>
        
          <p>
            Aspiramos a convertirnos en el aliado tecnológico de confianza para nuestros clientes, 
            transformando la experiencia digital de hogares, PyMEs y entornos comerciales a través de
            infraestructura sólida y escalable.
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

      <WhySection
title="¿Por qué elegir OcteFlow?"
items={whyData}
/>

      <CTASection
        title="Mejora la conectividad de tu red"
        text="Podemos evaluar tu red actual y proponerte una solución profesional."
        button="Solicitar asesoría"
      />

      <Footer />

    </>

  );

}
