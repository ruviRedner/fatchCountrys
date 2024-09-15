
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



    
   

   









