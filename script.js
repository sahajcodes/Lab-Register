document.addEventListener("DOMContentLoaded", function () {

    const labFilter = document.getElementById("labFilter");
    const searchInput = document.getElementById("search-item");
    const rows = document.querySelectorAll("tbody tr");

    function filterTable() {

        const selectedLab = labFilter.value.toLowerCase();
        const searchValue = searchInput.value.toLowerCase();

        rows.forEach(row => {

            // Skip last message row
            if (row.children.length < 4) return;

            const labName = row.children[0].innerText.toLowerCase();
            const itemName = row.children[1].innerText.toLowerCase();

            let labMatch = (selectedLab === "all") || (labName === selectedLab);
            let searchMatch = itemName.includes(searchValue);

            if (labMatch && searchMatch) {
                row.style.display = "";
                
                // Highlight if searching
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

});
