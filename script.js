// Modo Visualização Apenas

const celulas = document.querySelectorAll("tbody td");

celulas.forEach((celula) => {

  // Ignora coluna do nome
  if (celula.cellIndex === 0) return;

  // Remove cursor
  celula.style.cursor = "default";

  // Se a célula tiver estrelas
  if (celula.innerHTML.includes("⭐")) {

    const quantidade = (celula.innerHTML.match(/⭐/g) || []).length;

    let estrelasHTML = "";

    for (let i = 1; i <= quantidade; i++) {
      estrelasHTML += "⭐";

      if (i % 5 === 0) {
        estrelasHTML += "<br>";
      }
    }

    celula.innerHTML = estrelasHTML;
  }

});