//CHEKEAR DE SI YA BORRAR TODO LO QUE SON DATOS DE LOS SHOWS YA QUE ESTA TODO EN OTRA CARPETA

import React from "react" 
//import IMG from "../../assets/img/Justin_Bieber.jpg"; //ACA VA LA IMAGEN DEL show
import {Link} from "react-router-dom";
import { DataContext } from "../context/DataProviderHooks";

const ShowItem = ({key,title,image,category,price, id}) => {
    {
     const value = useContext (DataContext);
     const addCarrito = value.addCarrito;   
    }

  return(
    <div>
        <div className="show">
                 <a href="#">
                   <div className="show__img">
                     <img src={image.default} alt={title}/>
                   </div>
                  </a>
                </div>
            <div className="show__footer">
              <h1>{title} Justin Bieber</h1>
              <p> {category}+12</p>
              <p className="price">{price} $25.000</p>
          </div>
          <div className="buttom">
            <button className="btn " onClick={() => addCarrito(id)}>agregra al carrito carrito</button>
            <div>
              <a href="#" className="btn"> 20/9/22</a> 
            </div>
          </div>
          <div className="show">
                 <a href="#">
                   <div className="show__img">
                     <img src={IMG} alt=""/>
                   </div>
                  </a>
                </div>
            <div className="show__footer">
              <h1>Miley Cyrus </h1>
              <p>+12</p>
              <p className="price">$15.000 </p>
          </div>
          <div className="buttom">
            <button className="btn">CARRITO</button>
            <div>
              <a href="#" className="btn"> 30/10/22 </a> 
            </div>
          </div>

          <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Peppa Pig </h1>
        <p> +3</p>
        <p className="price">$1.200 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 12/12/22 </a> 
       </div>
         </div>
         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Peppa Pig </h1>
        <p> +3</p>
        <p className="price">$1.200 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 12/12/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Peppa Pig </h1>
        <p> +3</p>
        <p className="price">$1.200 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 12/12/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Peppa Pig </h1>
        <p> +3</p>
        <p className="price">$1.200 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 12/12/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Lali Esposito </h1>
        <p> +12</p>
        <p className="price">$3.000 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 12/09/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Nathy Peluso </h1>
        <p> +12</p>
        <p className="price">$3.500 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 8/12/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Tini </h1>
        <p> +12</p>
        <p className="price">$3.000 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 28/08/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Doja Cat</h1>
        <p> +12</p>
        <p className="price">$11.000 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 13/11/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>Arctic Monkeys </h1>
        <p> +12</p>
        <p className="price">$13.000 </p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 15/09/22 </a> 
       </div>
         </div>

         <div className="show">
        <a href="#">
          <div className="show__img">
            <img src={IMG} alt=""/>
          </div>
         </a>
       </div>
      <div className="show__footer">
        <h1>L-Gante </h1>
        <p> +12</p>
        <p className="price">$2.500</p>
     </div>
      <div className="buttom">
       <button className="btn">CARRITO</button>
        <div>
        <a href="#" className="btn"> 06/12/22 </a> 
       </div>
         </div>


    </div>
  )
}
//OJO CON EL DIV QUE ABARCA TODO, QUIZAS NO HAY QUE PONERLO
export default ShowItem