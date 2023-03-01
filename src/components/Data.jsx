import React, { useEffect, useState } from "react";
/*
Usedebounce to handle the call after completed the input 
*/
const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
};

function Data(props) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 1000);
  /**
   * This method used to fetch the user data from server
   */
  const fetchData = () => {
    fetch(`https://dummyjson.com/users/search?q=${searchTerm} `)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  };

  useEffect(() => {
    fetchData(debounceSearchTerm);
  }, [debounceSearchTerm]);
  /*
To handle onClickevent
*/
  const handleClick = (item) => {
    props.onSelect(item);
    console.log("handler clicked ", props);
  };
  /*
To handle onChange event
*/
  const handleChange = (e) => {
    setsearchTerm(e.target.value);
    console.log("handler changed", e);
  };
  /*
This used to  display user list using map function
*/
  return (
    <div className="Data-container">
      <div>
        <h2>User list</h2>
      </div>

      <div>
        <input
          type="text"
          className="input-search"
          placeholder="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <div className="userlist-container">
        {users.map((data) => (
          <div
            key={data.id}
            className="Data-item"
            onClick={() => handleClick(data)}
          >
            <div className="image">
              <img
                src={data.image}
                style={{ width: " 25px", height: "25px", marginRight: "5px" }}
              ></img>
            </div>
            <div>{data.firstName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
