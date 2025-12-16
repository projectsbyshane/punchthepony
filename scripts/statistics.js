const apiUrl = 'https://lichess.org/api/user/punchthepony';
        const usernameElement = document.getElementById('Statistic_Username');
        const blitzElement = document.getElementById('Statistic_Blitz');
        const rapidElement = document.getElementById('Statistic_Rapid');

        function getRating(perfsObject, gameType) {
            const rating = perfsObject?.[gameType]?.rating;
            return rating ?? "N/A";
        }

        async function fetchUserStats() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (usernameElement) {
                    usernameElement.innerText = data.username || "Unknown User";
                }

                const blitzRating = getRating(data.perfs, 'blitz');
                if (blitzElement) {
                    blitzElement.innerText = blitzRating;
                }

                const rapidRating = getRating(data.perfs, 'rapid');
                if (rapidElement) {
                    rapidElement.innerText = rapidRating;
                }

            } catch (error) {
                console.error('❌ Error fetching and processing data:', error);
                const errorMessage = `Failed to load stats. Error: ${error.message}`;

                [usernameElement, blitzElement, rapidElement, puzzleElement].forEach(el => {
                    if (el) el.innerText = 'Error loading stat.';
                });
            }
        }

        fetchUserStats();