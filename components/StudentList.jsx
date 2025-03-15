import './coreConcept.css';

function StudentList({StudentId,StudentName,StudentAdd,StudentEmail}) {
  return (
    <tr>
      <td>{StudentId}</td>
      <td>{StudentName}</td>
      <td>{StudentAdd}</td>
      <td>{StudentEmail}</td>
    </tr>
  )
}
export default StudentList;