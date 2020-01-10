

const GifCard = ({ id, gif, handlePicked }) => {

    return(
        <>
        <img
            id={id}
            className='card'
            key={id}
            name={name}
            src={gif}
            onClick={handlePicked}
            width={200}
            height={200}
        />    

        </>
    )

}
export default GifCard