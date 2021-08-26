var listaCognomi = ["Bianchi","Neri", "Rossi", "Verdi", "Gialli"];

var nuovoCognome = prompt("Cognome: ");

listaCognomi.push(nuovoCognome);

listaCognomi.sort();
let a=document.getElementsByClassName("cognome");

for(let i=0;i<listaCognomi.length;i++){
    a[i].textContent = i+1 + ". " + listaCognomi[i];
}

