import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeaderPages() {

const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (

<header
className="header"
style={{
background: scrolled ? "#050a30" : "transparent",
transition: "0.3s",
position: "sticky",
top: 0,
zIndex: 1000
}}
>

<div className="container nav">

<img src="/logo.svg" alt="logo" className="logo" />

<button
className="menu-btn"
onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? "✕" : "☰"}
</button>

<nav className={`menu ${menuOpen ? "active" : ""}`}>

<Link href="/">Inicio</Link>
<Link href="/pyme">PyME</Link>
<Link href="/negocio">Negocio</Link>
<Link href="/hogar">Hogar</Link>
<Link href="/nosotros">Nosotros</Link>

</nav>

</div>

</header>

);
}
