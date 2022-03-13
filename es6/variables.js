// var scope on the function
const varTest = () => {
    for(var i=0; i<2; i++){
        console.log(i);
    }
    console.log(i++);
}

// let scope on the code block
const letTest = () => {
    for(let i=0; i<2; i++){
        console.log(i);
    }

    // this will cause an error
    console.log(i);
}

// cannot re assign value to a const variable
const constTest = () => {
    const i = 2;
    console.log(2);

    // this will throw an error
    i = 3;
}


varTest();
letTest();
constTest();