import DayCounter from "../components/DayCounter";

import Achievements from "../components/Achievements";

import ProgressCalendar from "../components/ProgressCalendar";

import { differenceInDays } from "date-fns";

export default function Progress(){

const savedDate =

localStorage.getItem(
"startDate"
);
    
const startDate =
    
savedDate ||
    
new Date()
.toISOString()
.split("T")[0];

const relapses =

JSON.parse(

localStorage.getItem(
"relapses"
)

) || [];

const bestStreak =

parseInt(

localStorage.getItem(
"bestStreak"
)

) || 0;

const days = Math.max(

0,
    
differenceInDays(
    
new Date(),
    
new Date(startDate)
    
)
    
);

if(days > bestStreak){

localStorage.setItem(

"bestStreak",

days

);

}

const nextGoal =

days < 7

? 7

: days < 15

? 15

: days < 30

? 30

: 60;

const progress =

Math.min(

(days / nextGoal) * 100,

100

);

let message =

"Cada día cuenta.";

if(days >= 2)

message =

"Vas avanzando paso a paso.";

if(days >= 7)

message =

"Ya completaste una semana.";

if(days >= 15)

message =

"Tu constancia está generando cambios.";

if(days >= 30)

message =

"Has construido una racha importante.";

function relapse(){

const confirmReset =

window.confirm(

"¿Registrar recaída?"

);

if(!confirmReset)
return;

const today =

new Date()
.toISOString()
.split("T")[0];

localStorage.setItem(

"startDate",

today

);

localStorage.setItem(

"relapses",

JSON.stringify([

...relapses,
today

])

);

window.location.reload();

}

return(

<div className="container">

<div className="progress-hero">

<div>

<h1>

Tu progreso

</h1>

<p>

{message}

</p>

</div>

<div className="hero-streak">

{days} días

</div>

</div>

<div className="goal-card">

<div className="goal-top">

<span>

Meta actual

</span>

<span>

{nextGoal} días

</span>

</div>

<div className="goal-progress">

<div

className="goal-fill"

style={{

width:`${progress}%`

}}

></div>

</div>

</div>

<div className="stats-grid">

<div className="stat-card">

<h2>

{days}

</h2>

<p>

racha actual

</p>

</div>

<div className="stat-card">

<h2>

{bestStreak}

</h2>

<p>

mejor racha

</p>

</div>

<div className="stat-card">

<h2>

{relapses.length}

</h2>

<p>

recaídas

</p>

</div>

</div>

<div className="support-box">

<p>

{message}

</p>

<button

className="danger-btn small"

onClick={relapse}

>

Registrar recaída

</button>

</div>

<Achievements/>

<ProgressCalendar/>

</div>

)
}