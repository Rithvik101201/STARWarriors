const card = document.querySelector(".card");
const btn = document.querySelector("#btn");

const characterPhotos = {
  "Luke Skywalker": "luke_skywalker.png",
  "C-3PO": "c3po.png",
  "R2-D2": "r2d2.png",
  "Darth Vader": "darth_vader.png",
  "Leia Organa": "leia_organa.png",
  "Owen Lars": "owen_lars.png",
  "Beru Whitesun lars": "beru_lars.png",
  "Obi-Wan Kenobi": "obi_wan_kenobi.png",
  "R5-D4": "r5d4.png",
  "Biggs Darklighter": "biggs_darklighter.png",
  "Wedge Antilles": "wedge_antilles.png",
  "Anakin Skywalker": "anakin_skywalker.png",
  "Wilhuff Tarkin": "wilhuff_tarkin.png",
  "Chewbacca": "chewbacca.png",
  "Han Solo": "han_solo.png",
  "Greedo": "greedo.png",
  "Jabba Desilijic Tiure": "jabba.png",
  "Jek Tono Porkins": "jek_tono_porkins.png",
  "Yoda": "yoda.png",
  "Palpatine": "palpatine.png"
};

async function getPlanetName(url) {
  const res = await fetch(url);
  const planetData = await res.json();
  return planetData["name"];
}

 try {
    const url1 = "https://www.swapi.tech/api/people?page=1&limit=10";
    const res1 = await fetch(url1);
    const data1 = await res1.json();

    for (let ch of data1["results"]) {
      const name = ch.name;
      const birthYear = ch.birth_year;
      const skinColor = ch.skin_color;
      const height = ch.height;
      const image = `img/${characterPhotos[name]}`;
      const homeWorldUrl = ch.homeworld;

      const planetName = await getPlanetName(homeWorldUrl);

      characters.push({
        name,
        birthYear,
        skinColor,
        height,
        planetName,
        image,
      });
    }
  } catch (error) {
    console.log("Error while fetching the data", error);
  }

  try {
    const url2 = "https://www.swapi.tech/api/people?page=2&limit=10";
    const res2 = await fetch(url2);
    const data2 = await res2.json();

    for (let ch of data2["results"]) {
      const name = ch.name;
      const birthYear = ch.birth_year;
      const skinColor = ch.skin_color;
      const height = ch.height;
      const image = `img/${characterPhotos[name]}`;
      const homeWorldUrl = ch.homeworld;

      const planetName = await getPlanetName(homeWorldUrl);

      characters.push({
        name,
        birthYear,
        skinColor,
        height,
        planetName,
        image,
      });
    }
  } catch (error) {
    console.log("Error while fetching the data", error);
  }

  return characters;
}

let generateCard = (character) => {
  card.innerHTML = `
    <div class="planet">
    <span>Planet <br></span>
    <span>${character["planetName"]}</span>
</div>

<img src="${character["image"]}" alt="${character["name"]}">

<h2>${character["name"]}</h2>

<div class="details">
    <div>
        <h3>${character["skinColor"]}</h3>
        <p>Skin color</p>
    </div>
    <div>
        <h3>${character["height"]}</h3>
        <p>Height</p>
    </div>
    <div>
        <h3>${character["birthYear"]}</h3>
        <p>Birth</p>
    </div>
</div>
  `;
};

btn.addEventListener("click", async () => {
  const charactersData = await getCharactersDetails();
  const randomCharacter =
    charactersData[Math.floor(Math.random() * charactersData.length)];
  generateCard(randomCharacter);
});

window.addEventListener("load", async () => {
  const charactersData = await getCharactersDetails();
  const randomCharacter =
    charactersData[Math.floor(Math.random() * charactersData.length)];
  generateCard(randomCharacter);
});
