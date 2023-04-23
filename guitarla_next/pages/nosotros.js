import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
              pagina="nosotros"
        >
            <main className='contenedor'>
                 <h2 className='heading'>Nosotros</h2>

                 <div className={styles.contenido}>
                      <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='imagen nosotros'/>

                     <div>
                         <p>
                            Donec eu erat eget massa semper interdum 
                            id sit amet magna. Donec ornare suscipit 
                            varius. Donec dictum aliquet turpis a convallis.
                            Curabitur mollis a nibh id condimentum.
                            Maecenas fermentum, erat quis posuere sodales,
                            diam nulla rhoncus nisi, ut euismod nisi lacus
                            vel libero. Mauris accumsan, nunc in porta gravida,
                            diam urna faucibus odio, sit amet semper
                            arcu neque a quam. Sed elementum tincidunt eros,
                            eu varius lacus convallis sit amet. Nunc sollicitudin 
                            velit nec metus laoreet dignissim.
                         </p>
                         <p>
                            Donec eu erat eget massa semper interdum 
                            id sit amet magna. Donec ornare suscipit 
                            varius. Donec dictum aliquet turpis a convallis.
                            Curabitur mollis a nibh id condimentum.
                            Maecenas fermentum, erat quis posuere sodales,
                            diam nulla rhoncus nisi, ut euismod nisi lacus
                            vel libero. Mauris accumsan, nunc in porta gravida,
                            diam urna faucibus odio, sit amet semper
                            arcu neque a quam. Sed elementum tincidunt eros,
                            eu varius lacus convallis sit amet. Nunc sollicitudin 
                            velit nec metus laoreet dignissim.
                         </p>
                     </div>
                 </div>
            </main>
                      
        </Layout>
    )
}

export default Nosotros
