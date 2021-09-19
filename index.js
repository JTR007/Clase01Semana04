let isNotSick = false;

let willIGetCake = new Promise(
    function(resolve, reject){
        if (isNotSick) {
            let cakes = [
                {
                    type: "chocolate",
                    shape: "rectangle",
                },
                {
                    type: "chocolate",
                    shape: "circle",
                },
                {
                    type: "vanilla",
                    shape: "circle",
                }
            ]
            resolve(cakes);
        } else {
            let reason = new Error("Kayo se enfermo, asi que no tendremos pastel. Pero la fiesta aun continua")
            reject(reason);
        }
    }
)

let askHealth = function(){
    willIGetCake
        .then(function(fulfilled){
            console.log(fulfilled);
        })
        .catch(function(error){
            console.log(error.message);
        })
}

askHealth();