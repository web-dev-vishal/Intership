import { useEffect, useState } from "react";
import { getCompaines } from "./services/api.js";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompaines().then(setCompanies);
  }, []);

  return (
    <div>
      <h3>Applied Companies</h3>

      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((c, i) => {
            <tr key={i}>
              <td>{c.compamu}</td>
              <td>{c.status}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList();
