import { useState }

from "react";

export default function Help(){

const [sent,setSent] =

useState(false);

const level =

localStorage.getItem(
"riskLevel"
) || "green";

const content={

green:{

title:"Ayuda e información para perfiles de riesgo bajo",

color:"green",

intro:

"Tu evaluación muestra un escenario preventivo favorable. El objetivo principal es fortalecer hábitos protectores.",

sections:[

{

title:"Mantener hábitos saludables",

text:

"Rutinas estables, actividad física, descanso y espacios recreativos ayudan a mantener bienestar emocional."

},

{

title:"Presión social",

text:

"Practicar respuestas ante presión de pares permite tomar decisiones más seguras en situaciones complejas."

},

{

title:"Redes de apoyo",

text:

"Construir relaciones positivas disminuye vulnerabilidades futuras."

}

]

},

yellow:{

title:"Ayuda e información para perfiles de riesgo medio",

color:"yellow",

intro:

"Existen factores que pueden aumentar vulnerabilidades. Detectarlos temprano permite prevenir dificultades mayores.",

sections:[

{

title:"Reconocer detonantes",

text:

"Identifica emociones, personas o contextos que aumenten deseo de consumir o normalicen conductas riesgosas."

},

{

title:"Manejo emocional",

text:

"Estrategias de regulación emocional y manejo del estrés reducen decisiones impulsivas."

},

{

title:"Buscar apoyo",

text:

"Hablar con cercanos, profesores o familiares puede generar protección adicional."

}

]

},

red:{

title:"Ayuda e información para perfiles de riesgo alto",

color:"red",

intro:

"Tu resultado muestra presencia importante de factores de riesgo. Pedir apoyo temprano puede marcar una diferencia importante.",

sections:[

{

title:"No enfrentar esto solo",

text:

"Buscar apoyo cercano o profesional puede disminuir aislamiento y aumentar recursos personales."

},

{

title:"Identificar situaciones críticas",

text:

"Reconocer momentos, emociones o lugares asociados facilita prevenir recaídas."

},

{

title:"Apoyo profesional",

text:

"Considera orientación psicológica, escolar, familiar o de salud para acompañamiento continuo."

}

]

}

};

const current =

content[level];

function send(){

setSent(true);

}

return(

<div className="container">

<div className={`help-hero ${current.color}`}>

<h1>

{current.title}

</h1>

<p>

{current.intro}

</p>

</div>

<div className="help-grid">

{

current.sections.map(

(item,index)=>(

<details

key={index}

className="expand-card"

>

<summary>

{item.title}

</summary>

<p>

{item.text}

</p>

</details>

)

)

}

</div>

<div className="professional-box">

<h2>

Solicitar apoyo profesional

</h2>

<input placeholder="Nombre"/>

<input placeholder="Correo"/>

<textarea placeholder="Describe tu situación"/>

<button onClick={send}>

Enviar solicitud

</button>

{

sent &&

<p>

Solicitud enviada correctamente.

</p>

}

</div>

</div>

)

}