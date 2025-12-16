const apiUrl = 'https://lichess.org/api/user/punchthepony';

const blitzElement = document.getElementById('Statistic_Blitz');
const rapidElement = document.getElementById('Statistic_Rapid');

async function fetchUserStats() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Blitz rating extraction and update (now inline)
        const blitzRating = data.perfs?.blitz?.rating ?? "N/A";
        if (blitzElement) {
            blitzElement.innerText = blitzRating;
        }

        // Rapid rating extraction and update (now inline)
        const rapidRating = data.perfs?.rapid?.rating ?? "N/A";
        if (rapidElement) {
            rapidElement.innerText = rapidRating;
        }

    } catch (error) {
        console.error('❌ Failed to fetch Lichess stats. Details:', error);
    }
}

fetchUserStats();