import "./App.css";
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs.js";
import { useEffect, useState } from "react";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [robots, setRobots] = useState([]);
  let isFetching = false; // Flag to prevent multiple fetch requests
  function handleScroll(event) {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage =
      (scrollPosition / (documentHeight - windowHeight)) * 100;
    if (scrollPercentage >= 50 && !isFetching) {
      isFetching = true;
      setCurrentPage((oldState) => oldState + 1);
      fetchUsers(currentPage)
        .then(() => {
          isFetching = false;
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          isFetching = false;
        });
    }
  }

  //   function handleScroll(event){
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       setCurrentPage((oldState) => oldState + 1);
  //       fetchUsers(currentPage);
  //     }
  //  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    fetchUsers(currentPage);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function fetchUsers(page) {
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=9&inc=id,name,email,nat,registered`
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
    setRobots((oldState) => [...oldState, ...formatedResult]);
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
    <Router>
      <div className="App-body">
        <Header setSearchKey={setSearchKey} />
        <Routes>
          <Route path="/" element={<CardsList filteredData={filteredData} />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
