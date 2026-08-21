isHalwaThere = false

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

    wait
        .then((message)=>{console.log(message)})
        .catch( (error)=>{console.log(error)})
        .finally(()=>{console.log('go home')} )
}

buyHalwa()

/*
Time 0ms:  buyHalwa() called
           │
           ▼
Time 0ms:  waitInLine() called
           │
           ▼
Time 0ms:  Promise created (PENDING)
           │   isHalwaThere = false
           │   setTimeout(1000ms) starts
           │
           ▼
Time 0ms:  Promise returned to wait variable
           │   const wait = Promise { <pending> }
           │
           ▼
Time 0ms:  .then() attached (waits for resolve)
           │   .catch() attached (waits for reject)
           │   .finally() attached (waits for either)
           │
           ▼
Time 0ms:  buyHalwa() returns (no output yet)

           ⏰ Waiting...

Time 1000ms: ⏰ setTimeout fires!
           │   isHalwaThere = false
           │   └── reject('no halwa left') ❌
           │
           ▼
Time 1000ms: .catch() executes
           │   console.log('no halwa left')
           │
           ▼
Time 1000ms: .finally() executes
           │   console.log('go home')
           │
           ▼
         COMPLETE
*/
