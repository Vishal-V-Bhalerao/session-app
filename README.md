Demo - https://vishalvb-sessionapp.netlify.app/

Application snapShots -
Light mode -
![Alt text](screenshots/lightmode.JPG.?raw=true "Title")

Dark mode -
![Alt text](screenshots/darkmode.JPG.?raw=true "Title")


Commit number 1 -
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

Commit number 6 -
learned: instead of having multiple flags for loading and error we can create single status enum like object 


Commit number 7 - updated custom hook make it generic other data
learned: removed speaker related data out of custom hook and passed down as initial state, 
1. using spread operator to smartly update the record from recordList  

Commit number 8 - spinner while favorite transaction is happening
learned:  
1. passing callback to hide spinners once favorite is toggled  

Commit number 9 - optimistic UI
learned:  
1. updating favorite star UI before the service response, if service failed revert to original state.
used spread operator to create copy of original state  
