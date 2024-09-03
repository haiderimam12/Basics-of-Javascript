// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log('DB Connected ONE');
}
chai();

// OR

(function chai(){
    console.log('DB Connected TWO');
})();

// OR

( function aurcode () {
    console.log(`DB CONNECTED FOUR`);
})();

// OR

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('Haider')