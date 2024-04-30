function berechneTicketPreis(alter) {
  if (alter < 6) {
    console.log("Die Fahrt ist kostenlos.");
  } else if (alter >= 6 && alter <= 17) {
    console.log("Kinderpreis");
  } else if (alter >= 18 && alter <= 66) {
    console.log("Vollpreis");
  } else if (alter > 67) {
    console.log("Seniorenpreis");
  } else {
    console.log("Ungültiges Alter.");
  }
}

let alter = 10;

berechneTicketPreis(alter);
