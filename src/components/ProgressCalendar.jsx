import {

    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    getDay
    
    }
    
    from "date-fns";
    
    export default function ProgressCalendar(){
    
    const resets =
    
    JSON.parse(
    
    localStorage.getItem(
    "relapses"
    )
    
    ) || [];
    
    const today =
    new Date();
    
    const firstDay =
    
    startOfMonth(today);
    
    const lastDay =
    
    endOfMonth(today);
    
    const monthDays =
    
    eachDayOfInterval({
    
    start:firstDay,
    
    end:lastDay
    
    });
    
    const emptyDays =
    
    Array(
    
    getDay(firstDay)
    
    ).fill(null);
    
    function color(day){
    
    const formatted =
    
    day
    .toISOString()
    .split("T")[0];
    
    if(
    
    resets.includes(
    formatted
    )
    
    ){
    
    return "calendar-red";
    
    }
    
    if(day > today){
    
    return "";
    
    }
    
    return "calendar-green";
    
    }
    
    return(
    
    <div className="calendar-card">
    
    <h2>
    
    {format(
    today,
    "MMMM yyyy"
    )}
    
    </h2>
    
    <div className="weekdays">
    
    <span>L</span>
    
    <span>M</span>
    
    <span>M</span>
    
    <span>J</span>
    
    <span>V</span>
    
    <span>S</span>
    
    <span>D</span>
    
    </div>
    
    <div className="calendar-grid">
    
    {
    
    emptyDays.map((_,i)=>(
    
    <div key={i}></div>
    
    ))
    
    }
    
    {
    
    monthDays.map((day,index)=>(
    
    <div
    
    key={index}
    
    className={
    
    `calendar-day ${color(day)}`
    
    }
    
    >
    
    {day.getDate()}
    
    </div>
    
    ))
    
    }
    
    </div>
    
    </div>
    
    )
    
    }