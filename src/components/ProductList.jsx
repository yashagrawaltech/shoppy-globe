import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productData = [] }) => {
    return (
        <div className="w-full grid grid-cols-5 gap-4">
            {productData && productData.length
                ? productData.map((p) => {
                      return <ProductCard key={p.id} data={p} />;
                  })
                : null}
        </div>
    );
};

export default ProductList;
