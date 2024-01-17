

// const submit = document.getElementById("search-btn")



// function getData(e){
//     e.preventDefault();

//     const name = document.getElementById("search").value;
//     let api = `https://pokeapi.co/api/v2/pokemon${name}`;

    

//     fetch(api)
//     .then(res => res.json())
//     .then(data => {
//         document.querySelector(".poke").innerHTML = `           
//             <div class="pokemon">
//             <h5 class="name">${data.name}</h5>
//             <img class="pokeimg" src="${data.sprites.front_default}" alt="${data.name}">
//             <p>${data.species.name}</p>
//         </div>
//         <div class="pokemonInfo"> 
//             <h1>${data.types[0].type.name}</h1>
//             <p>${data.base_experience}</p>
//         </div>`;
//     })
//     .catch(err => console.log("Couldnt Find Pokemon/Item", err))

    

// }


// submit.addEventListener("click", getData);

document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById("search-btn");

    function getData(e) {
        e.preventDefault();
        const nameInput = document.getElementById("search");
        const name = nameInput.value;
        const api = `https://pokeapi.co/api/v2/pokemon/${name}`;

        fetch(api)
            .then(res => res.json())
            .then(data => {
                // Update the content dynamically based on the data received from the API
                document.querySelector(".poke").innerHTML = `
                    <div class="pokemon">
                        <img class="pokeimg" src="${data.sprites.front_default}" alt="${data.name}">
                        
                    </div>
                    <div class="pokemonInfo"> 
                    <h5 class="name">${data.name}</h5>
                        <p>${data.height}dm</p>
                        <p>${data.weight}</p>
                        <h1>${data.types[0].type.name}</h1>
                        <p>${data.base_experience}</p>
                    </div>`;
                    nameInput.value = "";
            })
            .catch(err => {
                console.log("Couldn't Find Pokemon/Item", err);
                document.querySelector(".poke").innerHTML = "<h1>Sorry, Pokemon not found!</h1>";
            });
    }

    submit.addEventListener("click", getData);
});
