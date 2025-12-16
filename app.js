//empezamos con el carge de los archivos

fetch("/recursos/productos.json")
    .then(response => response.json())
    .then(productos => {
        const container = document.getElementById("productos-container");

        productos.forEach(producto => {
            //Crea un div para la card
            const card = document.createElement("div");
            card.classList.add("article-card");

            //creamos la imagen
            const img = document.createElement("img");
            img.classList.add("article-img");
            img.src = producto.imagen;
            img.alt = producto.nombre;
            
            //creamos el h1 para el nombre en la card
            const name = document.createElement("h1");
            name.classList.add("article-name");
            name.textContent = producto.nombre;

            //creamos el h2 para el precio
            const price = document.createElement("h2");
            price.classList.add("article-price");
            price.textContent = `$${producto.precio.toLocaleString("es-CO")}`;

            //creamos el boton de ver detalles
            const btn = document.createElement("button");
            btn.classList.add("article-btn");
            btn.textContent = "Ver Gafas";


            //ahora insertamos todos los elementos en la card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(btn);

            //teniendo la card, la creamos en el container
            container.appendChild(card);

        });
    })
    .catch(error => console.error("error cargando los productos", error));