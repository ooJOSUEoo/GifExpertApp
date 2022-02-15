
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     //setcategories(['Hunter x Hunter',...categories]);
    //     setcategories(cats => [...cats, 'Hunter x Hunter']);
    // }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory setcategories={setcategories} />
        <hr/>

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
