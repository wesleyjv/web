document.getElementById('trainForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission

    const stationCode = document.getElementById('station').value;
    fetchTrainDepartures(stationCode);
});

async function fetchTrainDepartures(stationCode) {
    const apiKey = 'e65519cdc96d48ad90fd432e4bab1aaa';  // Replace with your actual NS API Key
    const url = `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=${stationCode}`;
  /* Ik ben oprecht gekookt */
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        // Log both the response and status
        console.log('Response Status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Full API Response:', data);  // Log the raw response

        if (data.payload && data.payload.departures) {
            displayTrainDepartures(data.payload.departures);
        } else {
            console.error('No departures found in the API response');
        }
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
