// var a=10;
// let b=6;
// const c=17;
// console.log(a);
// console.log(b);
// console.log(c);
// const a1=20;
// const st="Divakar"
// const n=null;
// const obj={
//     name: "Siva",
//     no: '12323',
//     age: "102",
// }
// console.log(obj);
// let ans=(x1,x2)=>x1*x2;
// console.log(ans(6,7));

const first = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('data is rejected')
        },2000);
    })
}

const getData=async()=>{
    try{
        const mydata=await first();
        console.log(mydata);
        console.log('second console');
    }
    catch(err){
        
    }
}