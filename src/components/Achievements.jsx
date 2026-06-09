import { differenceInDays } from "date-fns";

export default function Achievements(){

const savedDate =

localStorage.getItem(
"startDate"
);

const startDate =

savedDate ||

new Date()
.toISOString()
.split("T")[0];

const days = Math.max(

0,

differenceInDays(

new Date(),

new Date(startDate)

)

);

const achievements = [

{
days:1,
title:"Primer paso"
},

{
days:3,
title:"3 días"
},

{
days:7,
title:"1 semana"
},

{
days:15,
title:"15 días"
},

{
days:30,
title:"1 mes"
},

{
days:60,
title:"2 meses"
},

{
days:90,
title:"3 meses"
}

];

return(

<div className="achievement-box">

<h2>

Logros

</h2>

<div className="badges">

{

achievements.map(

(item,index)=>{

const unlocked =

days >= item.days;

return(

<div

key={index}

className={

unlocked

?

"badge-card unlocked"

:

"badge-card locked"

}

>

<h3>

{

unlocked

?

"✓"

:

"🔒"

}

</h3>

<p>

{item.title}

</p>

</div>

)

}

)

}

</div>

</div>

)

}