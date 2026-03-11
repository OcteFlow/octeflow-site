import Head from "next/head";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";

export default function Pyme() {

return (

<>

<Head>
<title>Soluciones de Red para PyME | OcteFlow</title>

<meta
name="description"
content="Infraestructura de red profesional para PyME: WiFi empresarial, redes LAN, CCTV y soporte especializado."
/>

</Head>

<div style={{
minHeight:"100vh",
background:"#050a30",
color:"white",
fontFamily:"Arial, sans-serif"
}}>

<HeaderPages />

{/* HERO */}

<section className="page-hero">

<div className="page-hero-content">

<h1>
Infraestructura Tecnológica para <span style={{color:"#2ea5e4"}}>PyME</span>
</h1>

<p>
Diseñamos, implementamos y optimizamos redes empresariales para garantizar
conectividad confiable, seguridad y alto rendimiento.
</p>

<a
href="https://wa.me/5214421396305"
target="_blank"
rel="noopener noreferrer"
className="cta-btn"
>
Solicitar diagnóstico de red
</a>

</div>

</section>

{/* BENEFICIOS */}

<section className="page-section">

<h2 className="section-title">
¿Por qué una red profesional es importante?
</h2>

<div className="benefits-grid">

<div className="benefit-card">
<div className="benefit-icon">⚡</div>
<h3>Mayor Productividad</h3>
<p>
Una red estable evita interrupciones y mejora el flujo de trabajo.
</p>
</div>

<div className="benefit-card">
<div className="benefit-icon">🔒</div>
<h3>Seguridad Empresarial</h3>
<p>
Segmentación de red y control de accesos para proteger la empresa.
</p>
</div>

<div className="benefit-card">
<div className="benefit-icon">📶</div>
<h3>WiFi sin zonas muertas</h3>
<p>
Diseño profesional de cobertura para oficinas, almacenes o locales.
</p>
</div>

<div className="benefit-card">
<div className="benefit-icon">📈</div>
<h3>Preparado para crecer</h3>
<p>
Infraestructura escalable para nuevas sucursales o expansión.
</p>
</div>

</div>

</section>

{/* REDES */}

<section className="page-section gray">

<h2 className="section-title">
Soluciones de Redes Empresariales
</h2>

<div className="catalog">

<div className="catalog-block">
<h3>Diagnóstico y Evaluación</h3>

<ul>
<li>Estudio profesional de cobertura WiFi</li>
<li>Auditoría de infraestructura existente</li>
<li>Reporte técnico de diagnóstico</li>
</ul>

</div>

<div className="catalog-block">

<h3>Diseño e Implementación</h3>

<ul>
<li>Arquitectura LAN y WiFi empresarial</li>
<li>Suministro de equipos</li>
<li>Cableado estructurado</li>
<li>Configuración avanzada (VLAN, QoS, ruteo)</li>
<li>Segmentación WiFi corporativo / invitados</li>
<li>Memoria técnica</li>
</ul>

</div>

<div className="catalog-block">

<h3>Optimización de Red</h3>

<ul>
<li>Mejora de redes existentes</li>
<li>Eliminación de zonas muertas</li>
<li>Balanceo de carga</li>
<li>Optimización de rendimiento</li>
</ul>

</div>

<div className="catalog-block">

<h3>Soporte y Mantenimiento</h3>

<ul>
<li>Monitoreo de red</li>
<li>Soporte remoto o en sitio</li>
<li>Mantenimiento preventivo</li>
<li>Atención a fallas críticas</li>
</ul>

</div>

<div className="catalog-block">

<h3>Infraestructura para Crecimiento</h3>

<ul>
<li>Escalabilidad de red</li>
<li>Apertura de nuevas sucursales</li>
<li>Estandarización tecnológica</li>
</ul>

</div>

</div>

</section>

{/* CCTV */}

<section className="page-section">

<h2 className="section-title">
Sistemas de Videovigilancia CCTV
</h2>

<div className="catalog">

<div className="catalog-block">

<h3>Cámaras de Seguridad IP</h3>

<p>
Sistemas modernos de videovigilancia con monitoreo remoto y grabación inteligente.
</p>

</div>

<div className="catalog-block">

<h3>Infraestructura PoE</h3>

<p>
Instalación de switches PoE y cableado profesional para cámaras.
</p>

</div>

<div className="catalog-block">

<h3>Sistemas de Energía Solar</h3>

<p>
Soluciones para cámaras en lugares sin acceso eléctrico.
</p>

</div>

<div className="catalog-block">

<h3>Gestión de Video</h3>

<p>
Software de monitoreo centralizado para empresas y sucursales.
</p>

</div>

</div>

</section>

{/* CTA FINAL */}

<section className="cta-section">

<h2>¿Tu empresa tiene problemas de WiFi o red?</h2>

<p>
Podemos ayudarte a diagnosticar, optimizar o implementar una red profesional para tu empresa.
</p>

<a
href="https://wa.me/5214421396305"
target="_blank"
rel="noopener noreferrer"
className="cta-btn"
>
Hablar con un especialista
</a>

</section>

<Footer />

</div>

</>

);

}
