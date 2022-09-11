const calcul =(n)=>{
const a=(n-1);
const b=(n-2);
const c=(n-3);

let rst =0
if (n==1) 
{
    rst=1
    
} 
else
 if (n==2) 
{
    rst=2
} 
else 
if (n==3) 
{
rst=4    
}
else{
rst=a+b+c
}
console.log('rst',rst,'n',n);
return rst
}
calcul(5)