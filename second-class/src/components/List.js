import React, { useState ,useEffect} from "react";
import '../App.css';
import ListItem from './ListItem'
const List = () => {
    let [filter,setState] = useState('');
    const carList= [
        { brand: 'Honda', url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg' ,description:'Honda has been the worlds largest motorcycle manufacturer since 1959,as well as the worlds largest manufacturer of internal combustion engines measured by volume, producing more than 14 million internal combustion engines each year.'},
        { brand: 'Mercedes', url: 'https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/c/sedan/all-vehicles/2022-C300-SEDAN-AVP-DR.png' ,description:'Mercedes-Benz produces consumer luxury vehicles and commercial vehicles. Its first Mercedes-Benz-badged vehicles were produced in 1926. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.'},
        { brand: 'Toyota', url: 'https://global.toyota/pages/news/images/2021/08/02/1330/20210802_01_t_w610.jpg' ,description:'Toyota Motor Corp. engages in the manufacture and sale of motor vehicles and parts. It operates through the following segments: Automotive, Financial Services, and All Other.'},
        { brand: 'Ferrari', url: 'https://imgd.aeplcdn.com/0x0/cw/ec/33641/Ferrari-812-Exterior-123393.jpg?wm=0',description:'Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.' }
    ]
    let [filterList, setFilterList] = useState(carList);
    useEffect(() => {
            
    }, []);
    function handleChange(event) {
        setState(event.target.value);
    }
    function updateFilterList(){
        setFilterList(carList.filter(item=> item.brand===filter))
    }
    return (
        <>
            <div className="container">
                <input type="text" value={filter} onChange={handleChange} placeholder="Type the Brand" required/> 
                <button onClick={updateFilterList}> Filter</button>
            </div>
            <div className="container">
                {
                    filterList.map((item) => <ListItem key={item.brand} item ={item}> </ListItem>)
                }
            </div>
        </>
    )
}
export default List;