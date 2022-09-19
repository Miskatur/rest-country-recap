const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    // console.log(countries[0])
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries')
    // console.log(countriesHTML[1])
    // To erase the , from an array just use a .join(' ') 
    container.innerHTML = countriesHTML.join(' ');
}
const getCountryHTML = country => {
    const { name, region, population, capital, flags, area } = country;

    return `
<div class="country-box">
<h2>${name.common}</h2>
<img src="${flags.png}"/>

<p>Official Name : ${name.official} <br>
Continent -  ${region} <br>
Area - ${area} <br>
Population - ${population} <br>
Capital - ${capital}

</p>
</div>
`
}

// We can Use this 3 type object desturcturing 

// option 1
// const getCountryHTML = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }

// option 2
// const getCountryHTML = country =>{
//     // option 1
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }


// option 3
// const getCountryHTML = ({name, flags, area, region}) =>{
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <p>Area: ${area}</p>
//             <p>Continet: ${region}</p>
//             <img src="${flags.png}">
//         </div>
//     `
// }

loadCountries()