import { useState } from "react";

export default function Help(){

const level =

localStorage.getItem(
"riskLevel"
) || "green";

const [name,setName] =

useState("");

const [mail,setMail] =

useState("");

const [message,setMessage] =

useState("");

const [sent,setSent] =

useState(false);

const content={

green:{

title:

"Ayuda e información para perfiles de riesgo bajo",

color:

"green",

intro:

"Tu evaluación muestra pocos factores de riesgo. El objetivo principal es mantener hábitos protectores y reforzar herramientas preventivas.",

sections:[

{

title:

"Hábitos protectores",

text:

"Mantener rutinas saludables, actividad física, descanso adecuado y espacios recreativos ayuda a mantener estabilidad emocional y disminuir riesgos futuros."

},

{

title:

"Manejo de presión social",

text:

"Practicar respuestas frente a presión de pares permite tomar decisiones más seguras y mantener límites personales."

},

{

title:

"Fortalecer redes",

text:

"Relaciones positivas, amistades saludables y apoyo familiar funcionan como factores protectores importantes."

},

{

title:

"Prevención continua",

text:

"Seguir informándote y reflexionando sobre tus decisiones ayuda a mantener conductas saludables a largo plazo."

}

]

},

yellow:{

title:

"Ayuda e información para perfiles de riesgo medio",

color:

"yellow",

intro:

"Existen factores que pueden aumentar vulnerabilidades. Detectarlos tempranamente ayuda a prevenir riesgos mayores.",

sections:[

{

title:

"Identificar detonantes",

text:

"Reconocer emociones, contextos o situaciones que aumentan el riesgo ayuda a prepararse mejor para enfrentarlas."

},

{

title:

"Manejo emocional",

text:

"Aprender técnicas para controlar ansiedad, estrés o impulsividad disminuye conductas riesgosas."

},

{

title:

"Buscar apoyo",

text:

"Conversar con cercanos, docentes o familiares puede entregar apoyo emocional y orientación."

},

{

title:

"Construcción de hábitos",

text:

"Crear rutinas saludables ayuda a disminuir exposición a situaciones de riesgo."

}

]

},

red:{

title:

"Ayuda e información para perfiles de riesgo alto",

color:

"red",

intro:

"Tu resultado muestra presencia importante de factores de riesgo. Buscar apoyo temprano puede ayudarte significativamente.",

sections:[

{

title:

"No enfrentar esto solo",

text:

"Hablar con personas de confianza puede disminuir aislamiento y facilitar apoyo oportuno."

},

{

title:

"Identificar situaciones críticas",

text:

"Reconocer emociones, lugares o personas asociadas al consumo ayuda a prevenir recaídas."

},

{

title:

"Apoyo profesional",

text:

"Considera orientación psicológica, escolar o de salud para contar con acompañamiento continuo."

},

{

title:

"Construir un plan",

text:

"Pequeños cambios sostenidos, objetivos cortos y apoyo externo suelen generar mejores resultados."

}

]

}

};

const current =

content[level];

function send(){

setSent(true);

setName("");

setMail("");

setMessage("");

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

<input

placeholder="Nombre"

value={name}

onChange={(e)=>

setName(
e.target.value
)

}

/>

<input

placeholder="Correo"

value={mail}

onChange={(e)=>

setMail(
e.target.value
)

}

/>

<textarea

placeholder=

"Describe tu situación"

value={message}

onChange={(e)=>

setMessage(
e.target.value
)

}

/>

<button

onClick={send}

>

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