import AddButtons from "@/components/AddButtons/AddButtons";

const MedicalInfo = ({ id, allergies, medicalConditions }) => {
  let length = 0;

  if (allergies.length > 0 || medicalConditions > 0) {
    if (allergies.length > medicalConditions.length) {
      length = allergies.length;
    } else {
      length = medicalConditions.length;
    }
  }

  return (
    <div className="m-4 w-100 bg-dark text-light border border-dark rounded">
      <h3 className="m-3 text-center">Medical Info</h3>
      <div className="m-2">
        <table className="table table-hover table-dark table-bordered border text-center">
          <thead>
            <tr>
              <th className="w-50">Medical Conditions</th>
              <th className="w-50">Allergies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {medicalConditions.length === 0 ? (
                <td>No medical conditions</td>
              ) : (
                <td>{medicalConditions[0]}</td>
              )}
              {allergies.length === 0 ? (
                <td>No allergies</td>
              ) : (
                <td>{allergies[0]}</td>
              )}
            </tr>
            {length > 1 ? (
              <tr>
                {medicalConditions.length > 0 ? (
                  <td>{medicalConditions[1]}</td>
                ) : (
                  <td></td>
                )}
                {allergies.length > 0 ? <td>{allergies[1]}</td> : <td></td>}
              </tr>
            ) : null}
            {length > 2 ? (
              <tr>
                {medicalConditions.length > 1 ? (
                  <td>{medicalConditions[2]}</td>
                ) : (
                  <td></td>
                )}
                {allergies.length > 1 ? <td>{allergies[2]}</td> : <td></td>}
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalInfo;
