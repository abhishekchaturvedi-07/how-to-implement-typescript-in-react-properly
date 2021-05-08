import ReactDOM from 'react-dom';
// UNCOMMENT TO CHECK ON TUTORIAL - EXAMPLES
/******************EXAMPLES******************/
// STATE For Guest List Entry FROM TS
// import { GuestList } from './examples/state/GuestList'
// STATE For Search User
// import SearchUser from './examples/state/SearchUser'
//  EVENT on REFS & STATES
// import EventsComponents from './examples/typesInEvents&Refs/eventHanlders/EventsComponents'
// import RefSearchUser from './examples/typesInEvents&Refs/refs/RefsSearchUser'
/******************EXAMPLES******END******************/
require('./styles/index.scss')
const App = () => {
    return (
        <div>
            <div className='blink'>
                <span>
                    Welcome to React + Redux + TS Application Tutorial by Abhishek
                    Chaturvedi!
                </span>
            </div>

            {/* /* // UNCOMMENT TO CHECK ON TUTORIAL - EXAMPLES  */}
            {/* -------------------  EXAMPLES ------------------- */}
            {/* STATE From TS */}
            {/* <GuestList></GuestList> */}
            {/* STATE For Search User */}
            {/* <SearchUser /> */}
            {/* EVENT on REFS & STATES */}
            {/* <EventsComponents /> */}
            {/* REFS */}
            {/* <RefSearchUser /> */}
            {/* -------------------  EXAMPLES ----- END  ------------------- */}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
