const marker1 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" stroke="darkslateblue" stroke-width="10" fill="none" />
</svg>`;

const marker2 = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="30" x2="70" y2="70" stroke="darkslateblue" stroke-width="10" stroke-linecap="round" />
  <line x1="70" y1="30" x2="30" y2="70" stroke="darkslateblue" stroke-width="10" stroke-linecap="round" />
</svg>`;

const playerTurno = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 20 V80 M30 60 L50 80 L70 60" stroke="darkslateblue" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const PLAYER_1 = 0;
const PLAYER_2 = 1;

document.addEventListener("DOMContentLoaded", () => {
  const player1Element = document.getElementById("jugador1");
  player1Element.getElementsByClassName("marcador")[0].innerHTML = marker1;
  const turnoPlayer1Element = player1Element.getElementsByClassName("turno")[0];
  const player2Element = document.getElementById("jugador2");
  player2Element.getElementsByClassName("marcador")[0].innerHTML = marker2;
  const turnoPlayer2Element = player2Element.getElementsByClassName("turno")[0];

  const marcadores = [marker1, marker2];
  let turno = PLAYER_1;
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
        casilla.innerHTML = turnoMarcador;
      }
    });
    casilla.addEventListener("mouseleave", () => {
      if (!casillas[casilla.id]) {
        casilla.innerHTML = "";
      }
    });
    casilla.addEventListener("mouseup", () => {
      if (!casillas[casilla.id]) {
        casillas[casilla.id] = true;
        casilla.innerHTML = turnoMarcador;
        turno = ++turno % 2;
        turnoMarcador = marcadores[turno];
        if (turno == PLAYER_1) {
          turnoPlayer1Element.innerHTML = playerTurno;
          turnoPlayer2Element.innerHTML = "";
        } else {
          turnoPlayer2Element.innerHTML = playerTurno;
          turnoPlayer1Element.innerHTML = "";
        }
      }
    });
  });
});
