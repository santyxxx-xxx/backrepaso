import { useState } from "react";

function Productos() {

    const [productos, setProductos] = useState([]);

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");

    function agregarProducto(){

        const nuevoProducto = {
            id: Date.now(),
            nombre: nombre,
            precio: precio
        };

        setProductos([...productos, nuevoProducto]);

        setNombre("");
        setPrecio("");

    }

    function eliminarProducto(id){

        const nuevosProductos = productos.filter(
            producto => producto.id !== id
        );

        setProductos(nuevosProductos);

    }

    return(

        <div>

            <h1>CRUD Productos</h1>

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e)=>setPrecio(e.target.value)}
            />

            <br /><br />

            <button onClick={agregarProducto}>
                Agregar
            </button>

            <hr />

            {productos.map((producto)=>(

                <div key={producto.id}>

                    <h3>{producto.nombre}</h3>

                    <p>${producto.precio}</p>

                    <button onClick={()=>eliminarProducto(producto.id)}>
                        Eliminar
                    </button>

                    <hr />

                </div>

            ))}

        </div>

    );

}

export default Productos;
