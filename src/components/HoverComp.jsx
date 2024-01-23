import React, { useState } from 'react'

export const HoverComp = ({text, icon}) => {

   const [hover, setHover] = useState(false);

  const manejarMouseEnter = () => {
    setHover(true);
  };

  const manejarMouseLeave = () => {
    setHover(false);
  };
  
  return (
    <>
      <div className='iconoContainer' onMouseEnter={manejarMouseEnter} onMouseLeave={manejarMouseLeave}>
         {icon}
         {hover && (
           <div className='cuadroDeTexto bg-gray-800 text-black transition-transform duration-600'>
             {text}
           </div>
         )}
      </div>
    </>
  )
}
