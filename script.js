const nyckel = "EnLocalStorageVarukorgFörDigSomAnvänderDetHär"
const nyckel2 = "EnLocalStorageVarukorgFörDigSomAnvänderDetHär2"




let varor = ["KungCarlGustaf ","Wisby ","Fem kronor ","8 Öre "];
let pris = [22,255,3014,691];
let vara = "";
let varorantal = 0;
let köplista = [];
let prislista = [];
let nummer = 0;
let totalt = 0;

let totaltTXT = document.querySelector("h4")
let kvLänk = document.querySelector("h1")
let kundvagn = document.querySelector("h3");
kundvagn.textContent = "";
totaltTXT.textContent = "";




function läggtill(vara){
köplista.push(varor[vara]);
prislista.push(pris[vara]);
totalt = totalt + (pris[vara]);
nummer++;
kundvagn.textContent += nummer + ". " + köplista[varorantal] + prislista[varorantal]+"kr \r\n";
varorantal++;
kvLänk.textContent = "Kundvagn "+nummer;
totaltTXT.textContent = "Summa: " + totalt + "kr";

let json_köplista = JSON.stringify(köplista);
let json_prislista = JSON.stringify(prislista);
window.localStorage.setItem(nyckel,json_köplista);
window.localStorage.setItem(nyckel2,json_prislista);

}

function laddaKundvagn(){
    kundvagn.textContent = "";
    let json_köplista = window.localStorage.getItem(nyckel);

    let json_prislista = window.localStorage.getItem(nyckel2);

    köplista = JSON.parse(json_köplista);
    prislista = JSON.parse(json_prislista);
    totalt = 0;
    varoantal = 0;
    nummer = 1;
    köplista.forEach(addToList);
        
    totaltTXT.textContent = "Summa: " + totalt + "kr";


}
function addToList(){
    kundvagn.textContent += nummer + ". " + köplista[varorantal] + prislista[varorantal]+"kr \r\n";
    nummer++;
    totalt += prislista[varorantal]
    varorantal++;

}

function test(){
    kundvagn.textContent = "Halloj!a";
    totaltTXT.textContent = "Sasfgasg";
    kvLänk.textContent = "Kundvagn 142"
}

function rensaKundvagn(){
    varorantal = 0;
    nummer = 0;
    totalt = 0;
        köplista = [];
        prislista = [];
        let json_köplista = JSON.stringify(köplista);
let json_prislista = JSON.stringify(prislista);
window.localStorage.setItem(nyckel,json_köplista);
window.localStorage.setItem(nyckel2,json_prislista);
laddaKundvagn();
}

function betala(){
    
}