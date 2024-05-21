fetch('https://datalake-prod2018.rbfa.be/graphql?operationName=getSeriesAndRankingsQuery&variables=%7B%22teamId%22%3A%22283190%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%224ced37c1f12101a450402b274c6a3e49e1722751ba5468f5a70411ffbabdbd7f%22%7D%7D')
    .then(response => response.json())
    .then(data => {
        const rankings = data?.data?.teamSeriesAndRankings?.rankings || [];
 
        // Populate the select element with ranking names
        const select = document.getElementById('rankingSelect');
        rankings.forEach(ranking => {
            const option = document.createElement('option');
            let text = ranking.name;
            let result = text.includes("Voetbal : Voetbal Vlaanderen - ", 0);
            if(result == false){
            option.value = ranking.name;
            option.textContent = ranking.name;
            }else{
                option.value = ranking.name.split("- ")[1];
                option.textContent = ranking.name.split("- ")[1];
            }
            select.appendChild(option);
        });
 
        // Define a function to populate the table based on the selected ranking name
        function populateTable(selectedRankingName) {
            const selectedRanking = rankings.find(ranking => ranking.name === selectedRankingName);
            if (selectedRanking) {
                const generalRanking = selectedRanking.rankings.find(item => item.type === "generalRanking");
                if (generalRanking) {
                    const teams = generalRanking.teams;
                    const tableBody = document.getElementById('rankingBody');
                    tableBody.innerHTML = ''; // Clear existing rows
                    teams.forEach(team => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td class="tablenumberbox">${team.position}</td>
                            <td class="tablebox"><img src="${team.logo}" alt=""><p class="teamname">${team.name}</p></td>
                            <td class="tablenumberbox">${team.matchesPlayed}</td>
                            <td class="tablenumberbox">${team.matchesWon}</td>
                            <td class="tablenumberbox">${team.matchesLost}</td>
                            <td class="tablenumberbox">${team.matchesDrawn}</td>
                            <td class="tablenumberbox">${team.goalsFor}</td>
                            <td class="tablenumberbox">${team.goalsAgainst}</td>
                            <td class="tablenumberbox">${team.goalDifference}</td>
                            <td class="tablenumberbox">${team.points}</td>
                        `;
                        tableBody.appendChild(row);
                    });
                }
            }
        }
 
        // Add event listener to the select element
        select.addEventListener('change', event => {
            const selectedRankingName = event.target.value;
            populateTable(selectedRankingName);
        });
 
        // Populate table with default selected ranking
        populateTable(rankings[0].name); // Default to the first ranking
    });