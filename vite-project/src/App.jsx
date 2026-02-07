import Course from './Course'
import './App.css'
import HTML from './assets/HTML.jpg'
import CSS from './assets/CSS.jpg'
import JAVASCRIPT from './assets/JAVASCRIPT.jpg'

function App() {
  return (
    <>
      <Course name="HTML" price="$100" image={HTML} rating={8} show={true}/>
       <Course name="CSS" price= "$200" image={CSS} rating={8.5}/>
        <Course name="JAVASCRIPT" price="$500" rating={9.0}image={JAVASCRIPT} show={true}/>
    </>
  )
}

export default App
