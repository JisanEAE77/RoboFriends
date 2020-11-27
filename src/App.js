import React, {useState} from 'react';
import './App.css'
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';

function App() {

    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

 
    const filterRobots = robots.filter(user => {
        return (user.name.toLowerCase().includes(searchfield.toLowerCase()) || user.email.toLowerCase().includes(searchfield.toLowerCase()) || user.phone.toLowerCase().includes(searchfield.toLowerCase()))
    })

    return(
        <div>
            <h1 className="title">RoboFriends</h1>
            <br />
            <div className="app">
                <SearchBox searchChange={onSearchChange} className="search" />
                <br />
                <CardList robots={filterRobots} />
            </div>
        </div>
    )

}

export default App;