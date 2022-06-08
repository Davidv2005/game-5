import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { db } from "./firebase";
import { collection, getDocs, addDocs, doc } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);

  const userCollectionRef = collection(db, "leaderbord");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar />

      <button
        type="button"
        className="size"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz_QgVO5eWuf19UfgP0H66rs6v0wxjVX2Wk0CncfB3U3jCkAct_yuHLyqABkUFPsrZt4&usqp=CAU" />
      </button>
      <div className="size">{count}</div>

      <h1>leaderboard</h1>

      {users.map((users) => {
        return (
          <div key={users.id}>
            <p className="text-size"> scores: {users.scores}</p>
          </div>
        );
      })}
    </div>
  );
}
// function helper() {
//   while(count >= 50) {
//     setCount(count + 1)
//   }
// }

export default App;
