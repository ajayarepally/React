import React from 'react';
import StudentDetails from "./Components/student_details";
import {Route,Routes} from 'react-router-dom';
import Links from "./Components/links";
import Dummy from "./Components/Dummy_details";

function App() {
  return (
    <>
      <Links />
      <Routes>
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/DummyData" element={<Dummy />} />
      </Routes>
    </>
  );
}
export default App;