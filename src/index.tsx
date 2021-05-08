import ReactDOM from 'react-dom'
// STATE For Guest List Entry FROM TS 
import { GuestList } from './examples/state/GuestList'
// STATE For Search User
import SearchUser from './examples/state/SearchUser'
//  EVENT on REFS & STATES
import EventsComponents from './examples/typesInEvents&Refs/EventsComponents'
const App = () => {
    return (
        <div>
            <h1>
                Hi There!
            </h1>
            {/* STATE From TS */}
            <GuestList></GuestList>
            {/* STATE For Search User */}
            <SearchUser />
            {/* EVENT on REFS & STATES */}
            <EventsComponents />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
