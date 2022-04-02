import { createContext } from "react"
import { useSpeakerFilter } from "../hooks/useSpeakerFilter"
export const speakerFilterContext = createContext()
export function SpeakerFilterProvider({ initialSessionState, initialEventYear, children }) {
    const {
        showSession,
        setShowSession,
        eventYear,
        setEventYear,
        searchText,
        setSearchText,
        EVENT_YEAR
    } = useSpeakerFilter(initialSessionState, initialEventYear)
    return (
        <speakerFilterContext.Provider value={
            {
                showSession,
                setShowSession,
                eventYear,
                setEventYear,
                searchText,
                setSearchText,
                EVENT_YEAR
            }
        }>
            {children}
        </speakerFilterContext.Provider>
    )
}