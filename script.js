const input = document.getElementById('input-pokemon');
const btn = document.getElementById('btn-buscar');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('error-msg');
const card = document.getElementById('card');

function mostrarLoading() {
    loading.style.display = 'block';
    card.style.display = 'none';
    errorMsg.style.display = 'none';
}

function mostrarError(mensaje) {
    loading.style.display = 'none';
    errorMsg.style.display = 'block';
    errorMsg.textContent = mensaje;
    card.style.display = 'none';
}

function mostrarCard(data) {
    loading.style.display = 'none';
    errorMsg.style.display = 'none';
    card.style.display = 'block';

    document.getElementById('poke-img').src = data.sprites.front_default;
    document.getElementById('poke-nombre').textContent = data.name;
    document.getElementById('poke-id').textContent = '#' + data.id;
    document.getElementById('poke-altura').textContent = (data.height / 10) + ' m';
    document.getElementById('poke-peso').textContent = (data.weight / 10) + ' kg';

    const tiposEl = document.getElementById('poke-tipos');
    tiposEl.innerHTML = data.types
        .map(t => `<span class="type-badge type-${t.type.name}">${t.type.name}</span>`)
        .join('');
}


async function buscarPokemon() {
    const valor = input.value.trim().toLowerCase();

    if (!valor) return;

    mostrarLoading();

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);

        if (!respuesta.ok) {
            throw new Error('Pokémon no encontrado');
        }

        const data = await respuesta.json();
        mostrarCard(data);

    } catch (error) {
        mostrarError('No se encontró ese Pokémon. Verificá el nombre.');
    }
}

btn.addEventListener('click', buscarPokemon);

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') buscarPokemon();
});