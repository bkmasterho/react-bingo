import { createContext, useState } from "react";

const BingoContext = createContext();

const BingoProvider = ({children}) => {

  const [ modal, setModal ] = useState(false);

  return (
        <BingoContext.Provider
            value={{
                hola:'hola'
            }}
        >{children}</BingoContext.Provider>
  )
}

export {
  BingoProvider
}

export default BingoContext