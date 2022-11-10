
  fetch('http://jsonplaceholder.typicode.com/users')
  .then((T) => {

        T.json()
        .then(function(listaDePessoas){

            listaDePessoas.forEach(function(pessoa){
                console.log(pessoa.name, pessoa.email)
            })

        }) 
  }
  )


