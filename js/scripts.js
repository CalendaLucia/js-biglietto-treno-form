const nome = document.getElementById("name");
const km = document.getElementById("chilometri");
const age= document.getElementById("age");
const submitButton = document.getElementById("submitButton");
const prezzoAlChilomentro = 0.21;
const prezzoFinale = parseInt(km.value) * prezzoAlChilomentro;


const scontoUnder_18 = prezzoFinale  / 100 * 20 ;
const scontoOver_65 = prezzoFinale / 100 * 40 ;
const prezzoUnder_18 = prezzoFinale - scontoUnder_18 ;
const prezzoOver_65 = prezzoFinale - scontoOver_65 ;

  
submitButton.addEventListener("click",
function() {
  

  if (age.value == 'maggiorenne') {
  document.getElementById("sconto").innerHTML = "Biglietto Standard";
  document.getElementById("carrozza").innerHTML=Math.round(Math.random()*10+1);
  document.getElementById("cp").innerHTML=Math.round(Math.random()*9000+1);
  document.getElementById("result").innerHTML = prezzoFinale;
 
}
   
 

    else if (age.value == 'minorenne') {
  document.getElementById("sconto").innerHTML = "20%";
  document.getElementById("carrozza").innerHTML=Math.round(Math.random()*10+1);
  document.getElementById("cp").innerHTML=Math.round(Math.random()*9000+1);
  document.getElementById("result").innerHTML = prezzoUnder_18;
}
   else if (age.value == 'over65') {
  document.getElementById("sconto").innerHTML = "40%";
  document.getElementById("carrozza").innerHTML=Math.round(Math.random()*10+1);
  document.getElementById("cp").innerHTML=Math.round(Math.random()*9000+1);
  document.getElementById("result").innerHTML = prezzoOver_65;

}

  });

  document.getElementById("result").innerHTML = prezzoOver_65.toFixed(2) + "€";
  document.getElementById("result").innerHTML = prezzoUnder_18.toFixed(2) + "€";
  // submitButton.addEventListener('click', 
  //   function () {
  //    // Variabili associate ai campi del modulo
  //    const nome = nome.value;
  //    const km = km.value;
  //    const age= age.value;
  //    const submitButton= submitButton.value;
    
//      if ((nome == "") || (nome == "undefined")) {
//         alert("Devi inserire un nome");
//         nome.focus();
//         return false;
//      }
//      if ((isNaN()) || (km == "") || (km == "undefined")) {
//         alert("Devi inserire i chilometri percorsi, attenzione deve essere numerico!");
//         km.value = "";
//         km.focus();
//         return false;
//      }


//      if ((age == "") || (age == "undefined")) {
//         alert("Devi confermare la tua età");
//         age.focus();
//         return false;
//       }
//       if (password != age) {
//          alert("scegli il tuo sesso");
//          age.value = "";
//          age.focus();
//          return false;
//       }
//       else {
//         submitButton.submit();
//      }

     
//   }
//   )






// //seleziono gli elementi HTML input e li assegno a delle variabili
// const inputName = document.getElementById('name');
// const km = document.getElementById('chilometri');
// const age = document.getElementById('age');


// const nascondi =   document.getElementById("ticket").style.display = 'none';

 
// const button = document.getElementById("genera");
 
// button.addEventListener('click', 
                         
//     function() {
       
//         document.getElementById("ticket").style.display = 'block';

//     }
                         
// );

// const annulla = document.getElementById("annulla");
 
// annulla.addEventListener('click', 
                         
//     function annulla() {
        
//         document.getElementById("ticket").style.display = 'none';

//     }
                         
// );
                   
  
                
