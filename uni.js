



let  url="http://universities.hipolabs.com/search?name=";


let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{

     let country=document.querySelector("#result").value;
     if(!country) return
       let con=await  getcollages(country);
       console.log(con); 


    //  line no.. 14 array element hai isko phala for of loop laga ka ek ek item ko acces karanga 
    // thenn c.name print hoga yani universty ka namm
       console.log(country);
       show(con);
       document.querySelector("#result").value=""
})


 function show(con){

     let ul=document.querySelector("#list")
     ul.innerText=""
for(c of con){
    console.log(c.name)

    let li=document.createElement("li");
  li.innerText=c.name
    // li.innerText=ul
      ul.appendChild(li);
}
 }

 



async function getcollages(country) {

    try{
    let res=await axios.get(url+country);
return res.data
      }catch (error) {
        console.log("error",error)
        return "no university found"
    }
}

// getcollages()