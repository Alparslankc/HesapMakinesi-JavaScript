const hesapEkran = document.getElementById("ekran");
const temizle = document.getElementById("temizle");
const temizleq = document.getElementById("butonback");
const tümbuton = document.getElementById("tümbutonlar");
const böl = document.getElementById("/");
const carp1 = document.getElementById("*");
const cikar = document.getElementById("-");
const topla1 = document.getElementById("+");
const esit1 = document.getElementById("esit1");
const nokta1 = document.getElementById("nokta");

//const hesapEkran2 = document.getElementById("ekran2");
//const hesapEkran3 = document.getElementById("ekran3");



let bir;
let islem= "";

function islemYap(bir, islem){
    switch(islem){
        case "topla" : 
            return parseFloat(bir) + parseFloat(hesapEkran.innerText);
        case "bol" :
            return parseFloat(bir) /   parseFloat(hesapEkran.innerText);
        case "cikar" :
            return parseFloat(bir) - parseFloat(hesapEkran.innerText);
        case "carp" :
            return parseFloat(bir) * parseFloat(hesapEkran.innerText);
    }
    
}

 /* function islemyaap (bir,islem)
{
    if ( islem == "topla" )
    {
        sonuctoplam = parseInt(bir) + parseInt(hesapEkran.innerText);
        
        return sonuctoplam;
    }
    else if ( islem == "cikar")
    {
        sonuccikar= parseInt(bir) - parseInt(hesapEkran.innerText);
        return sonuccikar;
    }
    else if ( islem == "carp")
    {
        sonuccikar= parseInt(bir) * parseInt(hesapEkran.innerText);
        return sonuccarrp;
    }
    else if  ( islem == "bol")
    {
        sonuccikar= parseInt(bir) / parseInt(hesapEkran.innerText);
        return sonuccbol;
    }

}*/


temizle.addEventListener('click',temizlemek)

function temizlemek () {
bir = 0; 
hesapEkran.innerText = 0 };

temizleq.addEventListener('click', buton1sil)
  
function buton1sil () {
var rakam = hesapEkran.innerText;
if(rakam.length > 1){
hesapEkran.innerText = rakam.slice(0,rakam.length-1);}
else
hesapEkran.innerText = 0;}


tümbuton.addEventListener('click', butonfonks)
  
function butonfonks (event) { 
if(event.target.innerText >= 0){
    if (hesapEkran.innerText != 0){
        var str = hesapEkran.innerText.concat("",event.target.innerText);
        hesapEkran.innerText = str;}
        else{
        hesapEkran.innerText = event.target.innerText;
    }}};

    
   böl.addEventListener('click', böl2) 
   function böl2() {
    if (hesapEkran.innerText != null ){ 
        bir = hesapEkran.innerText;  
        islem = "bol"; 
                                  
        
        hesapEkran.innerText = ""; 
    }
    
};

carp1.addEventListener('click', carp2)

function carp2() {
    if (hesapEkran.innerText != null ){

        bir = hesapEkran.innerText;
        islem = "carp";
        
        hesapEkran.innerText = "0";
    }
};

cikar.addEventListener('click', cikar2)


function cikar2() {
    if (hesapEkran.innerText !=null ){

        bir = hesapEkran.innerText;
        islem = "cikar";
        
        hesapEkran.innerText = "0";
    }
};

topla1.addEventListener('click', topla2)
function topla2() {
    if (hesapEkran.innerText != null ){

        bir = hesapEkran.innerText;
        islem = "topla";
        
        hesapEkran.innerText = "0";
    }
};
esit1.addEventListener('click', esit2)

function esit2() { 
    
    if (hesapEkran.innerText != 0 && bir != null ){ 
        hesapEkran.innerText = islemYap(bir, islem); 
        bir = 0;
    }
};

nokta1.addEventListener("click",nokta)

function nokta () 
{
    
    hesapEkran.innerText = hesapEkran.innerText + ".";
    
}
    
