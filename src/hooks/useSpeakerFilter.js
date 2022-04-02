import { useState } from "react";

export function useSpeakerFilter(initialSessionState, initialEventYear) {

    const [showSession, setShowSession] = useState(initialSessionState)
    const [eventYear, setEventYear] = useState(initialEventYear)
    const [searchText, setSearchText] = useState('')

    const EVENT_YEAR = [
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
    ]

    return {
        showSession,
        setShowSession,
        eventYear,
        setEventYear,
        searchText,
        setSearchText,
        EVENT_YEAR
    }
}