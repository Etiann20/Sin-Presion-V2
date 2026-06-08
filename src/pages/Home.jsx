import { Link }

from "react-router-dom";

import DayCounter

from "../components/DayCounter";

export default function Home(){

const tips=[

"Hacer deporte ayuda a controlar estrés.",

"Dormir mejor mejora la toma de decisiones.",

"Hablar con alguien reduce la presión.",

"Evitar ambientes riesgosos ayuda.",

"Las rutinas saludables fortalecen hábitos."

];

const tip =

tips[
Math.floor(
Math.random()
* tips.length
)
];

const level =

localStorage.getItem(
"riskLevel"
);

function profile(){

if(level==="green")

return {

text:"Riesgo Bajo",

color:"profile-green"

};

if(level==="yellow")

return {

text:"Riesgo Medio",

color:"profile-yellow"

};

if(level==="red")

return {

text:"Riesgo Alto",

color:"profile-red"

};

return {

text:"Sin evaluación",

color:"profile-none"

};

}

const current =

profile();

return(

<div className="container">

<section className="hero">

<div className="hero-left">

<div className="top-row">

<span className="badge">

Prevención Digital

</span>

<div className={`profile-chip ${current.color}`}>

{current.text}

</div>

</div>

<h1>

Sin Presión

</h1>

<p>

Apoyo preventivo y seguimiento.

</p>

<div className="hero-buttons">

<Link
to="/test"
className="primary-btn"
>

Realizar test

</Link>

<Link
to="/progress"
className="secondary-btn"
>

Mi progreso

</Link>

</div>

<div className="tip-box">

<h3>

Tip del día

</h3>

<p>

{tip}

</p>

</div>

</div>

<div className="hero-right">

<DayCounter/>

</div>

</section>

</div>

)

}