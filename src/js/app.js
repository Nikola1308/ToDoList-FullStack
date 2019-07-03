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
/*
document.getElementById('inputText').addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        let input = document.getElementById('inputText')
        let inputValue = input.value
        console.log({value:inputValue})
       
         const postTodos= ()=>{  
         fetch(url,{
            method:"POST",
            mode: "no-cors",
            body:JSON.stringify({value:inputValue}),
            headers: { "Content-Type": "application/json; charset=utf-8" }}).then((res)=>{
                console.log(res)
                return
            }).then((res)=>{
                return(JSON.stringify(res))
            })
        } 
        postTodos()
       }
}) */


