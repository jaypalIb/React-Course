import { useState } from 'react';
//import reactImg from './assets/react-core-concepts.png';
import Header from './components/Header/header.jsx';
// import components from './assets/components.png';
// import configImg from './assets/config.png';
// import jsxUi from './assets/jsx-ui.png';
// import stateMgmt from './assets/state-mgmt.png';
import {CORE_CONCEPTS, EXAMPLES} from  './data.js';
// import {EXAMPLES} from './data.js';
import CoreConcept from './components/coreConcept.jsx';
import {STUDENT_LIST} from './studentList.js';
import StudentList from './components/StudentList.jsx';
import {HOSPITAL_LIST} from './hospitalList.js';
import HospitalList from "./components/hospitalList.jsx";
import TabButton from './components/TabButton.jsx';


//function CoreConcept(props){
  

function App() {

 const [ selectedTopic, setSelectedTopic] = useState('');

  let tabContent = '';
  function handleSelect(selectedButton) {

    // selectButton => 'component','jsx','props','state' 
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
    console.log(selectedButton);
  }
  console.log('APP COMPONENT EXICUTING')

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">

        <h2>Core Concept</h2>
        <ul>

        {/* 3rd Method dynamic */}
         {CORE_CONCEPTS.map((conceptItem, index) => (
           <CoreConcept key = {index} {...conceptItem}/>
         ))}

       </ul>
        </section>
        
        <section id="examples">
        </section>
        

        <section id="examples">
        </section>

        {/* <section id='core-concepts'>
          <h2>Hospital List</h2>
          <table>
            <tr>
              <th>Hospital Id</th>
              <th>Hospital Name</th>
              <th>Hospital Email</th>
              <th>Hospital Add</th>
              <th>Hospital phone</th>
              <th>Hospital Type</th>
            </tr>
            {HOSPITAL_LIST.map((Hospitals, index) => (
              <HospitalList key={index} {...Hospitals}/>
            ))}
          </table>
        </section>
          */}

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect= {() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect= {() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect= {() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect= {() => handleSelect('state')}>State</TabButton>
            <TabButton onSelect= {() => handleSelect('result')}>Result</TabButton>
            <TabButton onSelect= {() => handleSelect('studentList')}>Student List</TabButton>
          </menu>
          {!selectedTopic ? <p>Please Select a Topic.</p>: selectedTopic != 'studentList' ? (<div id='tab-content'><h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}  
            </code>  
          </pre>
          </div>): null }
          
          {selectedTopic == 'studentList' ? 
            (
              <table>
                <tbody>
                  <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Student Add</th>
                    <th>Student Email</th>
                  </tr>
                  {STUDENT_LIST.map((student, index) => (
                    <StudentList key={index} {...student} />
                  ))}
                </tbody>
              </table>  
            ) : null
          }

        </section>

      </main>
    </div>
  );
}

export default App;
