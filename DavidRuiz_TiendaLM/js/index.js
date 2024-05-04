// #region PRODUCTOS

    const productos = [
        {
            id: 1,
            nombre: "Urlon Bárbaro",
            precio: 9.99,
            imagen: "img/Urlon1.jpg",
            info:"Criatura acuática conocida por sus travesuras. Aspecto de bárbaro, reflejando la fuerza y valentía.",
            categoria: ["Urlon", "Barbaros"],
            botonAgregar: "+",
            botonQuitar: "-"
        },

        {
            id: 2,
            nombre: "Urlon  Dragón",
            precio: 11.99,
            imagen: "img/Urlon2.jpg",
            info:"Urlon con capacidades básicas más elementos de dragón. Inusual y fascinante.",
            categoria: ["Urlon", "Dragon"],
            botonAgregar: "+",
            botonQuitar: "-"
        },

        {
            id: 3,
            nombre: "Urlon clase Guerrero",
            precio: 9.99,
            imagen: "img/Urlon3.jpg",
            info:"Peluche con armadura detallada y postura de combate.",
            categoria: ["Urlon", "Guerreros"],
            botonAgregar: "+",
            botonQuitar: "-"
        },

        {
            id: 4,
            nombre: "Elfo de la Luna",
            precio: 11.99,
            imagen: "img/elfo1.jpg",
            info:"Elfo de la Luna con conexión a la naturaleza y espíritu aventurero.",
            categoria: ["Elfos","Oscuros"],
            botonAgregar: "+",
            botonQuitar: "-"
        },

        {
            id: 5,
            nombre: "Elfo Caballero",
            precio: 12.99,
            imagen: "img/elfo3.jpg",
            info:"Representa la fortaleza, honor y coraje de un Caballero de Sangre.",
            categoria: ["Elfos", "Guerreros"],
            botonAgregar: "+",
            botonQuitar: "-"
        },

        {
            id: 6,
            nombre: "Elfo del Vacio Demonio",
            precio: 12.99,            
            imagen: "img/demo3.jpg",
            info:"Peluche imponente pero de materiales suaves. Refleja la fuerza y el poder de un Demonio del Vacío.",
            categoria: ["Elfos","Demonios"],
            botonAgregar: "+",
            botonQuitar: "-"  
        },

        {
            id: 7,
            nombre: "Caballero Esqueleto",
            precio: 19.99,
            imagen: "img/demo2.jpg",
            info:"Caballero Esqueleto con espada y aura helada. Conocido por su poder y temible presencia.",
            categoria: ["Monstruos","Guerreros"],
            botonAgregar: "+",
            botonQuitar: "-"
        },

        {
            id: 8,
            nombre: "Abominación Vil",
            precio: 11.99,
            imagen: "img/demo1.jpg",
            info:"Criatura sin consciencia, poderosa y leal aliada. Seguirá a quien considere su líder.",
            categoria: ["Monstruos","Demonios"],
            botonAgregar: "+",
            botonQuitar: "-"
        },

        {
            id: 9,
            nombre: "Guerrero Abismal",
            precio: 20.99,
            imagen: "img/war1.jpg",
            info:"Guerrero mejorado con magia vil. Elite de soldados para enfrentarse a criaturas en el Abismo.",
            categoria: ["Monstruos","Guerreros"],
            botonAgregar: "+",
            botonQuitar: "-"
        },
    ];
const divisa = '€';

// #endregion PRODUCTOS

//  #region HEADER
    ///// Informacion del header //////
    // Defino objetos para almacenar la info del header
    const infoTienda = {

            logo: "img/logotienda.jpg",
            nombre: "TortuJuega",
            alumno: "David Ruiz"       
    };


    // Hago una funcion para actualizar dinamicamente el contenido del header
    const crearElementosHeader = () => {
        // Selecciono el header
        const DOMHeader = document.querySelector('.header');
        
        // Hacemos la imagen, creamos p y el img con su source
        const logoTiendaP = document.createElement('p');
        logoTiendaP.classList.add('logo');
        const logoTiendaImg = document.createElement('img');
        logoTiendaImg.src = 'img/logotienda.jpg';
        logoTiendaP.appendChild(logoTiendaImg);
        DOMHeader.appendChild(logoTiendaP);

        // Creamos los elementos <p> para el nombre de la tienda y el nombre del alumno
        const nombreTienda = document.createElement('p');
        nombreTienda.id = 'nombreTienda';
        DOMHeader.appendChild(nombreTienda);

        const nombreAlumno = document.createElement('p');
        nombreAlumno.id = 'nombreAlumno';
        DOMHeader.appendChild(nombreAlumno);
    }

    // Llamamos a la función para crear los elementos del header
    crearElementosHeader();

    // Funcion que va a actualizar dinamicamente el contenido que esta dentro del header
    const actualizarHeader = () => {
        const nombreTienda = document.getElementById('nombreTienda');
        const nombreAlumno = document.getElementById('nombreAlumno');
        const logoTiendaImg = document.querySelector('.logo img');

        logoTiendaImg.src = infoTienda.logo;
        nombreTienda.textContent = infoTienda.nombre;
        nombreAlumno.textContent = infoTienda.alumno;
    }

    // Y ahora llamamos a la funcion para actualizar los datos
    actualizarHeader();

   
// #endregion HEADER

// #region NAV
 ////// Menu de filtrado //////
const DOMNav = document.querySelector('.nav');
const DIVLinks = document.createElement('div');
const aUrl = document.createElement('a');
    aUrl.textContent = "Urlon";
    aUrl.dataset.categoria = "Urlon";

const aElfo = document.createElement('a');
    aElfo.textContent = "Elfos";
    aElfo.dataset.categoria = "Elfos";

const aMons = document.createElement('a');
    aMons.textContent = "Monstruos";
    aMons.dataset.categoria = "Monstruos";

const aWar = document.createElement('a');
    aWar.textContent = "Guerreros";
    aWar.dataset.categoria = "Guerreros"
const aTodos = document.createElement('a');
    aTodos.textContent = "Todos";
    aTodos.dataset.categoria ="Todos";

const DIVLg = document.createElement('div');

const aLogin = document.createElement('a');
aLogin.textContent = "Iniciar sesion";
aLogin.href = "Formulario.html";
DIVLg.append(aLogin);

function filtrarProductosCategoria(categoriaBuscada) {
    const productosFiltrados = productos.filter(producto => producto.categoria.includes(categoriaBuscada));
    return productosFiltrados;
   }

function mostrarProductosCategoria(evento) {
    
    const categoriaSeleccionada = evento.target.dataset.categoria;
    const  productosFiltrados = filtrarProductosCategoria(categoriaSeleccionada);
    const DOMSection = document.querySelector('.productos');
    DOMSection.innerHTML = '';

    productosFiltrados.forEach(producto => {

           const DOMArticle = document.createElement('article');
           DOMArticle.classList.add("producto");
           DOMArticle.dataset.id = producto.id;

           const DOMimg = document.createElement('img');
            DOMimg.src = producto.imagen;

           const DOMh3 = document.createElement('p');
            DOMh3.classList.add("nombre");
            DOMh3.textContent = producto.nombre;

           const DOMp = document.createElement('p');
            DOMp.classList.add("precio");
            
            DOMp.textContent = producto.precio + "€";

           const DIVBotones = document.createElement('div');
             const botonA = document.createElement('button');
             botonA.classList.add('btn-anadir');
             botonA.textContent = '+';
             botonA.addEventListener("click", botonAnyadirProductos);
             DIVBotones.appendChild(botonA);
             
             const botonQ = document.createElement('button');
             botonQ.classList.add('btn-quitar');
             botonQ.textContent = '-';
             botonQ.addEventListener("click", borrarItemCarrito);
             DIVBotones.appendChild(botonQ);

            const DOMInfo = document.createElement('p');
             DOMInfo.classList.add('descripcion');
             DOMInfo.textContent = producto.info;

           DOMArticle.appendChild(DOMimg);
           DOMArticle.appendChild(DOMh3);
           DOMArticle.appendChild(DOMInfo);
           DOMArticle.appendChild(DOMp);
           DOMArticle.appendChild(DIVBotones);     
          
           DOMSection.appendChild(DOMArticle);
        });
}
DIVLg.setAttribute("id", "logg");
aUrl.addEventListener("click",mostrarProductosCategoria);
aElfo.addEventListener("click", mostrarProductosCategoria);
aMons.addEventListener("click", mostrarProductosCategoria);
aWar.addEventListener("click", mostrarProductosCategoria);
aTodos.addEventListener("click", function () {
    const DOMSection = document.querySelector('.productos');
    DOMSection.innerHTML = '';
    renderizarProductos();
});

DIVLinks.appendChild(aUrl);
DIVLinks.appendChild(aElfo);
DIVLinks.appendChild(aMons);
DIVLinks.appendChild(aWar);
DIVLinks.appendChild(aTodos);
DOMNav.appendChild(DIVLinks);
DOMNav.append(DIVLg);

// #endregion NAV

// #region MAIN 
    const DOMMain = document.querySelector('.main'); 
    const div = document.createElement("div");
    const section = document.createElement('section');
    section.classList.add('productos');

    function renderizarProductos () {
    productos.forEach(producto => {
        // Creamos el article, su clase y lo añadimos al section
        const article = document.createElement('article');
            article.classList.add('producto');
            article.dataset.id = producto.id;
            section.appendChild(article);

            // Creamos imagen con su src y su contenido y lo añadimos al article
            const img = document.createElement('img');
                img.src = producto.imagen;
                img.alt = producto.nombre;
            article.appendChild(img);
            // Creamos h3 con su class y su contenido y lo añadimos al article
            const h3 = document.createElement('h3');
                h3.classList.add('nombre');
                h3.textContent = producto.nombre;
            article.appendChild(h3);
            // Creamos el p  precio con su class y su contenido y lo añadimos
            const precio = document.createElement('p');
                precio.classList.add('precio');
                precio.textContent = producto.precio + "€";
            article.appendChild(precio);
            // Creamos el button con su class y su contenido  y lo añadimos
            const botonA = document.createElement('button');
                botonA.classList.add('btn-anadir')
                botonA.textContent = producto.botonAgregar;
                botonA.addEventListener("click",  botonAnyadirProductos)

            const botonQ = document.createElement('button');
                botonQ.classList.add('btn-quitar')
                botonQ.textContent = producto.botonQuitar;
                botonQ.addEventListener("click",borrarItemCarrito);

            // Creamos un div para contener los botones y les asignamos la clase "botones"
            const divBotones = document.createElement('div');
            divBotones.classList.add('botones');
            divBotones.appendChild(botonA);
            divBotones.appendChild(botonQ);
            article.appendChild(divBotones);

            // Creamos el p descripcion con su class y su contenido y lo añadimos
            const descripcion = document.createElement('p');
                descripcion.classList.add('descripcion');
                descripcion.textContent = producto.info;
            article.appendChild(descripcion);
        }
        // FIN DEL FOREACH
    )}


    div.appendChild(section);

    DOMMain.appendChild(div);
// #endregion MAIN

 // #region ASIDE
    // Creamos el array carrito
    let carrito = [];
    // Vamos a seleccionar el contenedor del aside para mostrar los productos.
    const DOMCarrito = document.querySelector('.productosCarrito');
    const DOMTotal = document.querySelector('.total');
    const DOMAside = document.querySelector('.carrito');
    const DIVVaciar = document.createElement('div');
        DIVVaciar.classList.add('vaciar');
    const pTotal = document.createElement('p');
    

    if (carrito.length === 0) {
     const vacio = document.createElement('h5');
     vacio.textContent = "Aún no has añadido ningún producto...";
     vacio.style.textAlign = "center";
     DOMCarrito.appendChild(vacio);
     DOMCarrito.style.padding = '5px';
     pTotal.innerHTML= `Total: 0.00€`;
    }
    ///////// Crear boton vaciar todo
    const botonVaciar = document.createElement('button');
        botonVaciar.textContent = "Vaciar";
        botonVaciar.classList.add('vaciarCarro');
    botonVaciar.addEventListener("click", function() {
        carrito = [];
        let precioTotal = calcularTotal();
        pTotal.innerHTML= `Total: ${precioTotal}${divisa}`;
        renderizarCarrito();
    });
    DIVVaciar.appendChild(botonVaciar);
    DOMAside.appendChild(DIVVaciar);
    //////////
        function renderizarCarrito() {
            DOMCarrito.innerHTML = ''; 
            const carritoSinDuplicados = new Set(carrito);
            if (carrito.length === 0) {
                const vacio = document.createElement('h5');
                vacio.textContent = "Aún no has añadido ningún producto...";
                vacio.style.textAlign = "center";
                DOMCarrito.appendChild(vacio);
                pTotal.innerHTML= `Total: 0.00€`;
            } else {
            carritoSinDuplicados.forEach(idProducto => {
    
                const producto = obtenerProducto(idProducto);
                console.log("producto: " , producto);
            
                const numUnidadesProducto = getNumUnidades(idProducto);
                console.log("numUnidadesProductos: ", numUnidadesProducto);
        
                const miDiv = document.createElement('div');
                    miDiv.classList.add('productoCarrito');
                    miDiv.textContent = `${numUnidadesProducto} X ${producto.nombre} - ${producto.precio}${divisa}`;

                const miImagen = document.createElement('img');
                    miImagen.src = `${producto.imagen}`;
                    miDiv.insertBefore(miImagen, miDiv.firstChild);

                // Boton quitar del carrito
                const miBotonX = document.createElement('button');
                miBotonX.classList.add('btn-quitar');
        
                    miBotonX.dataset.idProducto = producto.id;
                    miBotonX.style.marginLeft = '1 rem';
                    miBotonX.textContent = 'X';
                    miBotonX.addEventListener("click", borrarTiposCarrito);
                
                // miDiv.append(miBotonA);
                miDiv.append(miBotonX);
                    DOMCarrito.append(miDiv);
                    let precioTotal = calcularTotal();
                    pTotal.innerHTML= `Total: ${precioTotal}${divisa}`;
            });
        }
            guardarCarritoEnLocalStorage()
        } 

        // FUNCION PARA SACAR LAS UNIDADES DEL PRODUCTO
        const getNumUnidades = (id) => {
            const cantidad = carrito.filter(idProducto => idProducto == id).length;
            return cantidad;
        };
        // SACAMOS EL PRODUCTO POR SU ID
        const obtenerProducto = (id) => {
            return productos.find(producto => producto.id == id);
        };

        // Sacar dinero total
        function calcularTotal() {  
            let total = 0;
            let objetoProducto
            for (const id of carrito) {
                objetoProducto = obtenerProducto(id);
                
                total += objetoProducto.precio;
            }
            return total.toFixed(2);
        };
        
    
        
        DOMTotal.appendChild(pTotal);
        // Boton para AÑADIR PRODUCTOS del main al CARRITO y mostrarlos
        const botonesA = document.querySelectorAll('.btn-anadir');
        const botonesQ = document.querySelectorAll('.btn-quitar');
        // Añadir
        function botonAnyadirProductos (evento)  {
            // seleccionar el padre mas cercano del event
            const idProducto = evento.target.dataset.idProducto || evento.target.closest('.producto').dataset.id  ;
            // Lo metes en el carrito
            carrito.push(idProducto);
            renderizarCarrito();
        };
        // Borrar objetos del carrito uno por uno
        const borrarItemCarrito = (evento) => {
            const idProducto = evento.target.dataset.idProducto || evento.target.closest('.producto').dataset.id;
            console.log("El id del producto borrado " , idProducto);
            const producto = obtenerProducto(idProducto);
            const index = carrito.indexOf(idProducto);
            if (index !== -1) {
                carrito.splice(index,1);

            }
            renderizarCarrito();
            precioTotal = calcularTotal();
            pTotal.innerHTML= `Total: ${precioTotal}${divisa}`;
        };
        
        // Borrar objetos por tipo
        const borrarTiposCarrito = (evento) =>  {
            const idProducto = evento.target.dataset.idProducto;
            carrito = carrito.filter(id => id !== idProducto);
           renderizarCarrito();
            let precioTotal = calcularTotal();
           
        }
    botonesQ.forEach(boton => {
        boton.addEventListener('click', borrarItemCarrito);
    })
        // EVENTO PARA AÑADIR PRODUCTOS AL CARRITO 
    botonesA.forEach( boton => {
        boton.addEventListener('click',botonAnyadirProductos);
        }); 
        
 
// #endregion ASIDE

// #region FOOTER


    const DOMFooter = document.querySelector('.footer');

       const imagenDiv = document.createElement('div');
        imagenDiv.classList.add('imagen');
        const imagenImg = document.createElement('img');
        imagenImg.src = "img/ftImg.jpg";
        imagenImg.alt = "Urlon cientifico";

        imagenDiv.appendChild(imagenImg);

        const preguntasDiv = document.createElement('div');
        preguntasDiv.classList.add('preguntas');

            const preguntasH3 = document.createElement('h3');
                preguntasH3.textContent = "Preguntas frecuentes";
            const preguntasA = document.createElement('a');
                preguntasA.href = "PreguntasFrecuentes.html";
                preguntasA.textContent = "Haz clic aquí para ver las preguntas frecuentes";
            preguntasDiv.appendChild(preguntasH3);
            preguntasDiv.appendChild(preguntasA);


            const sitios = [
                {
                    enlace: "http://www.youtube.com",
                    imagen: "img/logoYt.png",
                    descripcion: "Logo de YouTube"
    
                }, 
                {
                    enlace: "http://www.Instagram.com",
                    imagen: "img/logoInsta.png",
                    descripcion: "Logo de Instagram"
                }
            ];
            
        const enlacesDiv = document.createElement('div');
        enlacesDiv.classList.add('enlaces');

            const enlacesH3 = document.createElement('h3');
            enlacesH3.textContent = "Conecta con nosotros";
            
            enlacesDiv.appendChild(enlacesH3);

          sitios.forEach(sitio => {
                    const sitioA = document.createElement('a');
                    const sitioImg = document.createElement('img');

                    sitioA.href = sitio.enlace;
                    sitioImg.src = sitio.imagen;
                    sitioImg.alt = sitio.descripcion;

                    sitioA.appendChild(sitioImg);
                    enlacesDiv.appendChild(sitioA);
                });
    
    DOMFooter.appendChild(imagenDiv);
    DOMFooter.appendChild(preguntasDiv);
    DOMFooter.appendChild(enlacesDiv);
//#endregion FOOTER

//////////////////////////////////////////////////////////////////////// LocalStorage

    function guardarCarritoEnLocalStorage() {
        window.localStorage.setItem("carritoTienda",JSON.stringify(carrito));
    }
    
    
    function cargarCarritoEnLocalStorage() {
       if (window.localStorage.getItem("carritoTienda")) {
        carrito = JSON.parse(window.localStorage.getItem("carritoTienda"));
       }
       renderizarCarrito();
    }
  
   
   window.addEventListener("load", cargarCarritoEnLocalStorage);
   window.addEventListener("load",renderizarProductos);
   window.addEventListener('load',renderizarCarrito);


