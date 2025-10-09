// const btnSubmit = document.querySelector('#form-button');

// // console.log(typeof btnSubmit, btnSubmit, btnSubmit.textContent);


// // function onClickButton(event) {
// //     console.log(typeof event, event)
// // }

// // btnSubmit.addEventListener('click', onClickButton)


// const inputPassword = document.querySelector('#input-password');

// function onChangeInput(event) {
//     console.log(event);
// }

// inputPassword.addEventListener('change', onChangeInput)

const addEmailBtn = document.querySelector('#add-email-btn');
const emailContainer = document.querySelector('#email-container');

let emailCount = 1;

function onClickButton() {
    emailCount++; 
    const newDiv = document.createElement('div'); 
    newDiv.classList.add('form-row');

    const newLabel = document.createElement('label');
    newLabel.textContent = 'Email ' + emailCount; 

    const newInput = document.createElement('input');
    newInput.type = 'email';
    newInput.id = 'email-' + emailCount;
    newInput.required = true;

    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    
    emailContainer.parentNode.insertBefore(newDiv, addEmailBtn.parentNode); 
}

addEmailBtn.addEventListener('click', onClickButton);