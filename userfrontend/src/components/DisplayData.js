import './../index.css';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function DisplayData() {
    const [users, setUsers] = useState([]);
    const [leapUsers, setLeapUsers] = useState(0);
    const [averageNameLength, setAverageNameLength] = useState(0);
    const [numOfUsers, setNumOfUsers] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/user/getAll")
          .then(response => response.json())
          .then(data => {
            let count = 0;
            let totalNameLength = 0;
            const changedUsers = data.map(user => {
              user.digitSum = user.number
                .toString()
                .split("")
                .reduce((sum, digit) => sum + parseInt(digit), 0);
              user.reversedName = user.name
                .split("")
                .reverse()
                .join("");
              user.isLeapYear = isLeapYear(new Date(user.startDate).getFullYear());
              if (user.isLeapYear == "Yes"){
                
                count++;
              }
              totalNameLength += user.name.length;
              return user;
            });
            setUsers(changedUsers);            
            setLeapUsers(count);
            setAverageNameLength(totalNameLength / data.length);
            setNumOfUsers(data.length);
          });
      }, []);
      
        
      
      

      function isLeapYear(year) {
          if (year % 4 !== 0) return "No";
          if (year % 100 !== 0)  return "Yes";
          if (year % 400 !== 0) return "No";
          return "Yes";
      }
      

    return (
        <div class = "displayData">
            <div class= "stat">
                <h4>Total users: {numOfUsers}</h4>
                <h4>Users born in leapyear:{leapUsers}</h4> 
                <h4>Average Name Length: {averageNameLength}</h4>   
                 </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reversed Name</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Digits sum</th>
                        <th>Birthday</th>
                        <th>Born in leap year</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => 
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.reversedName}</td>
                            <td>{user.address}</td>
                            <td>{user.number}</td>
                            <td>{user.digitSum}</td>
                            <td>{user.startDate}</td>
                            <td>{user.isLeapYear}</td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayData;
