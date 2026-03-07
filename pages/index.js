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
<div style={{
display:"flex",
opacity:0,
animation:"fadeUp 0.8s ease forwards",
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
style={{
width:"420px",
borderRadius:"12px",
boxShadow:"0 15px 40px rgba(0,0,0,0.35)",
transition:"transform 0.3s"
}}
/>

</div>
</div>


{/* NEGOCIO */}
<div style={{background:"#0f2a7a", padding:"80px 20px"}}>
<div style={{
display:"flex",
opacity:0,
animation:"fadeUp 0.8s ease forwards",
alignItems:"center",
justifyContent:"center",
gap:"40px",
flexWrap:"wrap",
 maxWidth:"1200px",
margin:"0 auto" 
}}>

<img
src="/negocio.jpg"
style={{
width:"420px",
borderRadius:"12px",
boxShadow:"0 15px 40px rgba(0,0,0,0.35)",
transition:"transform 0.3s"
}}
/>

<div style={{maxWidth:"450px"}}>

<h2 style={{color:"#2ea5e4"}}>
Negocio
</h2>

<p style={{color:"#ccc"}}>
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
<div style={{
display:"flex",
opacity:0,
animation:"fadeUp 0.8s ease forwards",
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
style={{
width:"420px",
borderRadius:"12px",
boxShadow:"0 15px 40px rgba(0,0,0,0.35)",
transition:"transform 0.3s"
}}
/>

</div>

</div>

        {/* CONTACTO */}
<div
  id="contacto"
  style={{
    background: "#ffffff",
    color: "#000",
    textAlign: "center",
    padding: "80px 20px"
  }}
>
  <h2 style={{ color: "#000", marginBottom: "20px" }}>
    Contáctanos
  </h2>

      <div
    style={{
      width: "80px",
      height: "4px",
      background: "#2ea5e4",
      margin: "15px auto 30px auto"
    }}
  ></div>
      
  <div style={{ marginTop: "20px" }}>
    <a href="https://wa.me/5214421396305" target="_blank" rel="noopener noreferrer" style={{color:"#2ea5e4"}}>
      WhatsApp
    </a> |{" "}
    <a href="mailto:contacto@octeflow.com" style={{color:"#2ea5e4"}}>
      Correo
    </a> |{" "}
    <a href="tel:+5214421396305" style={{color:"#2ea5e4"}}>
      Llamar
    </a>
  </div>
</div>

        {/* FOOTER */}
        <div style={{ textAlign: "center", padding: "20px", color: "#aaa" }}>
          © 2026 OcteFlow
        </div>

      </div>
    </>
  );
}
