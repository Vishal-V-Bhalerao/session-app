import { createContext } from "react";

const speakerContext = createContext()
function SpeakerContextProvider({ speaker, updateRecord, children }) {
    return (
        <speakerContext.Provider
            value={{
                speaker, updateRecord
            }}
        >
            {children}
        </speakerContext.Provider>
    )
}

export { speakerContext, SpeakerContextProvider }