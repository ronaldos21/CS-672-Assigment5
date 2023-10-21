fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
        const users = data.results; // Access the 'results' array in the API response

        const tableRows = (user) => {
            const firstName = user.name.first;
            const lastName = user.name.last;
            const city = user.location.city;
            const country = user.location.country;

            return `<tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${city}</td>
                <td>${country}</td>
            </tr>`;
        };

        const tableData = users.map(tableRows).join('');

        document.getElementById("table_body").innerHTML = tableData;

        document.getElementById("searchButton").addEventListener("click", () => {
            const searchTerm = document.getElementById("searchInput").value.toLowerCase();

            const filteredRows = users
                .filter((user) => user.name.first.toLowerCase().includes(searchTerm))
                .map(tableRows);

            const filteredTableData = filteredRows.join('');

            document.getElementById("table_body").innerHTML = filteredTableData;
        });
    })
    .catch((err) => {
        console.log(err);
    });
