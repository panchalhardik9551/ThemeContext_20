import React, { createContext, useState } from 'react'

export const managetheme = createContext()

export default function ThemeContextProvider(props) {

    const [theme, setTheme] = useState("light")
    const changetheme = (theme) => {
        return setTheme(theme)
    }

    return (
        <>
            <managetheme.Provider value={{ theme, changetheme }}>
                {props.children}
            </managetheme.Provider>
        </>
    )
}
