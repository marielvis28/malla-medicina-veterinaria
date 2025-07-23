fetch('materias.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('grid');
    data.forEach(item => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.innerText = item.nombre;
      if (item.cursada) cell.classList.add('cursada');
      if (item.requiere) cell.classList.add('requiere');
      grid.appendChild(cell);
    });
  });