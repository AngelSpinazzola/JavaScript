let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'f7250b9d265b0d3e7ec07e4f8d6ed78d'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const viento = data.wind.speed
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

    const HumedadInfo = document.createElement('p')
    HumedadInfo.textContent = `La humedad es: ${humedad}%`

    const vientoInfo = document.createElement('p')
    vientoInfo.textContent = `Viento: ${viento}Km/h`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = 'https://openweathermap.org/img/wn/10d@2x.png'

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorológica es: ${descripcion}` 

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(HumedadInfo)
    divDatosClima.appendChild(vientoInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}
 