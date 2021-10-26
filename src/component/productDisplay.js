import React from 'react';

const ProductDisplay = (data) => {

    const productInfo = data.productData.map(product => {
        return (
            <div class="col">
                <div class="card" style={{height:'350px', backgroundColor:'lightBlue'}}>
                    <img src={product.image} class="card-img-top" alt={product.name} style={{height: '150px', width: '70%', marginLeft:'10%'}} />
                    <div class ="card-body">
                    <h5 class ="card-title">{product.name}</h5>
                    <p class ="card-text">{product.description}</p>
                    <p class ="card-text"> Rs {product.cost}</p>
                    <p class ="card-text">Use: {product.uses}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4">
            {productInfo}
        </div>
    )
}

export default ProductDisplay;