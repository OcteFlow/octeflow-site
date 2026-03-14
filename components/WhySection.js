export default function WhySection({ title = "¿Por qué elegirnos?", items }) {

  return (

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
        {title}
      </h2>

      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"40px",
        flexWrap:"wrap",
        maxWidth:"1100px",
        margin:"0 auto"
      }}>

        {items.map((item, index) => (

          <div
            key={index}
            className="feature-card feature-light"
          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </div>

  );

}
