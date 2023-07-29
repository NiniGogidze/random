import React, { useState } from "react";
import Random from '../src/folder/Random';
import "./folder/style.css"


function App() {
  const [students, setStudents] = useState([
    {
      name :"ნინი"
    },
    {
      name: "ანი"
    },
    {
      name: "მარიამი"
    },
    {
      name: "სალომე"
    },
    {
      name: "გიორგი"
    },
    {
      name: "ლერი"
    },
    {
      name: "ნიკი"
    },
    {
      name: "თორნიკე"
    },
    {
      name: "კოტე"
    },
    {
      name: "ვაკო"
    },
    {
      name: "სოფი"
    },
  ])

  const [ grifindors, setGrifindors] = useState([]);
  const [ slizerin, setSlizerin] = useState([]);
  const [ reivenqlo, setReivenqlo] = useState([]);
  const [ hap, setHap] = useState([]);

  const handleClick = () => {
    for (let i = 0; i < students.length; i++) {
      const selectStudent = students[i];
      const delay = (i + 1) * 1000;
      
      setTimeout (() => {
        setStudents((prevStudents) =>
        prevStudents.filter((item) => item.name !== students[i].name));

        const houseIndex = Math.floor(Math.random() * 4)

        switch (houseIndex) {
          case 0:
            setGrifindors((prevGrifindor) => [
              ...prevGrifindor,
              selectStudent,
            ])
            break;
          case 1:
            setReivenqlo((prevReivenclo) => [
              ...prevReivenclo,
              selectStudent,
            ])
            break; 
          case 2:
            setSlizerin((prevSlizerin) => [
              ...prevSlizerin,
              selectStudent,
            ])
            break;
          case 3:
            setHap((prevHap) => [
              ...prevHap,
              selectStudent,
            ])
            break;
          default:
              break;
        }
      }, delay)
    }
  }

  return (
    <div className="App">
      <Random />
      <div className="box">
        <ul>
          {students.map((students) => 
          <li>{students.name}</li>
          )}
        </ul>
        <button onClick={handleClick}>გამანაწილებელი ქუდი</button>
      </div>
      <div className="row">
        <div>
          <h3>გრიფინდორი</h3>
          <ul>
            {grifindors.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>სლიზერინი</h3>
          <ul>
            {slizerin.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>ჰაპლფაპი</h3>
          <ul>
            {hap.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>რეივენქლო</h3>
          <ul>
            {reivenqlo.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
