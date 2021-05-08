# HOW TO START

npx create-react-app ./ --template typescript

# GIT SETUP 
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/abhishekchaturvedi-07/react-redux-typescript.git
git push -u origin main

# Typescript Basic Standards
All the JSX file(contains JSX) should be renamed to ".tsx" and work like that
If the file doesnt have any JSX, rename it to ".ts", like redux/ reducer

# Basic Live Programme
- Remove every single file under "/src"
import ReactDOM from 'react-dom'
- Create index.tsx
const App = () => {
    return (
        <div>
            <h1>
                Hi There!
            </h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
- And thats it!

## Using TS with react is great, BUT not a lot of stuff is going to change!
-Applying types to components props
-Applying types to states in a component
-Types with event handler

# Named Export Vs Default Export 
{} -> use under this while importing is Named Export
without this directly call a component is Default Export

# Big change when using TS with React
Will be on Props - Whenever we need to call props inside chile  we have to define the "INTERFACE"
* TS will be take care of few points when added in child with interface:
-Are we providing the correct props to the Child component when we call it from Parent?
-Are we using the correctly named + types props in Child?
EX:- src/examples/ Parent.tsx and Child.tsx

# Downside: TS doesnt understand that we are defining a react component 
:FOR this, you can use:
 # React.FC<Props>
 Refer Example of Parent and Child
 Benefit of using this is that you can have children inside opening and closing tag without any error from TS
 *{children}* - Upside to using this approach

# STATE WITH TS
examples/state
-create state
-search from state

# TYPES AROUND EVENTS AND REFS