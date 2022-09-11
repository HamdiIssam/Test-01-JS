// // 1 Ko = 1024 octets *(1 Kilooctet)
// 1 Mo  = 1024 x 1024 octets* (1 mégaoctet)
// 1 Go = 1024 x 1024 x 1024 octets *(1 gigaoctet)
// 1 To  = 1024 x 1024 x 1024 x 1024 octets *(1 téraoctet)

//1)solution 



const Convertisseur=(unit,quantity)=>{
    let result=0
    if (unit === 'K') { 
        result = 1024 * quantity; 
    } else if (unit === 'M') { 
        result = 1024 * 1024 * quantity; 
    } else if (unit === 'G') { 
        result = 1024 * 1024 * 1024 * quantity; 
    } else if (unit === 'T') { 
        result = 1024 * 1024 * 1024 * 1024 * quantity; 
    } else { 
        result= false; 
    } 
      
    console.log(result); 
    }
    Convertisseur('K',2)




    
const Convertisseur2 =( unit,quantity) =>{
    let result2=0

switch (unit) { 
    case 'K': 
        result2 = 1024 * quantity; 
        break; 
    case 'M': 
        result2 = 1024 * 1024 * quantity; 
        break; 
    case 'G': 
        result2 = 1024 * 1024 * 1024 * quantity; 
        break; 
    case 'T': 
        result2 = 1024 * 1024 * 1024 * 1024 * quantity; 
        break; 


    default: 
        result2 = false; 
} 
  
console.log(result2);
}

Convertisseur2('K',3 )