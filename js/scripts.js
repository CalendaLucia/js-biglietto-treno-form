
submitButton.addEventListener("click",
function() {

  // VARIABILI PRINCIPALI
  const nome = document.getElementById("name");
  const km = document.getElementById("chilometri");
  const age= document.getElementById("age");
  const submitButton = document.getElementById("submitButton");

  const prezzoFinale = parseInt( km.value * 0.21 )  ;
  const scontoUnder_18 = prezzoFinale  / 100 * 20 ;
  const scontoOver_65 = prezzoFinale / 100 * 40 ;
  const prezzoUnder_18 = prezzoFinale - scontoUnder_18 ;
  const prezzoOver_65 = prezzoFinale - scontoOver_65 ;
  
  //  INIZIO CONDIZIONI

  if (age.value == 'maggiorenne') {
    document.getElementById("sconto").innerHTML = "Biglietto Standard";
    document.getElementById("carrozza").innerHTML=Math.round(Math.random()*10+1);
    document.getElementById("cp").innerHTML=Math.round(Math.random()*9000+1);
    document.getElementById("result").innerHTML = prezzoFinale.toFixed(2)  + "€";
    document.getElementById("name-passengers").innerHTML = nome.value;

    // if ((nome.value == "") || (nome.value == "undefined")) {
    //            alert("Devi inserire un nome");
    //            nome.value.focus();
    //            return false;
    //         }

    //         if ((isNaN()) || (km.value == "") ) {
    //                    alert("Devi inserire i chilometri percorsi, attenzione deve essere numerico!");
    //                    km.value = "";
    //                    km.focus();
    //                    return false;
    //                 }

                   
}

    else if (age.value == 'minorenne') {
      document.getElementById("sconto").innerHTML = "20%";
      document.getElementById("carrozza").innerHTML=Math.round(Math.random()*10+1);
      document.getElementById("cp").innerHTML=Math.round(Math.random()*9000+1);
      document.getElementById("result").innerHTML = prezzoUnder_18.toFixed(2)  + "€";
      document.getElementById("name-passengers").innerHTML = nome.value;

    //   if ((nome.value == "") || (nome.value == "undefined")) {
    //     alert("Devi inserire un nome");
    //     nome.value.focus();
    //     return false;
    //  }

    //  if ((isNaN()) || (km.value == "") )  {
    //             alert("Devi inserire i chilometri percorsi, attenzione deve essere numerico!");
    //             km.value = "";
    //             km.focus();
    //             return false;
    //          }
      
}
   else if (age.value == 'over65') {
     document.getElementById("sconto").innerHTML = "40%";
     document.getElementById("carrozza").innerHTML=Math.round(Math.random()*10+1);
     document.getElementById("cp").innerHTML=Math.round(Math.random()*9000+1);
     document.getElementById("result").innerHTML = prezzoOver_65.toFixed(2)  + "€";
     document.getElementById("name-passengers").innerHTML = nome.value;

  //    if ((nome.value == "") || (nome.value == "undefined")) {
  //     alert("Devi inserire un nome");
  //     nome.value.focus();
  //     return false;
  //  }

  //  if ((isNaN()) || (km.value == ""))  {
  //             alert("Devi inserire i chilometri percorsi, attenzione deve essere numerico!");
  //             km.value = "";
  //             km.focus();
  //             return false;
  //          }

}

  });

  

const nascondi = document.getElementById("ticket").style.display = 'none';

 

 
submitButton.addEventListener('click', 
                         
    function() {
       
        document.getElementById("ticket").style.display = 'block';

    }
                         
);

const annulla = document.getElementById("returnButton");
 
returnButton.addEventListener('click', 
                         
    function () {
        
        document.getElementById("ticket").style.display = 'none';

    }
                         
);
                   
  
                
