import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'pagina pricing',
    description: 'esta es la descripcion de la pagina pricing',
    keywords:["precios", "oferta", "costos", ]
   };

export default function PricinPage(){
    return(
        <span className="text-7xl">Pricing Page </span>
        
    )
}