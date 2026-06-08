export default function ResultCard({score}){

    let riskLevel="";
    let title="";
    let description="";
    let color="";
    
    if(score <= 6){
    
    riskLevel="green";
    
    title="Riesgo Bajo";
    
    description=
    
    "Tu evaluación muestra pocos factores de riesgo actualmente. Mantener hábitos saludables y redes de apoyo puede ayudarte a seguir así.";
    
    color="green";
    
    }
    
    else if(score <= 14){
    
    riskLevel="yellow";
    
    title="Riesgo Medio";
    
    description=
    
    "Existen algunos factores que podrían aumentar riesgos futuros. Trabajar prevención temprana puede generar cambios importantes.";
    
    color="yellow";
    
    }
    
    else{
    
    riskLevel="red";
    
    title="Riesgo Alto";
    
    description=
    
    "Tu resultado indica múltiples factores de riesgo. Buscar apoyo y orientación puede ayudarte a enfrentar estas situaciones.";
    
    color="red";
    
    }
    
    localStorage.setItem(
    
    "riskLevel",
    
    riskLevel
    
    );
    
    return(
    
    <div className={`saved-profile ${color}`}>
    
    <h2>
    
    Resultado obtenido
    
    </h2>
    
    <h1>
    
    {title}
    
    </h1>
    
    <p>
    
    {description}
    
    </p>
    
    <p>
    
    Tu perfil fue guardado automáticamente.
    
    </p>
    
    </div>
    
    )
    
    }