import Link from "next/link";

export default function Footer() {

return (

<footer className="footer">

<div className="footer-container">

<div className="footer-col footer-brand">

<img src="/logo.svg" alt="OcteFlow logo"/>

</div>

<div className="footer-col">

<h4>Servicios</h4>

<Link href="/pyme">PyME</Link>
<Link href="/negocio">Negocio</Link>
<Link href="/hogar">Hogar</Link>

</div>

<div className="footer-col">

<h4>Empresa</h4>

<Link href="/#servicios">Servicios</Link>
<Link href="/nosotros">Nosotros</Link>
<Link href="/#contacto">Contacto</Link>

</div>

<div className="footer-col">

<h4>Contacto</h4>

<p>📞 +52 442 139 6305</p>
<p>✉ contacto@octeflow.com</p>

<a
href="https://wa.me/5214421396305"
target="_blank"
rel="noopener noreferrer"
className="contact-btn footer-btn"
>

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="white"
width="18"
height="18"
>
<path d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.15-1.6A11.94 11.94 0 0 0 12.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.5-8.52z"/>
</svg>

WhatsApp

</a>

</div>

</div>

<div className="footer-bottom">

<p>
© {new Date().getFullYear()} OcteFlow. Todos los derechos reservados.
</p>

</div>

</footer>

);
}
