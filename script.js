// Get elements
const labFilter = document.getElementById("labFilter");
const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("tbody tr");

// Function to apply both filters
function applyFilters() {
    const selectedLab = labFilter.value.toLowerCase();
    const searchValue = searchInput.value.toLowerCase();

    rows.forEach(row => {
        const labName = row.children[0].innerText.toLowerCase();
        const itemName = row.children[1].innerText.toLowerCase();

        const labMatch =
            selectedLab === "all" || labName === selectedLab;

        const searchMatch =
            itemName.includes(searchValue);

        if (labMatch && searchMatch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Event listeners
labFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
