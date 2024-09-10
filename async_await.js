function callAsync() {
    console.log("callAsync-1");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log('callAsync-2');
            console.log(response.json());
        }).catch((error) => {
            console.log("Error callAsync");
            console.log(error);
    })
    console.log("callAsync-3");
}
//callAsync();

async function callAnotherAsync() {
    console.log("callAsync-1");
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log('callAsync-2');
        console.log(result.json());


        const result1 = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log('callAsync-3');
        console.log(result1.json());
    } catch(error) {
        console.log("Error callAsync");
        console.log(error);
    }
    console.log("callAsync-4");
}

callAnotherAsync();

function callNewAsync() {
    callAnotherAsync();
}