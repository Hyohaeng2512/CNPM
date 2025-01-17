// import './style.css';
// import Header from '../Header/Header';
// import Aside from '../Aside/Aside'

// function ItemProd() {
//     return (
//         <>  
//             <Header/>
//             <Aside/>
//             <div className="w-1/5">
//                 <a href="/" className='item-product'>
//                     <div className="item-product-img"></div>
//                     <div className="name-rate-sold">
//                         <h3 className="item-product-name">Product Name</h3>
//                         <div className="rate-and-sold flex justify-start items-baseline">
//                             <div className="item-product-rating">
//                                 <i className="star-gold fa-solid fa-star"></i>
//                                 <i className="star-gold fa-solid fa-star"></i>
//                                 <i className="star-gold fa-solid fa-star"></i>
//                                 <i className="star-gold fa-solid fa-star"></i>
//                                 <i className="star-gold fa-solid fa-star"></i>
//                             </div>
//                             <div className="item-product-sold">Đã bán 20</div>
//                         </div>
//                     </div>
//                     <div className="item-product-price">
//                         <span className="item-product-price-current">499,000đ</span>
//                         <span className="item-product-price-discount">-28%</span>
//                         {/* <strike className="item-product-price-old">699,000đ</strike> */}
//                     </div>
//                     <div className="item-product-delivery text-center mt-6 mb-3">Giao siêu tốc 2h</div>
//                 </a>
//             </div>
//         </>
//     )
// }

// export default ItemProd

import './style.css';

function ProductItem({ product }) {
    const { name, rating_average, list_price, delivery } = product;
    const base_url = product.images[0]?.base_url; // Truy cập vào base_url trong object con images[0]
    const quantitySoldText = product.quantity_sold?.text
    const name_categorie = product.categories?.name
    const discount = Math.floor(Math.random() * 100) + 1
    const link = product.current_seller.link

    return (
        <>
            <div className="">
                <a href={`/${product.id}`} className='item-product p-1'>
                    <div className="item-product-img" style={{backgroundImage: `url(${base_url})`}}></div>
                    <div className="name-rate-sold">
                        <h3 className="item-product-name">{name}</h3>
                        <div className="rate-and-sold flex justify-start items-baseline">
                            <div className="item-product-rating">
                                {[...Array(5).keys()].map(index => (
                                    <i key={index} className={`fa-solid fa-star ${index < rating_average ? 'star-gold' : 'star-gray'}`}></i>
                                ))}
                                <i className="star-gold fa-solid fa-star"></i>
                                <i className="star-gold fa-solid fa-star"></i>
                                <i className="star-gold fa-solid fa-star"></i>
                                <i className="star-gold fa-solid fa-star"></i>
                                <i className="star-gold fa-solid fa-star"></i>
                                {[...Array(rating).keys()].map((_, index) => (
                                    <i key={index} className="star-gold fa-solid fa-star"></i>
                                ))}
                            </div>
                            <div className="item-product-sold">{quantitySoldText}</div>
                        </div>
                    </div>
                    <div className="item-product-price py-2 mt-2">
                        <span className="item-product-price-current">{list_price}<sup>đ</sup></span>
                        <span className="item-product-price-discount">-{discount}%</span>
                    </div>
                    {/* <div className="item-product-delivery text-center mt-6 pt-2">{delivery}</div> */}
                    <div className="item-product-categories text-center mt-6 pt-2">{name_categorie}</div>
                </a>
            </div>
        </>
    )
}

export default ProductItem;
