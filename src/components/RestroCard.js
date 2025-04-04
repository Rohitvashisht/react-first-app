
const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestroCard = ({restroName, cuisine, ratings}) => {
  // const {restroName, cuisine, ratings} = props.resData;
  return (
    <div className='restro-card' style={styleCard}>
      <img alt="restor-logo" src="https://media-cdn.tripadvisor.com/media/photo-s/28/c0/a9/6e/thai-food.jpg" />
      <h3>{restroName}</h3>
      <h4>{cuisine}</h4>
      <h4>{ratings} stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

export default RestroCard;