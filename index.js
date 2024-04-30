function bewertePunktzahl(punktzahl) {
  if (punktzahl > 90) {
    console.log("Sehr gut!");
  } else if (punktzahl >= 80) {
    console.log("Gut!");
  } else if (punktzahl >= 70) {
    console.log("Befriedigend!");
  } else if (punktzahl >= 60) {
    console.log("Ausreichend!");
  } else {
    console.log("Nicht bestanden!");
  }
}

let punktzahl = 85;

bewertePunktzahl(punktzahl);
