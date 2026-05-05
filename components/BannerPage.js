export default function BannerPage({ title, subtitle, image }) {

  return (

    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >

      <div className="page-banner-overlay">

        <h1>{title}</h1>

        <p>{subtitle}</p>

        <div className="hero-buttons">

          <a
            href="https://wa.me/5214427173295"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            WhatsApp
          </a>

          <a
            href="tel:+524427173295"
            className="btn outline"
          >
            Llamar
          </a>

        </div>

      </div>

    </section>

  );

}
