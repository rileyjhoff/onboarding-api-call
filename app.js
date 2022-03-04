// import functions from fetch.js
import { getPeople, getSpecies, getPlanets, getStarships, getVehicles } from './fetch.js';


// grab DOM elements
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');


// write functions to render data on page
// function to render people data
async function loadPeople() {
    const peopleIndex = await getPeople();

    list.classList.add('people');

    for (let people of peopleIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const birth_year = clone.querySelector('#two');
        const height = clone.querySelector('#three');
        const mass = clone.querySelector('#four');
        
        name.textContent = people.name;
        birth_year.textContent = 'Birth Year: ' + people.birth_year;
        height.textContent = 'Height: ' + people.height + 'cm';        
        mass.textContent = 'Weight: ' + people.mass + 'kg';

        list.appendChild(clone);
    }
}

// function to render species data
async function loadSpecies() {
    const speciesIndex = await getSpecies();

    list.classList.add('species');

    for (let species of speciesIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const classification = clone.querySelector('#two');
        const language = clone.querySelector('#three');
        const average_height = clone.querySelector('#four');
        const average_lifespan = clone.querySelector('#five');
        
        name.textContent = species.name;
        classification.textContent = 'Classification: ' + species.classification;
        language.textContent = 'Language: ' + species.language;
        average_height.textContent = 'Average Height: ' + species.average_height;
        average_lifespan.textContent = 'Average Lifespan: ' + species.average_lifespan;

        list.appendChild(clone);
    }
}

// function to render planets data
async function loadPlanets() {
    const planetsIndex = await getPlanets();

    list.classList.add('planets');

    for (let planets of planetsIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const terrain = clone.querySelector('#two');
        const climate = clone.querySelector('#three');
        
        name.textContent = planets.name;
        terrain.textContent = 'Terrain: ' + planets.terrain;
        climate.textContent = 'Climate: ' + planets.climate;

        list.appendChild(clone);
    }
}
// function to render starships data
async function loadStarships() {
    const starshipsIndex = await getStarships();

    list.classList.add('starships');

    for (let starships of starshipsIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const manufacturer = clone.querySelector('#two');
        const crew = clone.querySelector('#three');
        
        name.textContent = starships.name;
        manufacturer.textContent = 'Manufacturer: ' + starships.manufacturer;
        crew.textContent = 'Crew: ' + starships.crew;

        list.appendChild(clone);
    }
}

// function to render vehicles data
async function loadVehicles() {
    const vehiclesIndex = await getVehicles();

    list.classList.add('vehicles');

    for (let vehicles of vehiclesIndex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#one');
        const manufacturer = clone.querySelector('#two');
        const crew = clone.querySelector('#three');
        
        name.textContent = vehicles.name;
        manufacturer.textContent = 'Manufacturer: ' + vehicles.manufacturer;
        crew.textContent = 'Crew: ' + vehicles.crew;

        list.appendChild(clone);
    }
}


// set event listeners 
selectEl.addEventListener('change', async(e) => {
    const selected = e.target.value;

    if (selected === 'people') {
        list.innerHTML = '';
        await loadPeople();
    } else if (selected === 'species') {
        list.innerHTML = '';
        await loadSpecies();
    } else if (selected === 'planets') {
        list.innerHTML = '';
        await loadPlanets();
    } else if (selected === 'starships') {
        list.innerHTML = '';
        await loadStarships();
    } else if (selected === 'vehicles') {
        list.innerHTML = '';
        await loadVehicles();
    }
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
