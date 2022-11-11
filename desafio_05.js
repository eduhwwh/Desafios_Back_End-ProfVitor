
fetch('http://jsonplaceholder.typicode.com/users')
.then((T) => T.json())
.then((pessoa)=>{
  return pessoa.map(function(itens){

      const li = document.createElement('li')
      li.innerHTML = `NOME: ${itens.name} Email: ${itens.email}`
      document.getElementById('exec6').appendChild(li)

    })
        
})


