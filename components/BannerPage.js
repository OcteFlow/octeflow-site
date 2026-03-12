export default function BannerPage({ title, subtitle }) {

  return (

    <section className="page-banner">

      <div className="page-banner-overlay">

        <h1>{title}</h1>

        <p>{subtitle}</p>

        <div className="hero-buttons">

          <a
            href="https://wa.me/5214421396305"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            WhatsApp
          </a>

          <a
            href="tel:+524421396305"
            className="btn outline"
          >
            Llamar
          </a>

        </div>

      </div>

    </section>

  );

}
