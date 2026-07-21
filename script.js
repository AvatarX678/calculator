let angka = document.getElementById("angka");
let display = document.getElementById("display")
let terkunci= false;

let input = "";
let number = "";

let operations = "";
let number1 = "";
let number2 = "";

// tombol kalkulator
function button(){

const buttonnumber =document.querySelectorAll(".button");
buttonnumber.forEach((button) =>{
   button.addEventListener("click", function(){
      if(terkunci){
         return
      }
      else if(this.value=="." && number==""){
         return
      }
      
      input=input+this.value;
      number= number +this.value;
      display.textContent = input;

      angka.textContent= number;
       
      if(operations == ""){
         number1 = number
      }
      else{
         if(this.value =="0"){
            number2=number;
            return
         }
         number2 = number
      }
   })
})

const buttonoperation = document.querySelectorAll(".operation");
   buttonoperation.forEach((buttons) =>{
      buttons.addEventListener("click", function(){
          if(this.value == "clear"){
            input=""
            number=""
            operations=""
            number1=""
            number2=""
            angka.textContent=""
            display.textContent=""
            terkunci= false
            return
         }
         else if(terkunci){
            return
         }
         
         else if(number=="" && operations){
            return
         }
         else if(number1==""){
            return
         }
         else if(number.endsWith(".")){
            return
         }
         else if(this.value =="="){
            if(!number2){
               return 
            }
         else if(number2=="0"){
            operation()
            return
         }
         
            display.textContent= input + this.value;  
            operation()
            return
         }
         operationloop()
         if(terkunci){
            return
         }
         input=input+this.value;
         number= ""

         display.textContent=input;
         operations = this.value;
   })
})
   const btnbs = document.getElementById("btnbs");
btnbs.addEventListener("click", function(){
   if(terkunci){
      return
   }
   input=input.slice(0,-1);
   number=number.slice(0,-1);
   if(operations==""){
      number1=number
   }
   else{
      number2=number
   }
      
   display.textContent= input;
   angka.textContent=number;


})


}
button()



function sum(Inumber1,Inumber2){
   let sum = Inumber1+ Inumber2;
   return sum;
}
function kurang(Inumber1,Inumber2){
   let kurang = Inumber1-Inumber2;
   return kurang;
}
function bagi(Inumber1,Inumber2){
   let bagi = Inumber1/Inumber2;
   return bagi
}
function kali(Inumber1,Inumber2){
   let kali =Inumber1*Inumber2;
   return kali;
}

function operation(){
   if (!operations){
      return;
   }
   else if (operations == "+"){
      const result= sum(Number(number1),Number(number2))
      angka.textContent= result
      reset(result)
   }
   else if (operations == "-"){
      const result= kurang(Number(number1),Number(number2))
     angka.textContent= result
     reset(result)
   }
   else if (operations == "x"){
      const result= kali(Number(number1),Number(number2))
      angka.textContent= result
      reset(result)
   }
   else{
      if(Number(number2) == 0){
         angka.textContent="gak bisa bagi dengan 0"
         terkunci = true
         return
      }
      const result= bagi(Number(number1),Number(number2))
     angka.textContent= result
     reset(result)
   }
}

function reset(result){
   number1= String(result) 
   number2= ""
   operations= ""
   number=""
   input=String(result)

}


function operationloop(){
   if(number2 && operations){
       operation()
  }}

