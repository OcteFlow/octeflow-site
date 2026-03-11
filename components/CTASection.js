export default function CTASection({ title, text, button }) {
  return (

    <section className="cta-section">

      <h2>{title}</h2>

      <p>{text}</p>

      <a
        href="https://wa.me/5214421396305"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn"
      >
        {button}
      </a>

    </section>

  );
}
