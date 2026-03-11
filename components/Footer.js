import Link from "next/link";

export default function Footer() {

const year = new Date().getFullYear();

return (

<footer className="footer">

<div className="footer-content">

<div>
<h3>OcteFlow</h3>
<p>Conectividad inteligente para empresas, negocios y hogares.</p>
</div>

<div>
<h4>Soluciones</h4>
<Link href="/pyme">PyME</Link>
<Link href="/negocio">Negocio</Link>
<Link href="/hogar">Hogar</Link>
</div>

<div>
<h4>Contacto</h4>
<p>contacto@octeflow.com</p>
<p>+52 442 139 6305</p>
</div>

</div>

<div className="footer-bottom">
© {year} OcteFlow — Todos los derechos reservados
</div>

</footer>

);
}
