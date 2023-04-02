const formulario = document.getElementById("formulario")
const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const titulo = document.getElementById("titulo")
const divProductos = document.getElementById("divProductos")

//click sobre el boton ingresar
formulario.onsubmit = (e)=>{
    e.preventDefault()
    const infoUsuario = {
        nombre:inputNombre.value,
        apellido: inputApellido.value
    }
    localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
    formulario.remove()
    titulo.innerText = `BIENVENIDO ${infoUsuario.nombre} ${infoUsuario.apellido}`
}

const infoUsuario = JSON.parse (localStorage.getItem("infoUsuario"))
if(infoUsuario){
    formulario.remove()
    titulo.innerText = `BIENVENIDO ${infoUsuario.nombre} ${infoUsuario.apellido}`

}



class producto {
    constructor(id,nombre,precio,stock){
        this.id =id
        this.nombre =nombre
        this.precio =precio
        this.stock =stock
        
    }
}
const productos= [
new producto (1,"picada1",2000,10,),
new producto (2,"picada2",3000,10),
new producto (3,"picada3",4000,10),
new producto (4,"picada4",5000,10)
]

productos.forEach(prod=>{
divProductos.innerHTML+=  
`<div class="card cardProducto" style="width: 18rem;">
<img src="" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${prod.nombre}</h5>
  <p class="card-text">${prod.precio}</p>
  <button id=${prod.id} class="btn btn-primary">AGREGAR</button>
</div>
</div>`

})

//colocar producto en carrito
const carrito = []

//guardar en cada boton agregar
const botonesAgregar = document.querySelectorAll(".btn-primary")
botonesAgregar.forEach(boton=>{
boton.onclick = ()=>{
    const producto = productos.find(p=>p.id===parseInt(boton.id) )
    const prodCarrito={
        id: producto.id,
        nombre:producto.nombre,
        precio:producto.precio,
        cantidad:1,
        
    }
    const prodEncarrito = carrito.find(prod=>prod.id===prodCarrito.id)
    if(!prodEncarrito){
        carrito.push(prodCarrito)
    } else {
        prodEncarrito.cantidad++
    }
   console.log(carrito);
}
})

//Botton fianlizar compra
const botonFinalizar = document.querySelector("#finalizar")
const thead = document.querySelector("#thead")
const tbody = document.querySelector("#tbody")
const parrafoTotal = document.querySelector("#total")
botonFinalizar.onclick = ()=>{
    divProductos.remove()
    botonFinalizar.remove()
    thead.innerHTML = `<tr>
    <th scope="col">PRODUCTO</th>
    <th scope="col">CANTIDAD</th>
    <th scope="col">TOTAL</th>
  </tr>`
let totalCompra = 0
  carrito.forEach(prod=>{
    totalCompra+= prod.cantidad*prod.precio
    tbody.innerHTML+=`<tr>
    <th scope="row">${prod.nombre}</th>
      <td>${prod.cantidad}</td>
      <td>${prod.cantidad*prod.precio}</td>

    
  </tr>
`
  })
parrafoTotal.innerHTML = `El total de tu compra es ${totalCompra}`
}





