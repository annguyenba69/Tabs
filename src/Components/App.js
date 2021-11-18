import { useEffect, useState } from "react";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

function App() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const requestUrl = "https://course-api.com/react-tabs-project";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        setLoading(false);
        setList(responseJSON);
      } catch (error) {
        setLoading(false);
        console.log("Failed: " + error.message);
      }
    }
    fetchData();
  },[]);
  function handleCompany(key){
    setIndex(key);
  }
  if (loading == true) {
    return (
      <div id="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header text-center">
                <h1>Loading</h1>
                <div className="underline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header text-center">
                <h1>Experience</h1>
                <div className="underline" />
              </div>
            </div>
          </div>
          <div className="row">
            <SideBar handleCompany={(key)=>handleCompany(key)} list={list}></SideBar>
            <Content item={list[index]}></Content>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
