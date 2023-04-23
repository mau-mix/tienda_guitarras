import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import styles from '../styles/Carrito.module.css'
import Image from "next/image"


const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
   
    
     const [ total, setTotal ] = useState(0)   

useEffect(() => {
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio ), 0 )
    
    setTotal( calculoTotal )
 
},[carrito])

     
  return (
    <Layout
          pagina={"Carrito de Compras"}
    >
        <h1 className="heading">Carrito</h1>
        <main className={`${ styles.contenido} contenedor`}>
            <div className={ styles.carrito }>
                <h2>Articulos</h2>
                  { carrito.length < 0 ? "Carrito Vacio " : (
                      carrito.map( producto => (
                          <div key={ producto.id} className={ styles.producto }>
                               <div>
                                    <Image  height={580} width={250} layout="responsive"
                                     src={producto.imagen} alt={ producto.nombre } />
                               </div>
                               <div>
                                  <p className={ styles.nombre }>{ producto.nombre }</p>
                                  <p className={ styles.precio }>$ { producto.precio }</p>
                                          
                                    <div className={ styles.cantidad }>
                                                                             
                                           <p >Cantidad: </p>                                                                             
                                                                                                                          
                                          <select
                                                value={ producto.cantidad }
                                                className={ styles.select}
                                                onChange={ e => actualizarCantidad({
                                                    cantidad: e.target.value,
                                                    id: producto.id
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                     </div>
                                                                          
                                     <p className={ styles.subtotal }>Subtotal: <span>{ producto.precio * producto.cantidad }</span></p>
                               </div>
                               <button
                                     type="button"
                                     onClick={() => eliminarProducto(producto.id)}
                                     className={ styles.eliminar}
                               >x</button>
                          </div>
                      ))
                  )}
            </div>
            <div className={ styles.resumen }>
                <h2>Resumen del Pedido</h2>
                
                { total > 0 ? (
                    <>
                       <p>Resumen del Pedido</p>
                       <p>Total a Pagar: { total }</p>
                    </>
               ) : <p>No hay Productos el el Carrito</p>}
            </div>

        </main>
    </Layout>
  )
}

export default Carrito