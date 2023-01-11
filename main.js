fetch('http://localhost:5000/inmuebles')
  .then(response => response.json())
  .then(inmuebles => console.log(inmuebles))
  .catch(error => console.error(error));

  document.querySelector('button').addEventListener('click', event => {
    event.preventDefault()
    
    const form = event.target.form
    const ubicacion = form.elements.ubicacion.value
    const tipo = form.elements.tipo.value
  
    const url = `/data/db?ubicacion=${ubicacion}&tipo=${tipo}`
  
    fetch(url)
      .then(response => response.json())
      .then(inmuebles => console.log(db))
      .catch(error => console.error(error))
  })
  