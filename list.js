// List User Page 

// Reference To Container HTML
const application = document.querySelector('.container')

// Request
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(user => {
        const paragraph = document.createElement('p')
        paragraph.setAttribute('id', user.id)
        paragraph.innerHTML = user.name
        paragraph.addEventListener('click', function () {
            window.location.href = `./user.html?id=${user.id}`
        })
        application.appendChild(paragraph)        
    });
})
.catch(error => console.log(error))