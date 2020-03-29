import React from "react";

import Rules from "./component/Rules";
import { MDBContainer } from "mdbreact";
import Culculate from "./component/Culculate";

function App() {
  return (
    <div className='app-center '>
   
      <header>
        <h1 className='border-radius display-4 text-center bg-dark text-light'> Kısa Çalışma Ödeneği Hesaplama</h1>
      </header>

     <MDBContainer>

     <Rules />

     </MDBContainer>
     <MDBContainer>
       <Culculate/>
     </MDBContainer>
   
      
    </div>
  );
}

export default App;
