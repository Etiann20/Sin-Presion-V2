import { differenceInDays } from "date-fns";

export default function DayCounter(){

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

return(

<div className="counter">

<div className="counter-content">

<h1>

{days}

</h1>

<span className="counter-label">

días sin consumir

</span>

</div>

</div>

)

}