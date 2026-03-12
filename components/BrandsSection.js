export default function BrandsSection({ showTitle = true }) {

  return (

    <div className="brands-section">

      {showTitle && (

        <h2
          className="section-title"
          style={{
            color: "#050a30",
            fontSize: "32px",
            marginBottom: "60px"
          }}
        >
          Tecnologías con las que trabajamos
        </h2>

      )}

      <div className="brands-slider">

        <div className="brands-track">

          <img src="/omada.png" alt="Omada"/>
          <img src="/unifi.png" alt="Unifi"/>
          <img src="/tplink.png" alt="TP-Link"/>
          <img src="/ubiquiti.png" alt="Ubiquiti"/>
          <img src="/cisco.png" alt="Cisco"/>

          {/* duplicado para loop */}

          <img src="/omada.png" alt="Omada"/>
          <img src="/unifi.png" alt="Unifi"/>
          <img src="/tplink.png" alt="TP-Link"/>
          <img src="/ubiquiti.png" alt="Ubiquiti"/>
          <img src="/cisco.png" alt="Cisco"/>

        </div>

      </div>

    </div>

  );

}
