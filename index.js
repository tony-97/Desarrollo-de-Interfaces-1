document.addEventListener("DOMContentLoaded", () => {
  const marcadores = ["O", "X"];
  let turno = 0;
  let turnoMarcador = marcadores[turno];
  const casillas = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  Array.from(document.getElementsByClassName("casilla")).forEach((casilla) => {
    casilla.addEventListener("mouseenter", () => {
      if (!casillas[casilla.id]) {
        casilla.textContent = turnoMarcador;
      }
    });
    casilla.addEventListener("mouseleave", () => {
      if (!casillas[casilla.id]) {
        casilla.textContent = "";
      }
    });
    casilla.addEventListener("mouseup", () => {
      if (!casillas[casilla.id]) {
        casillas[casilla.id] = true;
        casilla.textContent = turnoMarcador;
        turno = ++turno % 2;
        turnoMarcador = marcadores[turno];
      }
    });
  });
});
