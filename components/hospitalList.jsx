import '../components/coreConcept.css';

function HospitalList({HospitalId,HospitalName,HospitalEmail,HospitalAdd,HospitalPhone,HospitalType}) {
  return (
    <tr>
      <td>{HospitalId}</td>
      <td>{HospitalName}</td>
      <td>{HospitalEmail}</td>
      <td>{HospitalPhone}</td>
      <td>{HospitalAdd}</td>
      <td>{HospitalType}</td>
    </tr>
  )
}

export default HospitalList;