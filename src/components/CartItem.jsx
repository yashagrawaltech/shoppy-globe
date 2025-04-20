import React from 'react';
import AddButton from './AddButton';

const CartItem = ({ data }) => {
    if (!data && !data.item && !data.count) {
        return null;
    }

    return (
        <div className="w-full p-4 flex items-start border-b-2 border-b-zinc-400 gap-4">
            <img
                className="h-full aspect-square"
                src={data.item.thumbnail}
                alt={data.item.title}
            />
            <div className="content flex item-start gap-4 flex-col w-full">
                <h4 className="font-semibold line-clamp-1 text-2xl">
                    {data.item.title}
                </h4>
                <p className="line-clamp-2">{data.item.description}</p>
                <AddButton data={data.item} />

                <p className="mt-4 ml-auto text-xl font-semibold">
                    totle: ${data.count * data.item.price}
                </p>
            </div>
        </div>
    );
};

export default CartItem;
