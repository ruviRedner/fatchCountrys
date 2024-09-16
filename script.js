
const inp = document.getElementById("input")
const list = document.getElementById("ty")
const uriall = "https://restcountries.com/v3.1/all"
const filterUrl = "https://restcountries.com/v3.1/name/"



countries();


inp.addEventListener("input", countries);

 async  function countries()  {
    try {
        const response = await fetch
        (inp.value.trim()? filterUrl+inp.value : uriall)
       
        if(response) {
            const data = await response.json();
            
            list.innerHTML = "";
            for (const element of data) {
                const li = document.createElement("li");
                const img = document.createElement("img");
                    li.textContent = element.name.common
                    img.src = element.flags.svg
                    img.style.width = '20px';
                    li.appendChild(img);  
                    
                    list.appendChild(li);
            }

            
        }
        else{
            throw new Error('Failed to fetch data');
        }
       
    }catch(err) {
        console.error('Error:', err);
    }}

const getTasks = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(response) {
            const data = await response.json();
            // return data;
            console.log(data);
            
            
        }
        else{
            throw new Error('Failed to fetch data');
        }
       
    }catch(err) {
        console.error('Error:', err);
    }}

const getTasksById = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            if(response) {
                const data = await response.json();
                // return data;
                console.log(data);
            
            
        }
        else{
            throw new Error('Failed to fetch data');
        }
        }catch(err) {
        console.error('Error:', err);
    }};

const addNewTask = async (task) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        if(response.status === 201) {
            const data = await response.json();
            console.log(data);
            
            
        }
        else{
            throw new Error('Failed to add task');
        }
       
    }catch(err) {
        console.error('Error:', err);
    }}
const putTask = async (id, task) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        if(response.status === 200) {
            const data = await response.json();
            console.log(data);
            
            
        }
        else{
            throw new Error('Failed to update task');
        }
       
    }catch(err) {
        console.error('Error:', err);
    }}
const deleteTask = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        })
        if(response.status === 200) {
            console.log('Task deleted');
            
            
        }
        else{
            throw new Error('Failed to delete task');
        }
       
    }catch(err) {
        console.error('Error:', err);
    }}
   
    
   
getTasksById(1);
addNewTask({title: 'New Task', completed: false, userId: 1});
putTask(1, {title: 'Updated Task', completed: true, userId: 1});
getTasks();
deleteTask(300);
    
   

   









