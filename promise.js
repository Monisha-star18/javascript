
isHalwaThere = true;


function waitInLine()
{
    return new Promise (( resolve,reject)=> {

        setTimeout( ()=>{
            if(isHalwaThere)
            {
                resolve('buy halwa');
            }
            else
            {
                reject('now halwa')
            }
        } , 2000)

    })
}

function buyHalwa ()
{
    //display the promise 
   const wait =  waitInLine() ;
   setTimeout(()=>{ console.log(wait)},3000)
}

buyHalwa()

// when i wanted to try out to see what a promise return :

    // when the result is resolved we get a  Returns ANOTHER NEW Promise  like Promise { 'buy halwa' }

    //when the result is not resolved then its a rejection and that causes error as the 
    // Promise rejects (fails), but  haven't handled the rejection with .catch() or try/catch. 
    // This causes Node.js to crash with an UnhandledPromiseRejection


// also when the consol.log is not is set timeout :

    //Time 0ms:  buyHalwa() is called
    //          ↓
    //Time 0ms:  waitInLine() called → Creates a Promise
    //          ↓
    //Time 0ms:  const wait = Promise { <pending> }  ← PENDING state
    //          ↓
    //Time 0ms:  console.log(wait)  ← Logs "Promise { <pending> }"
    //          ↓
    //Time 2000ms: setTimeout completes → resolve('buy halwa')
    //          ↓
    //Time 2000ms: Promise becomes FULFILLED (but nothing is using it!)
