import "./coreConcept.css";

export default function TrainerList ({TrainerId,TrainerName,TrainerAdd,TrainerEmail}) {
  return (
    <tr>
      <td>{TrainerId}</td>
      <td>{TrainerName}</td>
      <td>{TrainerAdd}</td>
      <td>{TrainerEmail}</td>
    </tr>
  );
}