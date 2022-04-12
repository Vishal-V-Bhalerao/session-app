import { createContext } from "react";

const speakerContext = createContext()
function SpeakerContextProvider({ speaker, updateRecord, deleteRecord, children }) {
    return (
        <speakerContext.Provider
            value={{
                speaker, updateRecord, deleteRecord
            }}
        >
            {children}
        </speakerContext.Provider>
    )
}

export { speakerContext, SpeakerContextProvider }