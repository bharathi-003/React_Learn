
import './Course.css'
const Course1 = "HTML"
function Course(props) {
    if (props.show == true){
        return (
            <div className="div">
                <img src={props.image} alt=""></img>
                <h1>{props.name}</h1>
                <p>{props.price}</p>
                <p>{props.rating}</p>
            </div>
        );
    }
    else {
        return (
            <div className='div'>Course not available</div>
        )
    }

}


export default Course;