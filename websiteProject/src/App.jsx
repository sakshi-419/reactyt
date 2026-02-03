import { Section } from 'lucide-react';
import React from 'react';
import Section1 from './component/section1/section1';
import Section2 from './component/section2/section2';
import Navbar from './component/section1/navbar';
import 'remixicon/fonts/remixicon.css'
import Page1Content from './component/section1/page1Content';
import lady2 from "./image/lady2.png";
import boss3 from "./image/boss3.jpg";
import boss4 from "./image/boss4.jpg";




const App = () => {

  const users = [
  {
    img: lady2,
    intro: '',
    tag: 'Satisfier'
  },
  {
    img: boss3,
    intro: '',
    tag: 'Underserved'
  },
  {
    img: boss4,
    intro: '',
    tag: 'UnderBanked'
  }
]

  return (
    <div>
     <Section1 users={users}  />
     

      
    </div>
  )
}

export default App
