import { createContext } from "react";
// context for all speaker related data
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