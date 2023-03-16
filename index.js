class producto{
    constructor(id,nombre,precio){
        this.id =id
        this.nombre =nombre
        this.precio =precio
    }
}

const picada1 =new producto(1,"picada1",2000)
const picada2 =new producto(2,"picada2",3000)
const picada3 =new producto(3,"picada3",4000)
const picada4 =new producto(4,"picada4",5000)

const productos= [picada1,picada2,picada3,picada4]
console.log(productos);

let productoEscogido = prompt("Escoge el producto que deseas comprar:picada1($2000),picada2($3000),picada3($4000),picada4($5000")
let seguirComprando = true

const carrito =[]


while(seguirComprando === true){
    const producto = productos.find(producto=>producto.nombre===productoEscogido.toLowerCase().trim())

if(producto){
    carrito.push(producto)
}else{
    productoEscogido = prompt("Escoge un producto correcto:picada1($2000),picada2($3000),picada3($4000),picada4($5000")
    continue
}
const decision = prompt("desea seguir comprando? si-no")
if(decision==="si"){
    productoEscogido =prompt ("Escoge el producto que deseas comprar: picada1($2000),picada2($3000),picada3($4000),picada4($5000")
}else{
    seguirComprando = false
    console.log(carrito);
    
}

}

console.log(carrito);
let totalCompra = 0
for (const producto of carrito){
    totalCompra = totalCompra + producto.precio
}
alert("El total de tus compra es: "+totalCompra)
