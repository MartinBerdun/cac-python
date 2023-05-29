const appAPI = document.querySelector('#app');
const ul = document.createElement('ul');

fetch( "../scripts/personal.json" )
    .then( response => response.json())
    .then( personal => {
        personal.forEach( (element) => {
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(`${element.name} - ${element.email} 📧`)
            );
            ul.appendChild(elem);
        });
    });

    appAPI.appendChild(ul);