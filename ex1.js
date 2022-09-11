
    
const variables =(a,b,c) =>{

if (a === b && b === c) { 
    console.log("Les 3 variables sont identiques.");  
} else { 
    if (a === c || a === b || b === c ) { 
        console.log("2 des variables sont de valeurs égales."); 
    } else { 
        console.log("Les 3 variables sont différentes."); 
    } 
}
}

variables(2,2,3)