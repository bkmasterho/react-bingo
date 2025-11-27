import { createContext, useState } from "react";

const BingoContext = createContext();

const BingoProvider = ({children}) => {

  const [ modal, setModal ] = useState(false);
  const [ cantCartones, setCantCartones ] = useState(0);

  return (
        <BingoContext.Provider
            value={{
                cantCartones,
                setCantCartones
            }}
        >{children}</BingoContext.Provider>
  )
}

export {
  BingoProvider
}

export default BingoContext