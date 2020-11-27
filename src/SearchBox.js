

function SearchBox({searchChange}) {
    return(
        <input type="search" placeholder="Search RoboFriends....." onChange={searchChange} />
    );
}

export default SearchBox