import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [robots, setRobots] = useState([]);
  async function apiFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    const robots = result.map((item) => {
      const { id, name, email } = item;
      return { id, name, email };
    });
    setRobots(robots);
  }
  useEffect(() => {
    apiFetch()
  }, []);
  const filteredData =
    searchKey === ""
      ? robots
      : robots.filter((item) => {
          if (
            item.name.toLowerCase().includes(searchKey.toLowerCase()) ||
            item.email.toLowerCase().includes(searchKey.toLowerCase())
          )
            return true;
          else return false;
        });

  return (
    <div className="App-body">
      <Header setSearchKey={setSearchKey} />
      <div className="cards-main">
        {filteredData.map((item) => {
          return (
            <Cards
              key={item.id}
              nameRobo={item.name}
              emailRobo={item.email}
              imageId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
