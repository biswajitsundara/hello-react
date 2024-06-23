import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Search.css";
import Pill from "./Pill";

function SearchApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectUsers] = useState([]);
  const [selectedUserSet, setselectedUserSet] = useState(new Set());
  const Inputref = useRef(null);

  const handleSelectUsers = (user) => {
    setSelectUsers([...selectedUsers, user]);
    setselectedUserSet(new Set([...selectedUsers, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    Inputref.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter((selectedUser) => {
      selectedUser.id !== user.id;
    });

    // console.log(updatedUsers);
    setSelectUsers(updatedUsers);


    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setselectedUserSet(updatedEmails);
  };

  const handleKeydown = (e) => {
    if (e.key === "Backspace" && e.target.value === "" && selectedUsers.length > 0) {
      
      const lastUser = selectedUsers[selectedUsers.length - 1];
      console.log(selectedUsers);
      handleRemoveUser(lastUser);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }
      const search = await fetch(
        `http://dummyjson.com/users/search?q=${searchTerm}`
      );
      const response = await search.json();
      // console.log(response.users)
      setSuggestions(response.users);
    };

    fetchUsers();
  }, [searchTerm]);

  // console.log(selectedUsers);

  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {selectedUsers.length > 0 &&
          selectedUsers.map((user) => (
            <Pill
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => handleRemoveUser(user)}
            />
          ))}
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e)=>handleKeydown(e)}
            placeholder="Search for a user..."
            ref={Inputref}
          />

          {suggestions?.length > 0 && (
            <ul className="suggestions-list">
              {suggestions?.map((user, index) => {
                return !selectedUserSet.has(user.email) ? (
                  <li key={user.email} onClick={() => handleSelectUsers(user)}>
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                    <span>{`${user.firstName} ${user.lastName}`}</span>
                  </li>
                ) : (
                  <></>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchApp;
