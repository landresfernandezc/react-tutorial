import React from "react";
import styles from  '../App.css';
const ListItem = ({item} ) => {
    console.log(item)
    return (
        <div className="container-item">
            <h2 style={styles.heading}>{item.brand}</h2>
            <img  className="container-item-img" src={item.url}></img>
            <p className="container-item-p"> {item.description}</p>
        </div>
    )
}
export default ListItem;