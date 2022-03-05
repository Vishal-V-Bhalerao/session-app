1. if two siblings need common state instead of putting it to the root compo, create new parent compo for them and add state to it
2. keep state as close as possible to the needed component
3. create component with single responsibility

Commit number 2 -
learned: Event bubbling from child to prop
1. prop chaining
2. passing set state functions to children so they can update the state

Commit number 3 -
learned: async calling using useEffect
1. useEffect
2. use of async await and promise to mock delay in data

Commit number 4 -
learned: Handling loading and error
1. handled loading and error by creating their flag states
2. added react-placeholder lib to show loading screen

Commit number 5 -
learned: separating state related logic in speakersList component to custom hook useRequestSpeaker
1. created custom hook which is normal function which starts with 'use'and returns states and other functions
