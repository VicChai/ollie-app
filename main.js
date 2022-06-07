document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const ollieChoice = document.querySelector('input').value

    try {
        const response = await fetch(`https://ollie-items-api.herokuapp.com/api/${ollieChoice}`)
        const data = await response.json()
        console.log(data)

        document.querySelector('h2').innerText = data.nickname    
        document.getElementById('image').src = data.image

    } catch (error) {
        console.log(error)
    }   
}