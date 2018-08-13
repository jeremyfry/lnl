console.log(pokemon);
const holder = document.querySelector('.pokemon');

const typeToString = (type) => {
    return {
        '\u8349': 'grass',
        '\u708e': 'fire'
    }[type]
}

const linkUpButtons = (id) => {
    const element = document.querySelector(`#${id}`);
    element.addEventListener('click', () => {
        element.querySelector('.stats').classList.add('visible');
    });
}

pokemon.forEach((poke) => {
    id = `pokemon-${poke.id}`;
    holder.insertAdjacentHTML('beforeend', `
        <div id="${id}" class="${typeToString(poke.type[0])}">
            <h2>${poke.ename}</h2>
            <button>Show Stats</button>
            <div class="stats">
                <span>Attack: ${poke.base.Attack}</span>
            </div>
        </div>
    `);
    linkUpButtons(id);
});

