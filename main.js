const listaSpesa = ["Acqua", "Pane", "Birra", "Lievito", "Mele", "Farina", "Uova"];
const shoppingList = document.getElementById("shopping-list");
console.log(listaSpesa)


let i = 0;


while (i < listaSpesa.length) {
    let item = `<li>${listaSpesa[i]}</li>`
    shoppingList.innerHTML += item;
    i++;  
}