const btnSearch = document.getElementById('btnsearch');

function searchCondition() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countries = data.countries.find(item => item.name.toLowerCase() === input);
        const temples=data.temples.find(item => item.name.toLowerCase() === input);
        const beaches=data.beaches.find(item => item.name.toLowerCase() === input);
        if (countries) {
            countries.cities.forEach(item => {
                resultDiv.innerHTML += `
                    <div class="result-card">
                        <img src="${item.imageUrl}">
                        <div class="result-content">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <a href="#" class="visit-btn">Visit</a>
                        </div>
                    </div>
                `;
        })
        } 
        else if(temples){
            temples.forEach(item => {
                resultDiv.innerHTML += `
                    <div class="result-card">
                        <img src="${item.imageUrl}">
                        <div class="result-content">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <a href="#" class="visit-btn">Visit</a>
                        </div>
                    </div>
                `;
        })
        }
        else if(beaches){
            beaches.forEach(item => {
                resultDiv.innerHTML += `
                    <div class="result-card">
                        <img src="${item.imageUrl}">
                        <div class="result-content">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <a href="#" class="visit-btn">Visit</a>
                        </div>
                    </div>
                `;
        })
        }
        else {
            resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

function clearResults() {
    document.getElementById("search").value = "";
    document.getElementById("results").innerHTML = "";
}

btnSearch.addEventListener('click', searchCondition);
