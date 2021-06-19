(() => {

    'use strict'

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const getStartedForm = document.querySelector('#get-started');
    const getStartedInput = document.querySelector('#get-started input');
    const getStartedP = document.querySelector('#get-started p');

    const footerForm = document.querySelector('#footer-form');
    const footerInput = document.querySelector('#footer-form input');
    const footerP = document.querySelector('#footer-form p');


    getStartedForm.addEventListener('submit', (e)=> {
        e.preventDefault();

        if (!emailRegex.test(getStartedInput.value)) {
            getStartedInput.style.border = '1px solid red';
            getStartedP.style.color = 'red';
            getStartedP.innerText = 'Please check your email';
        } else {
            getStartedInput.style.border = '1px solid #00ff00';
            getStartedP.style.color = '#00ff00';
            getStartedP.innerText = 'Submission succesfully sent!';
        }
    });

    getStartedInput.addEventListener('keydown', () => {
        getStartedP.innerText = '';
        getStartedInput.style.border = '1px solid hsl(238, 22%, 44%)';
    });

    footerForm.addEventListener('submit', (e)=> {
        e.preventDefault();

        if (!emailRegex.test(footerInput.value)) {
            footerInput.style.border = '1px solid red';
            footerP.style.color = 'white';
            footerP.innerText = 'Please check your email';
        } else {
            footerInput.style.border = '1px solid #00ff00';
            footerP.style.color = '#00ff00';
            footerP.innerText = 'Submission succesfully sent!';
        }
    });

    footerInput.addEventListener('keydown', () => {
        footerP.innerText = '';
        footerInput.style.border = '1px solid hsl(238, 22%, 44%)';
    });

})()