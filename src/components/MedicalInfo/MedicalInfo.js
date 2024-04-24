import AddButtons from "@/components/AddButtons/AddButtons";

const MedicalInfo = ({ id, allergies, medicalConditions }) => {
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
            <AddButtons id={id} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalInfo;
