import SURIYA1 from './assets/SURIYA1.jpg'
import './Course.css'
const Course1="HTML"
function Course(){
    return(
        <div className="div">
            <img src={SURIYA1} alt=""></img>
            <h1>{Course1}</h1>
            <p>This code is Code io related program</p>
        </div>
    );
}
export default Course;