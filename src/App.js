
import { Card } from "react-bootstrap";
import "./App.css";
import Nevbar from "./Component/Nevbar";
import Photos from "./Component/Photos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <>
 
  <Nevbar title="Gallery" />
  <Photos />
  <Card />
  </>
  
}

export default App;
