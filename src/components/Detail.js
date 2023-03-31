import React from 'react'; 
import '../components/Detail.css';


const Detail = (props) => {
  
const { title , imgUrl ,  price } = props.item ;  

  return (
  
    <div className='single_product'>
    <div className='product_img'>
        <img src={imgUrl} alt='' className='w-100'/>
    </div>
    <div>
      <button> View </button>
    </div>
    <div className='product_content'>
        <div className='rating text-center'>
            <span><i class="ri-star-line"></i></span>
            <span><i class="ri-star-line"></i></span>
            <span><i class="ri-star-line"></i></span>
            <span><i class="ri-star-line"></i></span>
            <span><i class="ri-star-line"></i></span>
        </div>
        
        <h6>{title}</h6>

        <div className='d-flex align-item-center justify-content-between'>
         <span className='price'>  {""}Price :$
            <span className='Price d-flex'> {price}</span>
         </span>
         <span className='shopping_icon'><i class="ri-shopping-cart-fill"></i></span>
         </div>
    </div>
 </div>

  )
}

export default Detail
