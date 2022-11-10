
  fetch('http://jsonplaceholder.typicode.com/users')
  .then((T) => {

        T.json()
        .then(function(listaDePessoas){

            listaDePessoas.forEach(function(pessoa){
                console.log(pessoa.name, pessoa.email)
                const li = document.createElement('li')
                li.innerHTML = `NOME: ${listaDePessoas.name}`
              document.getElementById('exec6').appendChild('li')
            })

        
            // const li = document.createElement('li')
            // li.innerHTML = `NOME: ${listaDePessoas.name}`
            // document.getElementById('exec6').appendChild('li')

        }) 
    }
  
  )


