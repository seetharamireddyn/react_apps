import React from 'react';

const ProductDisplay = (data) => {

    const productInfo = data.prodData.map(product => {
        return (
            <div className="col" key={product.id}>
                <div className="card" style={{height:'350px', backgroundColor:'lightgreen'}}>
                    <img src={product.image} className="card-img-top" alt={product.name} style={{height: '150px', width: '70%', marginLeft:'10%'}} />
                    <div className ="card-body">
                    <h5 className ="card-title">{product.name}</h5>
                    <p className ="card-text">{product.description}</p>
                    <p className ="card-text"> Rs {product.cost}</p>
                    <p className ="card-text">Use: {product.uses}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {productInfo}
        </div>
    )
}

export default ProductDisplay;