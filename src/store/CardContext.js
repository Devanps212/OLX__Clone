import { createContext, useState } from "react";

export const CardContext = createContext(null)

export function Post({children})
{
    const[postDetails, setPostDetails] = useState()

    return(
        <CardContext.Provider value={{postDetails, setPostDetails}}>
            {children}
        </CardContext.Provider>
    )
}


