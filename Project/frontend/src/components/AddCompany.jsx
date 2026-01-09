// import { useState } from "react";
// import { addCompany } from "../services/api.js";

// function AddCompany() {
//   const [company, setCompany] = useState("");
//   const [status, setStatus] = useState("Applied");

//   const handleAdd = async () => {
//     await addCompany({ company, status });
//     setCompany("");
//     setStatus("Applied");
//     alert("Company Added");
//   };
//   return (
//     <div>
//       <h3>Add Company</h3>

//       <input
//         value={company}
//         onChange={(e) => setCompany(e.target.value)}
//         placeholder="Company Name"
//       />

//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         placeholder="Company Name"
//       >
//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option> Applied </option>
//           <option> Interview </option>
//           <option> Selected </option>
//           <option> Rejected </option>
//         </select>

//         <button onClick={handleAdd}>Add</button>
//       </select>
//     </div>
//   );
// }

// export default AddCompany();


import { useState } from "react";
import { addCompany } from "../services/api.js";

function AddCompany() {
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleAdd = async () => {
    await addCompany({ company, status });
    setCompany("");
    setStatus("Applied");
    alert("Company Added");
  };
  
  return (
    <div>
      <h3>Add Company</h3>

      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company Name"
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Selected</option>
        <option>Rejected</option>
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddCompany;