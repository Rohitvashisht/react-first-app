import { useState } from 'react'; 
import RestroCard from "./RestroCard";

const RestroContainer = () => {

  // State Variable  - Maintain state of a component.
  const [listOfRestroData, setlistOfRestroData] = useState([{
   restroName: "Meghana Foods", cuisine: "South Indian", ratings: 4.5
    },
     {
       restroName: "KFC", cuisine: "Fast Foods", ratings:  3.8     }])

//   let listOfRestroData = [
//     {
//     restroName: "Meghana Foods", cuisine: "South Indian", ratings: 4.5
//     },
//     {
//       restroName: "KFC", cuisine: "Fast Foods", ratings:  3.8
//     }
// ]

  return (
    <div className='body'>
      <div className='search'>
        <input type="search" />
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={() =>  {

          const filteredList = listOfRestroData.filter(item => item.ratings > 4)
          setlistOfRestroData(filteredList);
          }}> Top rated restro</button>
      </div>
      <div className='restro-container'>
        {listOfRestroData.map((restroData) => (
           <RestroCard key= {restroData.restroName} resData= {restroData} />
          ))}
      </div>
    </div>
  )
}

export default RestroContainer;