import React, { useState } from 'react';
import type { Product } from '../interfaces';
export default function CardComponent(mealKit: Product) {

  const numRegex = /(^\d+)(.+$)/i;
  const [currentImg, setCurrentImg] = useState(mealKit.images[0]);

  return (
    <div className='ml-auto cursor-pointer hover:shadow-xl rounded-xl p-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-100 ' onMouseEnter={() => setCurrentImg(mealKit.images[1])} onMouseLeave={() => setCurrentImg(mealKit.images[0])}>
      <img className='rounded-lg my-3 transition ease-in-out image-transition' src={currentImg}  />
      <p className='text-sm text-grey'>
        Serves {mealKit.serves.replace(numRegex, '$1')}{' '}
        {mealKit.dishes.toLowerCase() !== '2 dishes'
          ? ' | ' + mealKit.dishes.toLowerCase()
          : null}
      </p>
      <div className='text-xl flex justify-between'>
        <h3>{mealKit.title.replace('&amp;', '&')}</h3>
        <p className='text-right'>£{mealKit.price}</p>
      </div>
      <p className='text-sm'>By {mealKit.supplierName}</p>
    </div>
  );
}
