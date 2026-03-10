import React from "react";

export default function Pyme() {
  return (
    <div>

      {/* HERO */}
      <section className="page-hero">

        <h1>Soluciones de Red para PyME</h1>

        <p>
          Infraestructura tecnológica profesional para empresas
          que necesitan conectividad confiable, segura y escalable.
        </p>

      </section>

      {/* REDES */}
      <section className="page-section">

        <h2 className="section-title">Redes Empresariales</h2>

        <div className="catalog">

          <div className="catalog-block">
            <h3>Diagnóstico y Evaluación de Red</h3>
            <ul>
              <li>Estudio de cobertura WiFi</li>
              <li>Auditoría de infraestructura actual</li>
              <li>Reporte de diagnóstico</li>
            </ul>
          </div>

          <div className="catalog-block">
            <h3>Diseño e Implementación de Red</h3>
            <ul>
              <li>Diseño de arquitectura LAN / WiFi</li>
              <li>Suministro de equipos</li>
              <li>Instalación de equipos y cableado estructurado</li>
              <li>Configuración profesional (VLANs, QoS, Ruteo)</li>
              <li>Segmentación de redes</li>
              <li>Memoria técnica</li>
            </ul>
          </div>

          <div className="catalog-block">
            <h3>Optimización y Reingeniería</h3>
            <ul>
              <li>Mejora de red existente</li>
              <li>Eliminación de zonas muertas</li>
              <li>Balanceo de carga</li>
              <li>Mejora de rendimiento</li>
            </ul>
          </div>

          <div className="catalog-block">
            <h3>Soporte y Mantenimiento</h3>
            <ul>
              <li>Monitoreo</li>
              <li>Soporte remoto o en sitio</li>
              <li>Mantenimiento preventivo</li>
              <li>Atención a fallas críticas</li>
            </ul>
          </div>

          <div className="catalog-block">
            <h3>Redes para Crecimiento</h3>
            <ul>
              <li>Escalabilidad</li>
              <li>Apertura de nuevas sucursales</li>
              <li>Estandarización de red</li>
            </ul>
          </div>

        </div>

      </section>

      {/* CCTV */}
      <section className="page-section gray">

        <h2 className="section-title">Soluciones de CCTV</h2>

        <ul className="catalog-list">
          <li>Cámaras de seguridad IP</li>
          <li>DVR / NVR</li>
          <li>Switches PoE</li>
          <li>Sistemas solares para cámaras IP</li>
          <li>Software de gestión de video</li>
          <li>Suministro de equipos</li>
          <li>Instalación y configuración</li>
        </ul>

      </section>

    </div>
  );
}
