import React from 'react';
import AddButton from './AddButton';

const CartItem = ({ data }) => {
    if (!data && !data.item && !data.count) {
        return null;
    }

    return (
        <div className="w-full p-4 grid grid-cols-12 border-b-2 border-b-zinc-400 gap-4">
            <img
                className="w-full aspect-square col-span-4 lg:col-span-3"
                src={data.item.thumbnail}
                alt={data.item.title}
            />
            <div className="content flex item-start gap-4 flex-col w-full col-span-8 lg:col-span-9">
                <h4 className="font-semibold line-clamp-1 text-2xl">
                    {data.item.title}
                </h4>
                <p className="line-clamp-2">{data.item.description}</p>
                <AddButton data={data.item} />

                <p className="mt-4 ml-auto text-xl font-semibold">
                    total: ${data.count * data.item.price}
                </p>
            </div>
        </div>
    );
};

export default CartItem;
