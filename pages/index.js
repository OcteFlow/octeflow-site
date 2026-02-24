import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
      <div style={{textAlign:"center", padding:"80px 20px"}}>
        <h1 style={{fontSize:"40px"}}>
          Conectividad Inteligente para tu Empresa
        </h1>
        <p style={{color:"#ccc", maxWidth:"600px", margin:"20px auto"}}>
          Redes, WiFi, CCTV y soluciones tecnológicas diseñadas para brindar estabilidad y seguridad.
        </p>

        <div style={{marginTop:"30px"}}>
          <a href="https://wa.me/5214421396305" target="_blank">
            <button style={{
              background:"#2ea5e4",
              border:"none",
              padding:"12px 25px",
              borderRadius:"10px",
              color:"white",
              marginRight:"10px"
            }}>
              WhatsApp
            </button>
          </a>

          <a href="tel:+5214421396305">
            <button style={{
              border:"1px solid #2ea5e4",
              padding:"12px 25px",
              borderRadius:"10px",
              color:"white",
              background:"transparent"
            }}>
              Llamar
            </button>
          </a>
        </div>
      </div>

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
          <a href="https://wa.me/5214421396305" target="_blank">WhatsApp</a> |{" "}
          <a href="mailto:contacto@octeflow.com">Correo</a> |{" "}
          <a href="tel:+5214421396305">Llamar</a>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{textAlign:"center", padding:"20px", color:"#aaa"}}>
        © 2026 OcteFlow
      </div>

    </div>
  );
}
