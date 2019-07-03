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
        //console.log({value:inputValue})
        
        fetch('http://localhost:3001/todos',{
            method:'POST',
            body:JSON.stringify({value:input.value})
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
        /*
        fetch(url,{
            method:'POST',
            body:JSON.stringify(inputValue),
           
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        */
        /*
        postData('http://localhost:3001/todos',{value:inputValue}).then(data=>console.log(JSON.stringify(data)))
        .catch(error =>console.log(error))
       
        
         function postData(url = 'http://localhost:3001/todos',value = {inputValue}){  
          fetch(url, {
                 method: "POST",
                 body: JSON.stringify({value})
             }).then((res)=>res.json())
        } 
        postData() */
       } 
})  


