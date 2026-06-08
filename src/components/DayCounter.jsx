import { differenceInDays } from "date-fns";

export default function DayCounter(){

let startDate =

localStorage.getItem(
"startDate"
);

if(!startDate){

startDate =
new Date()
.toISOString()
.split("T")[0];

localStorage.setItem(
"startDate",
startDate
);

}

const days =

differenceInDays(

new Date(),

new Date(startDate)

);

return(

<div className="counter">

<h1>

{days}

</h1>

<p>

días sin consumir

</p>

</div>

)

}