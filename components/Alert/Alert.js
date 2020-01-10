

const Alert = (props) => {
    return(
        <div className="default" style={props.style}>
            {props.message ? (
                <h3>{props.message}</h3>
            ) : (
                <h3 className='default-msg black'>Click a pic to start!</h3>
            )}
        </div>
    )
}
export default Alert