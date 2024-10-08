document.getElementById('trainForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission

    const stationCode = document.getElementById('station').value;
    fetchTrainDepartures(stationCode);
});

async function fetchTrainDepartures(stationCode) {
    const apiKey = '58ec9c6ac836426eab93d82d4fab5054';  // Replace with your actual NS API Key
    const url = `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=${stationCode}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);  // Log API response to inspect it

        displayTrainDepartures(data.payload.departures);
    } catch (error) {
        console.error('Error fetching train departures:', error);
    }
}

function displayTrainDepartures(departures) {
    const resultsDiv = document.getElementById('departureResults');
    resultsDiv.innerHTML = '';  // Clear previous results

    if (departures.length === 0) {
        resultsDiv.innerHTML = '<p>No train departures found for this station.</p>';
        return;
    }

    departures.forEach(departure => {
        const trainInfo = document.createElement('div');
        trainInfo.classList.add('train-info');

        trainInfo.innerHTML = `
            <p><strong>Destination:</strong> ${departure.direction}</p>
            <p><strong>Departure Time:</strong> ${new Date(departure.plannedDateTime).toLocaleTimeString()}</p>
            <p><strong>Platform:</strong> ${departure.plannedTrack}</p>
            <p><strong>Status:</strong> ${departure.cancelled ? 'Cancelled' : 'On Time'}</p>
        `;

        resultsDiv.appendChild(trainInfo);
    });
}
