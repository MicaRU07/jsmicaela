//Array
const productos = ["Taza","Remera","FunkoPOP"]
console.log(productos)
console.log(productos.length) //longitud de 3 

//Objeto constructor
function Merchandising (tipo,material,categoria,valor){
    this.tipo = tipo;
    this.material = material;
    this.categoria = categoria;
    this.valor = valor;
}

productos.push("biografia")
console.log(productos)
console.log(productos.length) //cambio de longitud porque sume un producto

/*------------------------------------------------------------------------*/
//Declaro mis variables
//en este apartado comento los console.log para que no sean repetitivos ya que debajo en el switch los muestro tambien

const taza = new Merchandising("taza","ceramica","hogar","300")
    //console.log(taza) // de ejemplo para visualizar que se haya creado bien el objeto de mi producto
   //console.log("Cada "+ taza.tipo +" vale"+ " $" + taza.valor)

const remera = new Merchandising("remera","tela","ropa","1200")
   //console.log("Cada "+ remera.tipo +" vale" +" $" + remera.valor)

const funkoPOP = new Merchandising("Funko","plastico","coleccionables","5000")
   //console.log("Cada "+ funkoPOP.tipo +" vale" +" $" + funkoPOP.valor)


const biografia = new Merchandising("libro","papel","reciclados","3200")
   //console.log("Cada "+ biografia.tipo +" vale" +" $" + biografia.valor)

/*------------------------------------------------------------------------*/  

//Simulador 
let producto = prompt("Ingrese el producto que desea comprar")
switch(producto){ 
    case "taza":
         alert("El producto " + producto + " esta disponible en nuestra tienda")
         let confirmacion = prompt("¿Desea realizar la compra?")
         if(confirmacion=="si"){
            console.log("Cada "+ taza.tipo +" vale"+ " $" + taza.valor)
         } else {
            console.log("¡Que pena, te esperamos devuelta pronto!")
         }
          break;
    case "remera":
        console.log("El producto " + producto + " esta disponible en nuestra tienda")
        let confirmacion2= prompt("¿Desea realizar la compra?")
         if(confirmacion2=="si"){
            console.log("Cada "+ remera.tipo +" vale"+ " $" + remera.valor)
         } else {
            console.log("¡Que pena, te esperamos devuelta pronto!")
         }
          break;
    case "funkoPOP":
        console.log("El producto " + producto + " esta disponible en nuestra tienda")
        let confirmacion3 = prompt("¿Desea realizar la compra?")
         if(confirmacion3=="si"){
            console.log("Cada "+ funkoPOP.tipo +" vale"+ " $" + funkoPOP.valor)
         } else {
            console.log("¡Que pena, te esperamos devuelta pronto!")
         }
         break;
    case "biografia":
            console.log("El producto " + producto + " esta disponible en nuestra tienda")
            let confirmacion4 = prompt("¿Desea realizar la compra?")
         if(confirmacion4=="si"){
            console.log("Cada "+ biografia.tipo +" vale"+ " $" + biografia.valor)
         } else {
            console.log("¡Que pena, te esperamos devuelta pronto!")
         }
             break;
    default:
           console.log("El producto " + producto + " no esta disponible en nuestra tienda, lo sentimos")
    }

/*------------------------------------------------------------------------*/
 //Array de objetos 
 const productos1 = [
   {tipo:"taza", material:"ceramica", categoria:"hogar", valor:300 },
   {tipo: "remera", material:"tela", categoria:"ropa", valor:1200 },
   {tipo:"funkoPOP", material: "plastico", categoria:"coleccionables", valor:5000 },
   {tipo:"biografia", material:"papel", categoria: "reciclados", valor:3200 }
 ]

for(let item of productos1){
   document.write("La mejor oferta en " + item.tipo + " la encontras en nuestro sitio" +"<br/>")
}

const busqueda = productos1.findIndex (elemento => {
   return elemento.material === "tela";
});
console.log(busqueda);


//filter y busqueda

