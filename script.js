var listaCognomi = ["Bianchi","Neri", "Rossi", "Verdi", "Gialli"];

var nuovoCognome = prompt("Congome: ");

listaCognomi.push(nuovoCognome);

listaCognomi.sort();

for(let i=1;i<listaCognomi.length;i++){
    console.log(i + ". " + listaCognomi[i]);
}