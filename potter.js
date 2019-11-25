let baseURL = "https://www.potterapi.com/v1/characters/";
let apiKey = "$2a$10$/oZHYzJCIAMLDtwgmxKsJeo0m9hVdHmlRfWw3UqnOIi2vwlN1msMG";
let url;

// fetch(
//   "https://www.potterapi.com/v1/characters/?key=$2a$10$/oZHYzJCIAMLDtwgmxKsJeo0m9hVdHmlRfWw3UqnOIi2vwlN1msMG"
// )
//   .then(res => res.json())
//   .then(json => console.log(json));

const searchFirst = document.querySelector(".form-first");
const searchLast = document.querySelector(".form-last");
const searchForm = document.querySelector("form");
const submitButton = document.querySelector(".submit");

const section = document.querySelector("section");

searchForm.addEventListener("submit", fetchCharacter);

section.style.display = "none";

function fetchCharacter(e) {
  e.preventDefault();

  if (searchLast.value == "") {
    firstName =
      searchFirst.value.charAt(0).toUpperCase() + searchFirst.value.slice(1);
    url = baseURL + "?key=" + apiKey + "&name=" + firstName;
  } else {
    firstName =
      searchFirst.value.charAt(0).toUpperCase() + searchFirst.value.slice(1);
    lastName =
      searchLast.value.charAt(0).toUpperCase() + searchLast.value.slice(1);
    url = baseURL + "?key=" + apiKey + "&name=" + firstName + "%20" + lastName;
  }

  //add an if statement if a name was entered that is not listed in the API
  //add code to change all characters exlcuding the first one to lower case

  fetch(url)
    .then(function(result) {
      return result.json();
    })
    .then(function(json) {
      displayCharacter(json);
    });
}

function displayCharacter(json) {
  // while (section.firstChild) {
  //   section.removeChild(section.firstChild);
  // }

  section.style.display = "block";
  
  let name = json[0].name;
  let house = json[0].house;
  let patronus = json[0].patronus;
  let wand = json[0].wand;

  if(patronus == undefined) {
    patronus = "Still a mystery"
  };
  if(wand == undefined) {
    wand = "Still a mystery"
  };

  document.getElementById("namePlace").innerHTML = 'Name: '+ name;
  document.getElementById("housePlace").innerHTML = 'House: ' + house;
  document.getElementById("patronusPlace").innerHTML = 'Patronus: ' + patronus;
  document.getElementById("wandPlace").innerHTML = 'Wand: ' + wand;


}
