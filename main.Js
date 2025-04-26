
let Opj={

    name:'Marwa',Age:22,lo:'Jordan'  //key:value
}
let S= Object.keys(Opj); //name,Age,lo
let S1=Object.values(Opj);
let S2=Object.entries(Opj) // name:'marwa'  , Age:22 , lo:'Jordan' 
let O2={Mark:22}
let O3={Test:true}
 let m={}
let S4 = Object.assign(m, Opj, O2, O3);
 
let text = "";
for (let x in S4) {
  text += m[x] + " ";
};

document.getElementById('A').innerHTML= Opj;