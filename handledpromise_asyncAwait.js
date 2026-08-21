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

async function buyHalwa(){
    try
    {
        const wait = await waitInLine()
        console.log(wait)
    }
    catch(error)
    {
        console.log(error)
    }
    
}

buyHalwa()
