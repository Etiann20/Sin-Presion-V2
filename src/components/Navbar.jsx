import { NavLink }

from "react-router-dom";

export default function Navbar(){

return(

<nav className="nav">

<div className="logo">

🛡️ Sin Presión

</div>

<div className="links">

<NavLink to="/">

Inicio

</NavLink>

<NavLink to="/test">

Test

</NavLink>

<NavLink to="/progress">

Progreso

</NavLink>

<NavLink to="/help">

Ayuda

</NavLink>

</div>

</nav>

)

}