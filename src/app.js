const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    console.log(players)

    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map((i,index)=>{
        console.log(i)
        if (index % 2 == 0){var role = 'hero'}else{role = 'villian'}
        return items = {
            name: i,
            strength: getRandomStrength(),
            image: `./images/super-${index + 1}.png`,
            type: role
         
        }
    })
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    var hero = players.filter((items) =>{
        return items.type == "hero"

    })

    var villian = players.filter((items) =>{
        return items.type == "villian"

    })

    if (type == 'hero'){
        fragment = hero.map((i) =>{
            return `<div class="player">
            <img src="${i.image}">
            <div class="name">${i.name}</div>
            <div class="strength">${i.strength}</div>
         </div>`
        }).join("")
    }else{
        fragment = villian.map((i) =>{
            return `<div class="player">
            <img src="${i.images}">
            <div class="name">${i.name}</div>
            <div class="strength">${i.strength}</div>
         </div>`
        }).join("")

    }

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}