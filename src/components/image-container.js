

function ImageContainer(props){
    return(
        
        <div className="img">
            <img src={props.img} alt={props.cnt} />
            <p>{props.cnt}</p>
        </div>
        
    )
}
export default ImageContainer
