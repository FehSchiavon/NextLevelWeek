
function populationUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(states => {

            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populationUFs()


function getCities(event) {
    const citySelect = document.querySelector('[name=city]')
    const stateInput = document.querySelector('[name=state]')

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option> "
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf")
    .addEventListener("change", getCities)

// Items de Coleta

const itemsCollet = document.querySelectorAll('.items-grid li')

for (item of itemsCollet) {
    item.addEventListener('click', handleSelectedItem)
}

function handleSelectedItem(event) {
    const itemLi = event.target
    
    // Adicionar o Tirar Classes
    itemLi.classList.toggle('selected')

    const itemId = event.target.dataset.id
}