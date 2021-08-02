// User Data Page

// Reference To Container HTML
const application = document.querySelector('.container')

// URL Params
const getUrl = new URLSearchParams(window.location.search)  
id = getUrl.get('id')

const url = 'https://jsonplaceholder.typicode.com/users'

// Data
fetch(`${url}/${id}`)
.then(response => response.json())
.then(data => {
    // Show Name User
    const name = document.createElement('p')
    name.innerHTML = data.name
    application.appendChild(name)

    // Show Email User
    const username = document.createElement('p')
    username.innerHTML = data.username
    application.appendChild(username)

    // Show Email User
    const email = document.createElement('p')
    email.innerHTML = data.email
    application.appendChild(email)
})
.catch(error => console.log(error))