import React, { useState, useEffect } from "react";
import "../App.css";
import ListItem from "./ListItem";
const List = (props) => {
  let [filter, setState] = useState("");
  let [loading, setLoading] = useState(true);
  let [filterList, setFilterList] = useState([]);
  let [selectList, setSelectList] = useState([]);
  async function fetchHandler() {
    let arrayTemp = [];
    const fetchResult=await fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        Object.keys(data.message).map(async (key) => {
          const urlBreed = await getBreedUrlImage(key);
          arrayTemp.push({ breed: key, url: urlBreed.message });
          setLoading(false);
          setFilterList(arrayTemp);
          return key;
        });
        setSelectList(Object.keys(data.message));
        return data;
      });
    console.log(filterList)
    return fetchResult;
  }
  useEffect(() => {
    fetchHandler();
  }, [filter]);

  async function getBreedUrlImage(key) {
    const urlImg = await fetch(
      `https://dog.ceo/api/breed/${key}/images/random`
    );
    return urlImg.json();
  }
  function handleChange(event) {
    setState(event.target.value);
  }
  function updateFilterList() {
    setFilterList(filterList.filter((item) => item.breed === filter));
  }
  return (
    <>
      {props.children}
      <div className="container">
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Type the Breed"
          hidden
        />
        <select value={filter} onChange={handleChange}>
            <option selected>Select the Feed</option>
            {
                selectList.map((key)=> <option >{key}</option>)
            }
        </select>
        <button onClick={updateFilterList}> Filter</button>
      </div>

      {loading && filterList.length === 0? (
        <div>...Data Loading.....</div>
      ) : (
        <div className="container">
          {filterList.map((item) => (
            <ListItem key={item.breed} item={item}/>
          ))}
        </div>
      )}
    </>
  );
};
export default List;
