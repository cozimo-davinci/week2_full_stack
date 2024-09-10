function makePromise(a) {
    var p1 = new Promise((resolve, reject) => {

        const obj = {
            status: true,
            message: "Success"
        }


        if ( a == 10) {

            resolve(obj);
        } else {
            reject("Failure-1");
        }
    })

    return p1;
}

makePromise(10).then((result)=> {
    console.log(result);
}, (error) => {
    console.log(error);
})

makePromise(20).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=> {
    console.log("Finally");
})




