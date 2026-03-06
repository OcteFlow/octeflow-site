import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      title: "Conectividad Inteligente para tu Empresa",
      subtitle: "Redes, WiFi y soluciones empresariales",
      image: "/banner1.jpg"
    },
    {
      title: "Infraestructura Tecnológica Confiable",
      subtitle: "Optimiza tu operación con tecnología de punta",
      image: "/banner2.jpg"
    },
    {
      title: "Soporte y Soluciones a tu Medida",
      subtitle: "Implementación, mantenimiento y crecimiento",
      image: "/banner3.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>OcteFlow - Soluciones en Redes</title>
        <meta
          name="description"
          content="Soluciones en redes, WiFi y seguridad para empresas y hogares."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page">

        {/* HEADER */}
        <header className="header">

          <div className="nav">

            <img src="/logo.svg" alt="logo" className="logo" />

            <button
              className="menuButton"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            <nav className={`menu ${menuOpen ? "open" : ""}`}>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#contacto">Contacto</a>
            </nav>

          </div>

        </header>

        {/* HERO */}
        <section className="hero">

          <div
            className="heroBg"
            style={{
              backgroundImage: `url(${slides[current].image})`
            }}
          >

            <div className="overlay">

              <div className="heroContent">

                <h1>{slides[current].title}</h1>

                <p>{slides[current].subtitle}</p>

                <div className="heroButtons">

                  <a
                    href="https://wa.me/524421396305"
                    className="btn"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="tel:+524421396305"
                    className="btnOutline"
                  >
                    Llamar
                  </a>

                </div>

                <div className="dots">

                  {slides.map((_, i) => (

                    <span
                      key={i}
                      className={i === current ? "dot active" : "dot"}
                      onClick={() => setCurrent(i)}
                    ></span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* MENSAJE */}
        <section className="mensaje">

          <h2>
            La tecnología debería simplificar tu vida, no complicarla.
          </h2>

          <p>
            Nosotros nos encargamos de tu red, para que tú te enfoques en lo que realmente importa.
          </p>

        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="servicios">

          {[
            {
              name: "PyME",
              link: "/pyme",
              desc: "Soluciones tecnológicas para pequeñas y medianas empresas."
            },
            {
              name: "Negocio",
              link: "/negocio",
              desc: "Infraestructura tecnológica para operación comercial."
            },
            {
              name: "Hogar",
              link: "/hogar",
              desc: "Conectividad inteligente y domótica para tu casa."
            }
          ].map((s, i) => (

            <a
              key={i}
              href={s.link}
              className="card"
            >

              <h3>{s.name}</h3>

              <p>{s.desc}</p>

            </a>

          ))}

        </section>

        {/* CONTACTO */}
        <section id="contacto" className="contacto">

          <h2>Contáctanos</h2>

          <div className="contactLinks">

            <a href="https://wa.me/5214421396305">WhatsApp</a>

            {" | "}

            <a href="mailto:contacto@octeflow.com">Correo</a>

            {" | "}

            <a href="tel:+5214421396305">Llamar</a>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="footer">

          © 2026 OcteFlow

        </footer>

      </div>
    </>
  );
}
