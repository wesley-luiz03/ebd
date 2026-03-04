// Modo Visualização Apenas

const celulas = document.querySelectorAll("tbody td");

celulas.forEach((celula) => {
  if (celula.cellIndex === 0) return;

  celula.style.cursor = "default";
});