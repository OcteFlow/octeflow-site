export default function WhySection({ title = "¿Por qué elegirnos?", items }) {

  return (

    <section className="why-section">

      <h2 className="section-title">
        {title}
      </h2>

      <div className="why-grid">

        {items.map((item, index) => (

          <div key={index} className="why-card">

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}
