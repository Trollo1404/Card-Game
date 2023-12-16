

let playerCards = [
    {
        title: "F-22",
        image: "assets/F22.jpg",
        // Health 80%
        health: "linear-gradient(90deg, rgba(0,150,0,1) 60%, rgba(0,150,0,0.1) 62%)",
        // Attack 75%
        attack: "linear-gradient(90deg, rgba(150,0,0,1) 75%, rgba(150,0,0,0.1) 77%)",
        // Attack 15%
        evasion: "linear-gradient(90deg, rgba(0,0,150,1) 15%, rgba(0,0,150,0.1) 17%)"
    },

    {
        title: "F-18",
        image: "assets/F18.jpg",
        // Health 75%
        health: "linear-gradient(90deg, rgba(0,150,0,1) 75%, rgba(0,150,0,0.1) 77%)",
        // Attack 60%
        attack: "linear-gradient(90deg, rgba(150,0,0,1) 60%, rgba(150,0,0,0.1) 62%)",
        // Evasion 15%
        evasion: "linear-gradient(90deg, rgba(0,0,150,1) 15%, rgba(0,0,150,0.1) 17%)"
    },

    {
        title: "F-16",
        image: "assets/F16.jpg",
        // Health 65%
        health: "linear-gradient(90deg, rgba(0,150,0,1) 65%, rgba(0,150,0,0.1) 67%)",
        // Attack 85%
        attack: "linear-gradient(90deg, rgba(150,0,0,1) 85%, rgba(150,0,0,0.1) 87%)",
        // Evasion 5%
        evasion: "linear-gradient(90deg, rgba(0,0,150,1) 5%, rgba(0,0,150,0.1) 7%)"
    },

    {
        title: "F-15",
        image: "assets/F15.jpg",
        // Health 80%
        health: "linear-gradient(90deg, rgba(0,150,0,1) 80%, rgba(0,150,0,0.1) 82%)",
        // Attack 75%
        attack: "linear-gradient(90deg, rgba(150,0,0,1) 75%, rgba(150,0,0,0.1) 77%)",
        // Evasion 20%
        evasion: "linear-gradient(90deg, rgba(0,0,150,1) 20%, rgba(0,0,150,0.1) 22%)"
    },

    {
        title: "F-14",
        image: "assets/F14.jpg",
        // Health 70%
        health: "linear-gradient(90deg, rgba(0,150,0,1) 70%, rgba(0,150,0,0.1) 72%)",
        // Attack 50%
        attack: "linear-gradient(90deg, rgba(150,0,0,1) 50%, rgba(150,0,0,0.1) 52%)",
        // Evasion 5%
        evasion: "linear-gradient(90deg, rgba(0,0,150,1) 5%, rgba(0,0,150,0.1) 7%)"
    },
]
// Enemy Cards

let MIG35 = {
    title: "MIG-35",
    image: "assets/MIG35.jpg",
    // Health 70%
    health: "linear-gradient(90deg, rgba(0,150,0,1) 70%, rgba(0,150,0,0.1) 72%)",
    // Attack 75%
    attack: "linear-gradient(90deg, rgba(150,0,0,1) 75%, rgba(150,0,0,0.1) 77%)",
    // Evasion 20%
    evasion: "linear-gradient(90deg, rgba(0,0,150,1) 20%, rgba(0,0,150,0.1) 22%)"
}

let MIG29 = {
    title: "MIG-29",
    image: "assets/MIG29.jpg",
    // Health 60%
    health: "linear-gradient(90deg, rgba(0,150,0,1) 60%, rgba(0,150,0,0.1) 62%)",
    // Attack 80%
    attack: "linear-gradient(90deg, rgba(150,0,0,1) 80%, rgba(150,0,0,0.1) 82%)",
    // Evasion 15%
    evasion: "linear-gradient(90deg, rgba(0,0,150,1) 15%, rgba(0,0,150,0.1) 17%)"
}

let F4 = {
    title: "F-4F",
    image: "assets/F4F.jpg",
    // Health 80%
    health: "linear-gradient(90deg, rgba(0,150,0,1) 80%, rgba(0,150,0,0.1) 82%)",
    // Attack 64%
    attack: "linear-gradient(90deg, rgba(150,0,0,1) 64%, rgba(150,0,0,0.1) 67%)",
    // Evasion 10%
    evasion: "linear-gradient(90deg, rgba(0,0,150,1) 10%, rgba(0,0,150,0.1) 12%)"
}

let TORNADO = {
    title: "TORNADO",
    image: "assets/TORNADO.jpg",
    // Health 80%
    health: "linear-gradient(90deg, rgba(0,150,0,1) 80%, rgba(0,150,0,0.1) 82%)",
    // Attack 60%
    attack: "linear-gradient(90deg, rgba(150,0,0,1) 60%, rgba(150,0,0,0.1) 62%)",
    // Evasion 15%
    evasion: "linear-gradient(90deg, rgba(0,0,150,1) 15%, rgba(0,0,150,0.1) 17%)"
}

let player_Card_1 = {
    title: document.getElementById("title_card_1"),
    image: document.getElementById("image_card_1"),
    health: document.getElementById("health_card_1"),
    attack: document.getElementById("attack_card_1"),
    evasion: document.getElementById("evasion_card_1")
}

let player_Card_2 = {
    title: document.getElementById("title_card_2"),
    image: document.getElementById("image_card_2"),
    health: document.getElementById("health_card_2"),
    attack: document.getElementById("attack_card_2"),
    evasion: document.getElementById("evasion_card_2")
}

let player_Card_3 = {
    title: document.getElementById("title_card_3"),
    image: document.getElementById("image_card_3"),
    health: document.getElementById("health_card_3"),
    attack: document.getElementById("attack_card_3"),
    evasion: document.getElementById("evasion_card_3")
}

let card_1;

// Generate a 1 between 0 and 10, including 10
function generateRandomInteger(max) {
    card_1 = (Math.floor(Math.random() * (max)));
    console.log(card_1);
}

function setup(){
    player_Card_1.title.innerText = playerCards[card_1].title;
    player_Card_1.image.src = playerCards[card_1].image;
    player_Card_1.health.style.backgroundImage = playerCards[card_1].health;
    player_Card_1.attack.style.backgroundImage = playerCards[card_1].attack;
    player_Card_1.evasion.style.backgroundImage = playerCards[card_1].evasion;


}

generateRandomInteger(playerCards.length);
setup();





