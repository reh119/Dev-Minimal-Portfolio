import React from "react";

// components have to be capital
// passing in paramters from
function PortfolioItem({ title, imageUrl, stack, link }) {
    return (
        <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
        <div>
            <img
                src={imageUrl}
                alt='portfolio'
                className='w-full h-36 md:h-48 object-cover cursor-pointer' // styling for image only. width full , height 36, medium threshold height will be 48, cursor turns into pointer when hovering
            />
            <div className='w-full p-4'> {/* width full, padding 4*/ }
            <h3 className = 'text-lg md:text-xl mb-2 md:mb-3 font-semibold'> {title}</h3> {/* Title of projecct */}
            <p className = 'flex flex-wrap gap-2 flex-row items-center justify-start text-cs md:'>
                {stack.map(item => ( // arrow function
                <span className = 'inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
                    {item} {/* Iterate*/}
                </span>
                ))}
            </p>
             </div>
        </div >
        </div>
    );
}

export default PortfolioItem;