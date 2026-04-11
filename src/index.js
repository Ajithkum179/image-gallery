
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import ImageContainer from './components/image-container';
import "./App.css"
import one from "./assets/images/car1.jpg"
import two from "./assets/images/car2.jpg"
import three from "./assets/images/car3.jpg"
import four from "./assets/images/car4.jpg"
import five from "./assets/images/car5.jpg"
import six from "./assets/images/car6.jpg"
import seven from "./assets/images/car7.jpg"
import eight from "./assets/images/car8.jpg"
import nine from "./assets/images/car9.jpg"
import ten from "./assets/images/car10.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));
var arr=[{img:one,cnt:"Lambogini"},
  {img:two,cnt:"Black Lambo"},
  {img:three,cnt:"Yellow Max"},
  {img:four,cnt:"Rolls Royce"},
  {img:five,cnt:"Benz Robot"},
  {img:six,cnt:"White Super Power"},
  {img:seven,cnt:"Yellow Dodge"},
  {img:eight,cnt:"Leo Red Lambogi"},
  {img:nine,cnt:"Black Dd"},
  {img:ten,cnt:"AADI Return"}
]
root.render(
  <>
  <Navbar></Navbar>
  <div className="container">
    {
    arr.map(function(item){
     return <ImageContainer img={item.img} cnt={item.cnt} ></ImageContainer>
    })
  }
  </div>
  </>
)