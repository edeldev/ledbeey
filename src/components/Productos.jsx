import Image from "next/image"
import './Productos.css'
import { collectionLedbeey, collectionEdelDev, collectionNft } from "@/data/productos"

export function renderProductSection(collection) {
    return (
      <div className="row justify-content-center align-items-center">
        {collection.map((item, index) => (
          <div className="col-6 col-md-4 flex1__col" key={index}>
            <div className="galeria__card">
              <div className="galeria p-3 text-center">
                <a href="https://etsy.com" target="_blank">
                  <Image src={item.imagen} alt={`imagen-${item.titulo}`} className='img-fluid' placeholder="blur" />
                </a>
                <h4 className='pt-3 m-0' title={item.titulo}>{item.titulo}</h4>
                <p className='fw-bold my-3 parrafos__font' dangerouslySetInnerHTML={{ __html: item.parrafo }}></p>
                <p className="envio px-4 py-1 rounded">+ Envio Gratis</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default function Productos() {
    return (
      <section className="productos__bg">
          <div className="container-xl py-4 text-white">
            <h2 className='py-4 ps-3 m-0' id="ledbeey">Colección Ledbeey</h2>
            {renderProductSection(collectionLedbeey)}
      
            <h2 className='py-4 ps-3 m-0' id="edeldev">Colección EdelDev</h2>
            {renderProductSection(collectionEdelDev)}
      
            <h2 className='py-4 ps-3 m-0' id="nft">Colección Nfts</h2>
            {renderProductSection(collectionNft)}
          </div>
        </section>
    );
  }