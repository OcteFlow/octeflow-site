import { useState } from "react";

export default function OcteFlowSite() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    problema: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola, soy ${form.nombre} de ${form.empresa}. Necesito ayuda con: ${form.problema}. Mi número es ${form.telefono}`;
    window.open(`https://wa.me/5214421396305?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <div style={styles.container}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Infraestructura tecnológica que nunca falla</h1>
        <p style={styles.subtitle}>
          Redes, WiFi y seguridad diseñadas para empresas que no pueden detenerse
        </p>

        <div style={styles.buttons}>
          <a href="#contacto" style={styles.primaryBtn}>Solicitar diagnóstico</a>
          <a href="#servicios" style={styles.secondaryBtn}>Ver soluciones</a>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Lo que resolvemos</h2>

        <div style={styles.grid}>
          <div style={styles.card}>❌ Caídas de red</div>
          <div style={styles.card}>❌ WiFi inestable</div>
          <div style={styles.card}>❌ CCTV poco confiable</div>
          <div style={styles.card}>❌ Soporte lento</div>
        </div>

        <h2 style={styles.sectionTitle}>Lo que obtienes</h2>

        <div style={styles.grid}>
          <div style={styles.cardHighlight}>✅ Conectividad 24/7</div>
          <div style={styles.cardHighlight}>✅ Seguridad confiable</div>
          <div style={styles.cardHighlight}>✅ Respuesta inmediata</div>
          <div style={styles.cardHighlight}>✅ Escalabilidad real</div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Soluciones OcteFlow</h2>

        <div style={styles.grid}>
          <div style={styles.serviceCard}>
            <h3>OcteFlow Connect</h3>
            <p>Redes empresariales y WiFi profesional</p>
          </div>

          <div style={styles.serviceCard}>
            <h3>OcteFlow Secure</h3>
            <p>CCTV, monitoreo y control de accesos</p>
          </div>

          <div style={styles.serviceCard}>
            <h3>OcteFlow Care</h3>
            <p>Soporte continuo y mantenimiento</p>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Planes</h2>

        <div style={styles.grid}>
          <div style={styles.plan}>
            <h3>Básico</h3>
            <p>Instalación + configuración</p>
          </div>

          <div style={styles.plan}>
            <h3>Pro</h3>
            <p>Red + seguridad + soporte</p>
          </div>

          <div style={styles.plan}>
            <h3>Enterprise</h3>
            <p>Infraestructura completa + SLA</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Solicita un diagnóstico gratuito</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            placeholder="Nombre"
            style={styles.input}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
          <input
            placeholder="Empresa"
            style={styles.input}
            onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          />
          <input
            placeholder="Problema"
            style={styles.input}
            onChange={(e) => setForm({ ...form, problema: e.target.value })}
          />
          <input
            placeholder="WhatsApp"
            style={styles.input}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          />

          <button type="submit" style={styles.primaryBtn}>
            Contactar por WhatsApp
          </button>
        </form>
      </section>

      {/* BOTÓN FLOTANTE */}
      <a
        href="https://wa.me/5214421396305"
        target="_blank"
        style={styles.whatsapp}
      >
        💬
      </a>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#0d0d0d",
    color: "white",
  },
  hero: {
    textAlign: "center",
    padding: "100px 20px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: "20px",
    fontSize: "18px",
    opacity: 0.8,
  },
  buttons: {
    marginTop: "30px",
  },
  primaryBtn: {
    background: "#7b1e3a",
    padding: "12px 24px",
    margin: "10px",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
  },
  secondaryBtn: {
    border: "1px solid white",
    padding: "12px 24px",
    margin: "10px",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
  },
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
  sectionDark: {
    padding: "60px 20px",
    background: "#1a1a1a",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    background: "#222",
    borderRadius: "10px",
  },
  cardHighlight: {
    padding: "20px",
    background: "#7b1e3a",
    borderRadius: "10px",
  },
  serviceCard: {
    padding: "20px",
    background: "#222",
    borderRadius: "10px",
  },
  plan: {
    padding: "20px",
    background: "#222",
    borderRadius: "10px",
  },
  form: {
    maxWidth: "400px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
  },
  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    padding: "15px",
    borderRadius: "50%",
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
  },
};
