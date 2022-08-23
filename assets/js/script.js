// string methods

// let country = "Azerbaycan";
// let num = 66;

// console.log(num.toString());

// console.log(country.length);

// for (const item of country) {
//       console.log(item);
// }
// console.log(country[1]); 


// let country = "Azerbaycan";

// console.log(country.slice(4,10));

// console.log(country.substring(0,10));

// let country = "Azerbaycan dovleti";

// console.log(country.substring(0,7));

// console.log(country.replace("Azerbaycan","Turkiye"));

// console.log(country.replace("Azerbaycan","Turkiye"));

// let country = "Azerbaycan";
// let addStr = "         Respublikasi"

// console.log(country.concat(addStr));
// console.log(addStr.trim());

// let country = "Azerbaycan";

// console.log(country.startsWith("a"));

// if (country.startsWith("A")) {
//     console.log(country);

// }else{
//     console.log("No");
// }


// let country = "Azerbaycan";

// console.log(country.charAt(4));

// console.log(country.charCodeAt(4));

// let country = "Azerbaycan-Respublikasi-Tehsil Nazirliyi";

// let result = country.split("-")

// console.log(result);

// let country = "Azerbaycan-Respublikasi-Tehsil Nazirliyi";

// console.log(country.indexOf("Azerbaycan"));


//    function search(str) {
//     if (country.indexOf(str)== -1) {
//       console.log("Not found");
//       return;
//     }
//     console.log("Found");
//    }

//    search("Azerbaycan")

// let country = "Azerbaycan-Respublikasi-Tehsil-Azerbaycan Nazirliyi";


// console.log(country.indexOf("Azerbaycan",10));

// let country = "Azerbaycan-Respublikasi-Tehsil Nazirliyi";

// let countryIndex = country.indexOf("Tehsil",15)
// let result = country.substring(0,countryIndex) + "...";

// console.log(countryIndex);
// console.log(result);


//  let city = "Siyezen";

//  console.log(city.includes("i"));


//  console.log(Number(true));
//  console.log(Number(false));
//  console.log(Number("10"));
//  console.log(Number("John"));


// let count = "66";

// console.log(typeof count);

// let result = parseInt(count)

// console.log(typeof result);


// let users = ["Samir","Esqin","Nermin","Seadet","Fidan"];

// console.log(users.toString());

// console.log(users.join(" "));

//  console.log(users.push("Ramil"));

//   users.pop();

// users.unshift("Hesen");

//  console.log(users);

// let users = ["Samir","Esqin","Nermin","Seadet","Fidan"];


// const myCar = ["Bmw","Audi","Mercedes"];
// const myCarModel = ["Alpina","Q7","S500"];

// const myCars = myCar.concat(myCarModel)
// console.log(myCars);

// let users = ["Samir","Esqin","Nermin","Seadet","Fidan"];


// let newArr = users.splice(2,0,"Ayxan")
// console.log(newArr);

// users.splice(5,0,"Haqverdi")
// console.log(users);

// console.log(users);

// let result = users.slice(2,3);

// console.log(result);


//const users = ["Samir","Esqin","Nermin","Seadet","Fidan"];

// const  person = users.slice(1,4);

// console.log(person);

// users.reverse();

// console.log(users);


// const points = [30, 55, 10, 12, 22, 11];

// console.log(points);

// points.sort(function(a,b){return a-b});  

// console.log(points);

const users = ["Samir","Esqin","Nermin","Seadet","Fidan"];

users.sort()
console.log(users);

