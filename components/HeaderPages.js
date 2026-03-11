import Link from "next/link";

export default function HeaderPages() {

return (

<header className="navbar">

<div className="logo">
<Link href="/">OcteFlow</Link>
</div>

<nav className="menu">

<Link href="/">Inicio</Link>

<Link href="/pyme">
PyME
</Link>

<Link href="/negocio">
Negocio
</Link>

<Link href="/hogar">
Hogar
</Link>

<Link href="/nosotros">
Nosotros
</Link>

</nav>

</header>

);
}
