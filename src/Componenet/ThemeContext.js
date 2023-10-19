import React, { useContext } from 'react'
import { managetheme } from './ThemeContextProvider'

export default function ThemeContext() {

    const { theme, changetheme } = useContext(managetheme);
    return (
        <>
            <div className='container'>
                <h1>Mode</h1>
                <div>
                    <button className='btn btn-outline-info' onClick={()=>changetheme("black")}>Black</button>
                    <button className='btn btn-outline-dark' onClick={()=>changetheme("red")}>Red</button>
                    <button className='btn btn-outline-dark' onClick={()=>changetheme("blue")}>Blue</button>
                    <button className='btn btn-outline-dark' onClick={()=>changetheme("yellow")}>Yellow</button>
                </div>
            </div>
        </>
    )
}
