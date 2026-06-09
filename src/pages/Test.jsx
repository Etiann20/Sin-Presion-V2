import { useState } from "react";
import ResultCard from "../components/ResultCard";
import { useNavigate } from "react-router-dom"

const navigate = useNavigate();

const questions = [

{
text:"¿Te sientes presionado por amistades o conocidos para consumir sustancias?",
risk:2
},

{
text:"¿Te cuesta decir que no cuando alguien te ofrece consumir?",
risk:2
},

{
text:"¿Has consumido sustancias para reducir estrés, ansiedad o tristeza?",
risk:2
},

{
text:"¿Frecuentas lugares o grupos donde el consumo es habitual?",
risk:2
},

{
text:"¿Sientes curiosidad frecuente por probar nuevas sustancias?",
risk:1
},

{
text:"¿Tu estado emocional afecta mucho tus decisiones diarias?",
risk:1
},

{
text:"¿Has sentido culpa, arrepentimiento o preocupación después de consumir?",
risk:2
},

{
text:"¿Has ocultado conductas relacionadas al consumo a familiares o amigos?",
risk:2
},

{
text:"¿Has dejado de hacer actividades importantes por consumir o pensar en consumir?",
risk:2
},

{
text:"¿Crees que controlarías fácilmente el consumo si quisieras detenerlo?",
risk:1
},

{
text:"¿Has consumido por sentirte excluido, solo o para encajar socialmente?",
risk:2
},

{
text:"¿Has tenido problemas académicos, familiares o personales relacionados al consumo?",
risk:2
}

];

export default function Test(){

const savedRisk =
localStorage.getItem(
"riskLevel"
);

function profileText(){

if(savedRisk==="green")
return "Riesgo Bajo";

if(savedRisk==="yellow")
return "Riesgo Medio";

if(savedRisk==="red")
return "Riesgo Alto";

return "";

}

function profileClass(){

if(savedRisk==="green")
return "green";

if(savedRisk==="yellow")
return "yellow";

if(savedRisk==="red")
return "red";

return "";

}

const [step,setStep] =
useState(0);

const [score,setScore] =
useState(0);

const [finished,setFinished] =
useState(false);

function answer(value){

const total =
score + value;

if(step + 1 < questions.length){

setScore(total);

setStep(step + 1);

}

else{

setScore(total);

setFinished(true);

}

}

function reset(){

localStorage.removeItem("riskLevel");
localStorage.removeItem("startDate");   
localStorage.removeItem("bestStreak");    
localStorage.removeItem("relapses");   
localStorage.removeItem("consumedDays");   

navigate("/");
    
}

if(savedRisk){

return(

<div className="container">

<div className={`saved-profile ${profileClass()}`}>

<h2>

Resultado actual

</h2>

<h1>

{profileText()}

</h1>

<p>

Tu evaluación ya fue realizada y permanece guardada.

</p>

<button onClick={reset}>

Reiniciar perfil

</button>

</div>

</div>

)

}

const progress =

((step + 1)
/ questions.length)

*100;

return(

<div className="container">

{

finished ?

<ResultCard score={score}/>

:

<>

<div className="progress">

<div

className="fill"

style={{

width:`${progress}%`

}}

></div>

</div>

<h2>

Pregunta {step + 1} de {questions.length}

</h2>

<p>

{questions[step].text}

</p>

<div className="buttons">

<button

onClick={()=>
answer(
questions[step].risk
)
}

>

Sí

</button>

<button

onClick={()=>
answer(0)
}

>

No

</button>

</div>

</>

}

</div>

)

}