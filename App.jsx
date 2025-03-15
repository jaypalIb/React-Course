import { useState, useEffect } from 'react';
import Header from './components/Header/header.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import CoreConcept from './components/coreConcept';
import StudentList from './components/StudentList';
import TrainerList from './components/TrainerList';
import TabButton from './components/TabButton';
//import { response } from 'express';
import { STUDENT_LIST } from './studentList';
import { TRAINER_LIST } from './trainerList';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [students, setStudents] = useState([]); // State to hold fetched student data
  const [trainers, setTrainer] = useState([]); // State to hold fetched student data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from API when 'studentList' tab is selected
  useEffect(() => {
   // const interval = setInterval(() => {
      // if (selectedTopic === 'studentList') {
      //   setStudents('')
      //   setLoading(true);
      //   setError(null);
      //   fetch('http://localhost:80/web/php/react_connect_api.php') // Replace with your actual API endpoint
      //   .then(response => response.json())
      //   .then(data => {

      //     console.debug(data);
      //     setStudents(data); // Set the fetched student data to state
      //     setLoading(false);  // Set loading to false after data is fetched
      //   })
      //   .catch(err => {
      //     setError('Failed to fetch student data'); // Set error state if API call fails
      //     setLoading(false); // Set loading to false if there's an error
      //   });
      // }
      // if (selectedTopic === 'trainerList') {
      //   setTrainer('')
      //   setLoading(true);
      //   setError(null);
      //   fetch('http://localhost/web/php/react_connect_api_trainer.php')
      //   .then(response => response.json())
      //   .then(data => {
      //     console.debug(data);
      //     setTrainer(data);
      //     setLoading(false);
      //   })
      //   .catch(err => {
      //     setError('Failed to fetch trainer data');
      //     setLoading(false);
      //   });
      // }

   // },5000);    
  }, [selectedTopic]); // Re-fetch when selectedTopic changes

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={index} {...conceptItem} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            <TabButton onSelect={() => handleSelect('result')}>Result</TabButton>
            <TabButton onSelect={() => handleSelect('studentList')}>Student List</TabButton>
            <TabButton onSelect={() => handleSelect('trainerList')}>Trainer List</TabButton>
          </menu>

          {!selectedTopic ? (
            <p>Please Select a Topic.</p>
            ) : selectedTopic == 'studentList' ?  (
              <div id="tab-content">
                {loading ? (
                  <p>Loading student data...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <table>
                    <tbody>
                      <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student Address</th>
                        <th>Student Email</th>
                      </tr>
                      
                      {STUDENT_LIST.map((student, index) => (
                        <StudentList key={index} {...student} />
                      ))}
  
                    </tbody>
                  </table>
                )}
              </div>
            ) :  selectedTopic == 'trainerList' ?  (
              <div id="tab-content">
              {loading ? (
                <p>Loading Trainer data...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <table>
                  <tbody>
                    <tr>
                      <th>Trainer ID</th>
                      <th>Trainer Name</th>
                      <th>Trainer Address</th>
                      <th>Trainer Email</th>
                    </tr>
                    
                    {TRAINER_LIST.map((trainer, index) => (
                      <TrainerList key={index} {...trainer} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            ) : ( <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>)
            }
          
        </section>
      </main>
    </div>
  );
}

export default App;



// {selectedTopic === 'studentList' && (
//   <div id="tab-content">
//     {loading ? (
//       <p>Loading student data...</p>
//     ) : error ? (
//       <p>{error}</p>
//     ) : (
//       <table>
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Student Name</th>
//             <th>Student Address</th>
//             <th>Student Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <StudentList key={index} {...student} />
//           ))}
//         </tbody>
//       </table>
//     )}
//   </div>
// )}

// {selectedTopic === 'trainerList' && (
//     <div id="tab-content">
//       {loading ? (
//         <p>Loading trainer data...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Trainer ID</th>
//               <th>Trainer Name</th>
//               <th>Trainer Address</th>
//               <th>Trainer Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {trainers.map((trainer, index) => (
//               <TrainerList key={index} {...trainer} />
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   )}

//   {!selectedTopic && <p>Please Select a Topic.</p>}
// </section>