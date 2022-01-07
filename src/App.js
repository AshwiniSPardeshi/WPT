import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div>
      <div>
        <MyComp />
      </div>
    </div>
  );
}

function MyComp() {
  const [username, setUsern] = useState("");
  const [password, setPass] = useState("");
  const [list, setList] = useState([]);

  const userVal = (e) => {
    setUsern(e.target.value);
  };

  const passVal = (e) => {
    setPass(e.target.value);
  };

  const addData = async () => {
    // alert("Done!!");
    let user = { username: username, password: password };
    const url = "http://localhost:4000/adduser1";
    await axios.post(url, user);
    setList([user, ...list]);
    setPass("");
    setUsern("");
  };

  const selectData = async () => {
    const url = "http://localhost:4000/user1";
    const result = await axios.get(url);
    const newList = result.data;
    setList(newList);
    console.log(newList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={userVal}
        />
      </div>
      <div>
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onChange={passVal}
        />
      </div>
      <div>
        <input type="button" value="Register" onClick={addData} />
      </div>
      <div>
        <input type="button" value="GetData" onClick={selectData} />
      </div>
      {list.map((item, index) => (
        <div id="index">
          {item.username} {item.password}
        </div>
      ))}
    </div>
  );
}
