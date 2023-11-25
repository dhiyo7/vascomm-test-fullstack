'use client'
import React from 'react'

import Image from 'next/image'

const ProductCard = ({name, imageSrc, price}) => {

    const formatCurr = (price) => {
        const idr = new Intl.NumberFormat('id-ID', {
            currency: 'IDR',
            useGrouping: true,
        });

        return idr.format(price);
    }

    return (
        <div className="flex flex-col w-full p-4 hover:shadow-lg hover:border cursor-pointer inset-0">
            <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                <Image
                    width={100}
                    height={192}
                    alt={name}
                    src={imageSrc}
                    style={{
                        objectFit: 'contain',
                    }}
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${imageSrc}&w=16&q=1`}
                />
            </div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="font-semibold text-lg text-blue-600">
                IDR {formatCurr(price)}
            </div>
        </div>
    );
};

export default ProductCard;
