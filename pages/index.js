export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#050a30",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      
      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px"
      }}>
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
          <img src="/logo.png" alt="logo" style={{height:"40px"}} />
          <h2>OcteFlow</h2>
        </div>

        <a href="https://wa.me/521XXXXXXXXXX" target="_blank">
          <button style={{
            background:"#2ea5e4",
            border:"none",
            padding:"10px 20px",
            borderRadius:"10px",
            color:"white",
            cursor:"pointer"
          }}>
            Contactar
          </button>
        </a>
      </div>

      {/* HERO */}
      <div style={{textAlign:"center", padding:"80px 20px"}}>
        <h1 style={{fontSize:"40px"}}>
          Conectividad Inteligente para tu Empresa
        </h1>
        <p style={{color:"#ccc", maxWidth:"600px", margin:"20px auto"}}>
          Redes, WiFi, CCTV y soluciones tecnológicas diseñadas para brindar estabilidad y seguridad.
        </p>

        <div style={{marginTop:"30px"}}>
          <a href="https://wa.me/521XXXXXXXXXX" target="_blank">
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

          <a href="tel:+521XXXXXXXXXX">
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
      <div style={{
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
      <div style={{textAlign:"center", padding:"60px 20px"}}>
        <h2>Contáctanos</h2>

        <div style={{marginTop:"20px"}}>
          <a href="https://wa.me/521XXXXXXXXXX" target="_blank">WhatsApp</a> |{" "}
          <a href="mailto:contacto@octeflow.com">Correo</a> |{" "}
          <a href="tel:+521XXXXXXXXXX">Llamar</a>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{textAlign:"center", padding:"20px", color:"#aaa"}}>
        © 2026 OcteFlow
      </div>
    </div>
  );
}
