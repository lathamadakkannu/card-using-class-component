
import './App.css';
//import List from './List';
//import Listclass from './Listclass';
import Card from './Card';
function App() {
let cardDetails=[
  {
      id:1,
      name:"Veg Fried Rice",
      rating:"4.2",
      amount:140,
      pureveg:"yes",
      slogan:"Made For Better Eating Experience."
  } ,

  {
      id:2,
      name:"Gobi Manchurian Dry",
      rating:"4.1",
      amount:169,
      pureveg:"no",
      slogan:"A taste you'll remember"
  } ,

  {
      id:3,
      name:"Plain Biryani",
      rating:"4",
      amount:120,
      pureveg:"yes",
      slogan:"Enjoy Food"
  } ,

  {
      id:4,
      name:" Chapathi",
      rating:"3.9",
      amount:40,
      pureveg:"yes",
      slogan:"Taste - Now!"
  } ,

  {
      id:5,
      name:"Crunchy Mexican",
      rating:"3.9",
      amount:279,
      pureveg:"yes",
      slogan:"We do magic with recipes"
  } ,

  {
      id:6,
      name:"Kesar Rasmalai",
      rating:"3.5",
      amount:92,
      pureveg:"yes",
      slogan:"Food Makes Your Day."
  } ,


  {
      id:7,
      name:"Pistachio Ice Cream Cake",
      rating:"4.1",
      amount:569,
      pureveg:"yes",
      slogan:"Life is short, make it sweet"
  } ,


  {
      id:8,
      name:"Curd Rice",
      rating:"3.5",
      amount:89,
      pureveg:"yes",
      slogan:"Food Makes Your Day"
  } ,


  {
      id:9,
      name:"Egg podimass",
      rating:"3.7",
      amount:59,
      pureveg:"no",
      slogan:"Food - To Feel Free!"
  } ,


  {
      id:10,
      name:"Dosa",
      rating:"4.1",
      amount:65,
      pureveg:"yes",
      slogan:"Healthy and modern"
  } ,

  {
      id:11,
      name:"Veg Maggie",
      rating:"3.5",
      amount:89,
      pureveg:"yes",
      slogan:"The Art Of Taste"
  } ,

  {
      id:12,
      name:"Paneer fried rice",
      rating:"4.0",
      amount:139,
      pureveg:"yes",
      slogan:"Good Meal, Better Results"
  } ,

  {
      id:13,
      name:"Panner manchurian",
      rating:"4.2",
      amount:190,
      pureveg:"yes",
      slogan:"Bringing Joy of Food"
  } ,

  {
      id:14,
      name:"Mushroom fried noodles",
      rating:"3.8",
      amount:130,
      pureveg:"no",
      slogan:"Once you try it, you will love it."
  } ,

  {
      id:15,
      name:"Lemon Rice",
      rating:"3.8",
      amount:59,
      pureveg:"yes",
      slogan:"Be healthy be happy"
  } ,



];
  return (
    <div className="App">
     
      <Card cardData={cardDetails}/>
    </div>
  );

  }
export default App;
