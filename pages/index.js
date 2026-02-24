import { useState } from "react";

export default function OcteFlowSite() {
  const [plans] = useState([
    { name: "Home", price: "$499/mes", desc: "WiFi estable y seguro en casa" },
    { name: "Business", price: "$1,299/mes", desc: "Redes profesionales para pymes" },
    { name: "Enterprise", price: "Custom", desc: "Infraestructura avanzada" }
  ]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <h1 style={{ fontSize: "40px" }}>OcteFlow</h1>
      <p style={{ color: "#666" }}>Conectividad que fluye</p>

      <h2>Servicios</h2>
      <ul>
        <li>Redes empresariales</li>
        <li>WiFi inteligente</li>
        <li>CCTV y seguridad</li>
      </ul>

      <h2>Planes</h2>
      {plans.map((plan, i) => (
        <div key={i} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", marginTop: "10px" }}>
          <h3>{plan.name}</h3>
          <p><strong>{plan.price}</strong></p>
          <p>{plan.desc}</p>
        </div>
      ))}

      <h2>Contacto</h2>
      <input placeholder="Nombre" style={{ padding: "10px", width: "100%", marginBottom: "10px" }} />
      <input placeholder="Correo" style={{ padding: "10px", width: "100%", marginBottom: "10px" }} />
      <button style={{ padding: "10px 20px", borderRadius: "8px", background: "black", color: "white" }}>
        Enviar
      </button>

    </div>
  );
}
