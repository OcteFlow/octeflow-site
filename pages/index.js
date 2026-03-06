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
          content="Soluciones en redes, WiFi, CCTV y seguridad para empresas y hogares."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "#050a30",
          color: "white",
          fontFamily: "Arial, sans-serif"
        }}
      >

        {/* HEADER */}
        <header
          style={{
            background: "#050a30",
            padding: "20px"
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <img src="/logo.svg" alt="logo" style={{ height: "40px" }} />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                fontSize: "24px",
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer"
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {menuOpen && (
              <nav style={{ display: "flex", gap: "20px" }}>
                <a href="#servicios" style={{ color: "white" }}>
                  Servicios
                </a>
                <a href="#nosotros" style={{ color: "white" }}>
                  Nosotros
                </a>
                <a href="#contacto" style={{ color: "white" }}>
                  Contacto
                </a>
              </nav>
            )}
          </div>
        </header>

        {/* HERO */}
<section>
  <div
    style={{
      height: "500px",
      backgroundImage: `url(${slides[current].image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative"
    }}
  >

    {/* overlay oscuro completo */}
    <div
      style={{
        position: "absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        background:"rgba(0,0,0,0.55)",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        padding:"20px"
      }}
    >

      <div>
        <h1 style={{ fontSize: "38px" }}>
          {slides[current].title}
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          {slides[current].subtitle}
        </p>

        <div style={{ marginTop: "25px" }}>
          <a
            href="https://wa.me/524421396305"
            style={{
              background: "#2ea5e4",
              padding: "12px 20px",
              borderRadius: "6px",
              marginRight: "10px",
              textDecoration: "none",
              color: "white"
            }}
          >
            WhatsApp
          </a>

          <a
            href="tel:+524421396305"
            style={{
              border: "2px solid white",
              padding: "12px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              color: "white"
            }}
          >
            Llamar
          </a>
        </div>

        {/* dots */}
        <div style={{ marginTop: "30px" }}>
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: "10px",
                width: "10px",
                margin: "5px",
                display: "inline-block",
                borderRadius: "50%",
                background: i === current ? "#2ea5e4" : "#ccc",
                cursor: "pointer"
              }}
            ></span>
          ))}
        </div>

      </div>

    </div>

  </div>
</section>

        {/* MENSAJE PRINCIPAL */}
        <div
          style={{
            background: "#ffffff",
            textAlign: "center",
            padding: "70px 20px"
          }}
        >
          <h2
            style={{
              color: "#2ea5e4",
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "20px"
            }}
          >
            ¡La tecnología debería simplificar tu vida, no complicarla!
          </h2>

          <p
            style={{
              fontSize: "1  8px",
              color: "#333",
              maxWidth: "700px",
              margin: "0 auto",
              fontWeight: "700"
            }}
          >
            Nosotros nos encargamos de tu red, para que tú te enfoques en lo que
            realmente importa.
          </p>
        </div>

        {/* SERVICIOS */}
        <div
          id="servicios"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            padding: "80px 20px"
          }}
        >
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
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "30px",
                  borderRadius: "15px",
                  width: "260px",
                  textAlign: "center",
                  transition: "0.3s",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                <h3 style={{ fontSize: "22px" }}>{s.name}</h3>

                <p style={{ color: "#ccc", marginTop: "10px" }}>{s.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CONTACTO */}
        <div id="contacto" style={{ textAlign: "center", padding: "60px" }}>
          <h2>Contáctanos</h2>

          <div style={{ marginTop: "20px" }}>
            <a
              href="https://wa.me/5214421396305"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            | <a href="mailto:contacto@octeflow.com">Correo</a> |{" "}
            <a href="tel:+5214421396305">Llamar</a>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#aaa"
          }}
        >
          © 2026 OcteFlow
        </div>
      </div>
    </>
  );
}
