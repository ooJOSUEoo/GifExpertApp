
import React, { useState } from 'react'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () => {
        //setcategories(['Hunter x Hunter',...categories]);
        setcategories(cats => [...cats, 'Hunter x Hunter']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <hr/>

        <button onClick={handleAdd}>Agregar</button>

        <h2>Categories</h2>
        <ol>
            {
                categories.map((category) => (
                    <li key={category}>{category}</li>
                ))
            }
        </ol>
    </>
  )
}
