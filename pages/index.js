import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

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

}, []);

  return (
    <>
      <Head>
        <title>OcteFlow - Soluciones en Redes</title>
        <meta name="description" content="Soluciones en redes, WiFi, CCTV y seguridad para empresas y hogares." />
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
        <header
  className="header"
  style={{
    background: scrolled ? "#050a30" : "transparent",
    transition: "0.3s",
    position: "sticky",
    top: 0,
    zIndex: 1000
  }}
>
          <div className="container nav">

            <img src="/logo.svg" alt="logo" className="logo" />

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

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

        {/* MENSAJE DE VALOR */}
        <div style={{
          background: "#ffffff",
          textAlign: "center",
          padding: "60px 20px"
        }}>

          <h2 style={{
            color: "#2ea5e4",
            fontSize: "34px",
            fontWeight: "700",
            marginBottom: "15px",
            fontFamily: "CodecPro, sans-serif"
          }}>
            La tecnología debería simplificar tu vida, no complicarla.
          </h2>

          <p style={{
            fontSize: "18px",
            color: "#333",
            maxWidth: "700px",
            margin: "0 auto",
            fontFamily: "CodecPro, sans-serif",
            fontWeight: "700"
          }}>
            Nosotros nos encargamos de tu red, para que tú te enfoques en lo que realmente importa.
          </p>

        </div>

        {/* SERVICIOS */}
<div id="servicios" style={{padding:"80px 20px"}}>

{/* PYME */}
<div className="fade-up" style={{
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap",
marginBottom:"80px",
maxWidth:"1200px",
margin:"0 auto 80px auto"
}}>

<div style={{maxWidth:"450px"}}>

<h2 style={{color:"#2ea5e4"}}>
PyME
</h2>

<p style={{color:"#ccc"}}>
Infraestructura tecnológica diseñada para pequeñas y medianas empresas.
Implementamos redes, WiFi empresarial, seguridad y soporte para que tu
negocio funcione sin interrupciones.
</p>

<a href="/pyme" style={{
display:"inline-block",
marginTop:"15px",
background:"#2ea5e4",
color:"#fff",
padding:"10px 18px",
borderRadius:"6px",
textDecoration:"none"
}}>
Ver soluciones →
</a>

</div>

<img
src="/pyme.jpg"
className="service-image"
style={{width:"420px"}}
/>

</div>
</div>


{/* NEGOCIO */}
<div style={{background:"#f5f7fb", padding:"80px 20px"}}>
<div className="fade-up" style={{
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap",
 maxWidth:"1200px",
margin:"0 auto" 
}}>

<img
src="/negocio.jpg"
className="service-image"
style={{width:"420px"}}
/>

<div style={{maxWidth:"450px"}}>

<h2 style={{color:"#2ea5e4"}}>
Negocio
</h2>

<p style={{color:"#333"}}>
Soluciones tecnológicas para operaciones comerciales,
tiendas, oficinas y espacios de atención al cliente.
Redes seguras, CCTV, WiFi profesional y monitoreo.
</p>

<a href="/negocio" style={{
display:"inline-block",
marginTop:"15px",
background:"#2ea5e4",
color:"#fff",
padding:"10px 18px",
borderRadius:"6px",
textDecoration:"none"
}}>
Ver soluciones →
</a>

</div>

</div>
</div>

<div style={{padding:"80px 20px"}}>

{/* HOGAR */}
<div className="fade-up" style={{
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap",
maxWidth:"1200px",
margin:"0 auto"
}}>

<div style={{maxWidth:"450px"}}>

<h2 style={{color:"#2ea5e4"}}>
Hogar
</h2>

<p style={{color:"#ccc"}}>
Conectividad inteligente para tu casa.
WiFi de alto rendimiento, cámaras de seguridad y
soluciones de domótica para mayor comodidad.
</p>

<a href="/hogar" style={{
display:"inline-block",
marginTop:"15px",
background:"#2ea5e4",
color:"#fff",
padding:"10px 18px",
borderRadius:"6px",
textDecoration:"none"
}}>
Ver soluciones →
</a>

</div>

<img
src="/hogar.jpg"
className="service-image"
style={{width:"420px"}}
/>

</div>

</div>

{/* POR QUE ELEGIRNOS */}
<div style={{
  background:"#f5f7fb",
  padding:"90px 20px",
  textAlign:"center"
}}>

<h2 className="section-title" style={{
  color:"#050a30",
  fontSize:"32px",
  marginBottom:"60px"
}}>
Por qué elegirnos
</h2>

<div style={{
  display:"flex",
  justifyContent:"center",
  gap:"40px",
  flexWrap:"wrap",
  maxWidth:"1100px",
  margin:"0 auto"
}}>

<div className="feature-card fade-up fade-delay-1">

<div className="feature-icon">⚡</div>

<h3>Instalación rápida</h3>

<p>
Implementamos tu red y equipos de forma eficiente para que tu operación no se detenga.
</p>

</div>

<div className="feature-card fade-up fade-delay-2">

<div className="feature-icon">🔒</div>

<h3>Seguridad profesional</h3>

<p>
Protege tu empresa con redes seguras, cámaras y monitoreo confiable.
</p>

</div>

<div className="feature-card fade-up fade-delay-3">

<div className="feature-icon">📡</div>

<h3>WiFi optimizado</h3>

<p>
Diseñamos cobertura inalámbrica estable para oficinas, comercios y hogares.
</p>

</div>

</div>

</div>

{/* SOLUCION EN 3 PASOS */}

<div className="steps-section">

<h2 className="section-title">Soluciones para tu empresa en 3 pasos</h2>

<div className="steps-container">

<div className="step fade-up fade-delay-1">

<div className="step-number">1</div>

<h3>Diagnóstico</h3>

<p>
Analizamos tus espacios, tu red y necesidades de conectividad.
</p>

</div>

<div className="step fade-up fade-delay-2">

<div className="step-number">2</div>

<h3>Implementación</h3>

<p>
Instalamos los equipos adecuados y configuramos tu red WiFi.
</p>

</div>

<div className="step fade-up fade-delay-3">

<div className="step-number">3</div>

<h3>Optimización</h3>

<p>
Probamos, optimizamos cobertura y dejamos todo funcionando.
</p>

</div>

</div>

</div>

        {/* CONTACTO */}
<div
  id="contacto"
  style={{
    background: "#f5f7fb",
    color: "#000",
    textAlign: "center",
    padding: "80px 20px"
  }}
>
  <h2 className="section-title" style={{ color: "#000", marginBottom: "20px" }}>
    Contáctanos
  </h2>
      
  <div className="contact-buttons">

<a
href="https://wa.me/5214421396305"
target="_blank"
rel="noopener noreferrer"
className="contact-btn"
>
<span className="contact-icon">🟢</span>
WhatsApp
</a>

<a
href="mailto:contacto@octeflow.com"
className="contact-btn"
>
<span className="contact-icon">✉️</span>
Correo
</a>

<a
href="tel:+5214421396305"
className="contact-btn"
>
<span className="contact-icon">📞</span>
Llamar
</a>

</div>
</div>

<a
href="https://wa.me/5214421396305"
target="_blank"
rel="noopener noreferrer"
className="whatsapp-float"
>
💬
</a>

        {/* FOOTER */}
        <div style={{ textAlign: "center", padding: "20px", color: "#aaa" }}>
          © 2026 OcteFlow
        </div>

      </div>
    </>
  );
}
