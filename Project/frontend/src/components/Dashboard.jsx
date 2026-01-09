// import AddCompany from "./AddCompany";
// import CompanyList from "./CompanyList";

// function Dashboard(){
//     return (
//         <div className="container">
//             <h2>Placement Tracker Dashboard</h2>
//             <AddCompany/>
//             <CompanyList/>
//         </div>
//     )
// }

// export default Dashboard();

import AddCompany from "./AddCompany";
import CompanyList from "./CompanyList";

function Dashboard() {
  return (
    <div className="container">
      <h2>Placement Tracker Dashboard</h2>
      <AddCompany />
      <CompanyList />
    </div>
  );
}

export default Dashboard;