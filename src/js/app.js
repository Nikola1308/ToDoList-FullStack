console.log('Started')

const url = new URL('http://localhost:3001/todos')


const getTodos =()=>{
    fetch(url,{method:"get"}).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    })
}
getTodos()

document.getElementById('inputText').addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        let input = document.getElementById('inputText')
        let inputValue = input.value
        
        fetch('http://localhost:3001/todos',{
            method:'POST',
            body:JSON.stringify({value:inputValue}),
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            }
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
       } 
})  


