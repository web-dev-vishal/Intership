const API = URL = "http://localhost:5000/api/companies";

export async function getCompanies() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function addCompany(data) {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
}

// export async function getCompanies() {
//     const res = await fetch(API_URL);
//     return res.json();
// } 