import "./App.css";
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import { useEffect, useState } from "react";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const response = await fetch(
      "https://randomuser.me/api/?results=10&inc=id,name,email,nat,registered"
    );
    const result = await response.json();
    const formatedResult = result.results.map((item) => {
      return {
        id: item.id.name + item.id.value,
        name: item.name.first + " " + item.name.last,
        email: item.email,
        nat: item.nat,
        registered: item.registered.date,
      };
    });
    setRobots(formatedResult);
  }
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
      <CardsList filteredData={filteredData} />
    </div>
  );
}

export default App;
