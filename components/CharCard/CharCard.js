// import './CharCard.css'

const CharCard = ({ id, name, image, handlePicked }) => {
  // console.log(handlePicked)
    return (
        <div>
          <img 
            id={id}
            className='card'
            key={id}
            name={name}
            src={image}
            onClick={handlePicked}
            width={200}
            height={200}
          />  
        </div>
    )
}
export default CharCard
