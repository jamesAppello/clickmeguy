// import './CharCard.css'

const CharCard = ({ id, name, image, handlePicked }) => {
    return (
        <>
          <img 
            className='card'
            key={id}
            name={name}
            src={image}
            onClick={handlePicked}
          />  
        </>
    )
}
export default CharCard
