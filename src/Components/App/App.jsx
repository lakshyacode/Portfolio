import React from "react";
import { BrowserRouter,Route} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import './App.css';
import Navbar from "../Navbar/Navbar";
import Gohome from "../Gohome/Gohome";
// const SampleComponent=()=>{
//     return(
//         <div>
//             <h1>I am the home page</h1>
//         </div>
//     );
// };
// const SampleComponent2=()=>{
//     return(
//         <div>
//             <h1>I am the about page</h1>
//         </div>
//     );
// };
const App=()=>{
    return(
    <div>
        {/* <Navbar/> */}
       <BrowserRouter>
      <div>
     <Navbar/>
           <Route path="/" exact component={Home}/> 
           <Route path="/about" exact component={About}/> 
           <Route path="/projects" exact component={Projects}/> 
           <Route path="/skills" exact component={Skills}/> 
           <Route path="/contact" exact component={Contact}/> 
           <Gohome/>
           {/* <Route path="/about" element={<SampleComponent2/>}/>  */}
           {/* <Route path="/about" element={<SampleComponent2/>/} */}
           </div>
       </BrowserRouter>
    </div>
    );
};
export default App;