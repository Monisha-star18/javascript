isHalwaThere = true

function waitInLine(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if(isHalwaThere)
            {
                resolve('buy halwa')
            }
            else
            {
                reject('no halwa left')
            }
        }, 1000);
    })
}

function buyHalwa(){
    const wait = waitInLine()

    // wait.then((message)=>{console.})
}