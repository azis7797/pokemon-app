const pokemonData = [
    {
      id: '1001',
      name: 'Bulbasaur',
      type: 'Grass',
      image: './images/bulbasaur.png',
      health: 144,
      attack: 32,
      defense: 50,
    },
    {
      id: '1013',
      name: 'Kabuto',
      type: 'Rock',
      image: './images/kabuto.png',
      health: 220,
      attack: 40,
      defense: 60,
    }
  ];
  
  const container = document.getElementById('pokemon-container');
  const searchInput = document.getElementById('search');
  const sortSelect = document.getElementById('sort');
  const toggleTheme = document.getElementById('toggleTheme');
  const toggleView = document.getElementById('toggleView');
  
  let isGrid = true;
  let theme = 'dark';
  
  function renderCards() {
    const searchTerm = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;
  
    let filtered = pokemonData.filter(p =>
      p.name.toLowerCase().includes(searchTerm)
    );
  
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'health') {
      filtered.sort((a, b) => b.health - a.health);
    }
  
    container.innerHTML = '';
    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'pokemon-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div>
          <h3>${p.name}</h3>
          <p>#${p.id}</p>
          <p>Type: ${p.type}</p>
          <p>HP: ${p.health}</p>
          <p>ATK: ${p.attack}</p>
          <p>DEF: ${p.defense}</p>
        </div>
      `;
      container.appendChild(card);
    });
  
    container.className = isGrid ? 'grid-view' : 'list-view';
  }
  
  searchInput.addEventListener('input', renderCards);
  sortSelect.addEventListener('change', renderCards);
  toggleView.addEventListener('click', () => {
    isGrid = !isGrid;
    toggleView.textContent = isGrid ? 'Grid' : 'List';
    renderCards();
  });
  toggleTheme.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.body.className = theme;
    toggleTheme.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  });
  
  renderCards();