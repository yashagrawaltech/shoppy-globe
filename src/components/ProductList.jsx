import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productData = [] }) => {
    return (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
            {productData && productData.length
                ? productData.map((p) => {
                      return <ProductCard key={p.id} data={p} />;
                  })
                : null}
        </div>
    );
};

export default ProductList;
