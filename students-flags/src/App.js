import React from 'react';
import Nav from "./Navbar";
import Students from "./SectionStudents";
// import Flag from "./Flag";
// import Topics from "./SectionTopicsToRecap";
// import PosIt from "./PostIt";


function App() {
  return (
    <div className="App">
      <header className="main_nav">
      <Nav />
      </header>
      <section>
        <Students />
      </section>
      
    </div>
  );
}

export default App;
