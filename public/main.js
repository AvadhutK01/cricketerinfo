const searchForm = document.getElementById("search-form");
const btnSubmit = document.getElementById('btnSubmit');
const resultdiv = document.getElementById('data-div');
const cricketerNameInput = document.getElementById("cricketerName");
const dobInput = document.getElementById("dob");
const ImageInput = document.getElementById("pUrl");
const birthPlaceInput = document.getElementById("birthPlace");
const carrerInput = document.getElementById("carrer");
const NOMInput = document.getElementById("NOM");
const scoreInput = document.getElementById("score");
const FiftiesInput = document.getElementById("Fifties");
const CenturiesInput = document.getElementById("Centuries");
const WicketsInput = document.getElementById("Wickets");
const AverageInput = document.getElementById("Average");
const mainForm = document.getElementById("main-form")

mainForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (btnSubmit.textContent == "Update") {
        let id = btnSubmit.getAttribute("id")
        mainForm.action = `/update-data/${id}`;
        mainForm.method = "POST";
    } else {
        mainForm.action = "/post-data";
        mainForm.method = "POST";
    }
    mainForm.submit();
})

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fetchData();
});

const fetchData = async () => {
    try {
        const cricketerName = document.getElementById('search').value;
        const response = await axios.get(`/get-search/${cricketerName}`);
        displayData(response.data);
    } catch (error) {
        console.error(error);
        resultdiv.textContent = 'Please add cricketer name in search box to search';
    }
};


const displayData = async (data) => {
    resultdiv.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach((item) => {

            const cricketerCard = document.createElement('div');
            cricketerCard.className = 'card mb-3';
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card-body';
            const imageDiv = document.createElement('div');
            imageDiv.className = 'position-absolute top-0 end-0 p-2';
            const cricketerImage = document.createElement('img');
            cricketerImage.src = item.pUrl;
            cricketerImage.className = 'img-fluid';
            imageDiv.appendChild(cricketerImage);
            const cricketerName = document.createElement('h5');
            cricketerName.className = 'card-title';
            cricketerName.innerHTML = `<h5>${item.cricketerName}</h5>`;
            const dob = document.createElement('p');
            dob.className = 'card-text';
            dob.innerHTML = `<b>Date of Birth:</b> ${item.dob}`;
            const birthPlace = document.createElement('p');
            birthPlace.className = 'card-text';
            birthPlace.innerHTML = `<b>BirthPlace:</b> ${item.birthPlace}`;
            const nom = document.createElement('p');
            nom.className = 'card-text';
            nom.innerHTML = `<b>No of Matches Played:</b> ${item.NOM}`;
            const score = document.createElement('p');
            score.className = 'card-text';
            score.innerHTML = `<b>Score:</b> ${item.score}`;
            const fifties = document.createElement('p');
            fifties.className = 'card-text';
            fifties.innerHTML = `<b>Fifties:</b> ${item.Fifties}`;
            const centuries = document.createElement('p');
            centuries.className = 'card-text';
            centuries.innerHTML = `<b>Centuries:</b> ${item.Centuries}`;
            const wickets = document.createElement('p');
            wickets.className = 'card-text';
            wickets.innerHTML = `<b>Wickets:</b> ${item.Wickets}`;
            const average = document.createElement('p');
            average.className = 'card-text';
            average.innerHTML = `<b>Average:</b> ${item.Average}`;
            const carrer = document.createElement('p');
            carrer.className = 'card-text';
            carrer.innerHTML = `<b>Carrer:</b> ${item.carrer}`;
            const editbtn = document.createElement('button');
            editbtn.textContent = 'Edit';
            editbtn.className = 'btn btn-primary';
            const deletebtn = document.createElement('button');
            deletebtn.textContent = 'Delete';
            deletebtn.className = 'btn btn-danger m-3';

            cardDiv.appendChild(imageDiv);
            cardDiv.appendChild(cricketerName);
            cardDiv.appendChild(dob);
            cardDiv.appendChild(birthPlace);
            cardDiv.appendChild(nom);
            cardDiv.appendChild(score);
            cardDiv.appendChild(fifties);
            cardDiv.appendChild(centuries);
            cardDiv.appendChild(wickets);
            cardDiv.appendChild(average);
            cardDiv.appendChild(carrer);
            cardDiv.appendChild(editbtn);
            cardDiv.appendChild(deletebtn);

            cricketerCard.appendChild(cardDiv);
            resultdiv.appendChild(cricketerCard);

            editbtn.addEventListener('click', () => {
                setUpdate(item);
                resultdiv.removeChild(cricketerCard);
            });

            deletebtn.addEventListener('click', () => {
                deleteItem(item.id);
            });

        });
    } else {
        resultdiv.textContent = 'No matching cricketer found.';
    }
};
function setUpdate(item) {
    cricketerNameInput.value = item.cricketerName;
    ImageInput.value = item.pUrl;
    birthPlaceInput.value = item.birthPlace;
    scoreInput.value = item.score;
    dobInput.value = item.dob;
    FiftiesInput.value = item.Fifties;
    NOMInput.value = item.NOM;
    CenturiesInput.value = item.Centuries;
    WicketsInput.value = item.Wickets;
    AverageInput.value = item.Average;
    carrerInput.value = item.carrer;
    btnSubmit.textContent = "Update";
    btnSubmit.setAttribute("id", item.id);
}

async function deleteItem(id) {
    await axios.post('/delete-data', { id });
    window.location.href = '/';
}