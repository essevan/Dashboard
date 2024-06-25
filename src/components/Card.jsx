import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="bg-gradient-to-br from-[#03102E] to-[#092157] p-6 rounded-lg shadow-lg max-w-xs mx-auto relative border-2 mb-4"
            style={{
                borderImageSource: 'linear-gradient(152.64deg, #FFFFFF 0%, #0A1D49 101.75%)',
                borderImageSlice: 1,
                borderRadius: '0.75rem',  // Adjusted to rounded-lg (0.75rem)
                boxShadow: '0px 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }}>
            <div className="absolute inset-0 rounded-lg"
                style={{
                    borderRadius: '0.75rem',  // Ensuring inner shadow has border radius
                    boxShadow: 'inset 15px 30px 63px 0 rgba(12, 35, 87, 1)'
                }}>
            </div>
            <div className="relative flex flex-col items-center">
                <div className="bg-[#10275C] p-2 rounded-full mb-9 shadow-inner">
                    <img src={image} alt="Icon" className="w-8 h-8" />
                </div>
                <h2 className="text-white text-center text-xl font-semibold mb-2">{title}</h2>
                <p className="text-white text-sm mt-6 text-center">{description}</p>
            </div>
        </div>
    );
};

export default Card;
