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
  }, 6000); // cambia cada 6 segundos

  return () => clearInterval(interval);
}, []);
  
  return (
  <>
    <Head>
      <title>OcteFlow - Soluciones en Redes</title>
      <meta name="description" content="Soluciones en redes, WiFi, CCTV y seguridad para empresas y hogares. Instalación profesional y soporte confiable." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="OcteFlow" />
      <meta property="og:description" content="Soluciones en redes y seguridad profesional" />
      <meta property="og:image" content="/favicon.png" />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
    </Head>

    <div style={{
      minHeight: "100vh",
      background: "#050a30",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* HEADER */}
      <header className="header">
  <div className="container nav">

    {/* LOGO */}
    <img src="/logo.svg" alt="logo" className="logo" />

    {/* BOTÓN HAMBURGUESA */}
    <button 
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>

    {/* MENÚ */}
    <nav className={`menu ${menuOpen ? "active" : ""}`}>
      <a href="#servicios">Servicios</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#contacto">Contacto</a>
    </nav>

  </div>
</header>

      {/* HERO */}
      <section className="hero">
  <div
    className="hero-bg"
    style={{
      backgroundImage: `url(${slides[current].image})`,
    }}
  >
    <div className="overlay">
      <h1>{slides[current].title}</h1>
      <p>{slides[current].subtitle}</p>

      <div className="hero-buttons">
        <a href="https://wa.me/524421396305" className="btn">
          WhatsApp
        </a>
        <a href="tel:+524421396305" className="btn outline">
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
</section>

      {/* SERVICIOS */}
      <div id="servicios" style={{
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        flexWrap:"wrap",
        padding:"40px"
      }}>
        {["Redes", "CCTV", "WiFi"].map((s, i) => (
          <div key={i} style={{
            background:"rgba(255,255,255,0.05)",
            padding:"20px",
            borderRadius:"15px",
            width:"250px"
          }}>
            <h3>{s}</h3>
            <p style={{color:"#ccc"}}>
              Soluciones confiables y modernas.
            </p>
          </div>
        ))}
      </div>

      {/* CONTACTO */}
      <div id="contacto" style={{textAlign:"center", padding:"60px 20px"}}>
        <h2>Contáctanos</h2>

        <div style={{marginTop:"20px"}}>
          <a href="https://wa.me/5214421396305" target="_blank" rel="noopener noreferrer">WhatsApp</a> |{" "}
          <a href="mailto:contacto@octeflow.com">Correo</a> |{" "}
          <a href="tel:+5214421396305">Llamar</a>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{textAlign:"center", padding:"20px", color:"#aaa"}}>
        © 2026 OcteFlow
      </div>

    </div>
</>
  );
}
