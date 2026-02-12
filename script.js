document.addEventListener("DOMContentLoaded", function () {

    const labFilter = document.getElementById("labFilter");
    const searchInput = document.getElementById("search-item");
    const rows = document.querySelectorAll("tbody tr");

    window.filterTable = function() {

    const selectedLab = labFilter.value.toLowerCase();
    const searchValue = searchInput.value.toLowerCase();

    const rows = document.querySelectorAll("tbody tr"); // 🔥 yaha shift karo

    rows.forEach(row => {

        if (row.children.length < 4) return;

        const labName = row.children[0].innerText.toLowerCase();
        const itemName = row.children[1].innerText.toLowerCase();

        let labMatch = (selectedLab === "all") || (labName === selectedLab);
        let searchMatch = itemName.includes(searchValue);

        if (labMatch && searchMatch) {
            row.style.display = "";

            if (searchValue !== "") {
                row.classList.add("highlight-row");
            } else {
                row.classList.remove("highlight-row");
            }

        } else {
            row.style.display = "none";
            row.classList.remove("highlight-row");
        }
    });
}


    // Event listeners
    labFilter.addEventListener("change", filterTable);
    searchInput.addEventListener("input", filterTable);


const loginModal = document.getElementById("loginModal");
const adminLoginBtn = document.querySelector("header button");
const closeLogin = document.getElementById("closeLogin");

adminLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

closeLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
});
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  loginAdmin(email, password);
})
});
