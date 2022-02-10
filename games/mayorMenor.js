

const mayorMenor = () => {

    // if(message.toLowerCase() === '!game') {
		// "@alca, heya!"
        // }
        const numRandom = Math.floor((Math.random() * 10)+ 1);
        const numRandom2= Math.floor((Math.random() * 10)+ 1)
		
        const numerosRandom = {num1: numRandom, num2: numRandom2};

        // console.log(numerosRandom)
        
        return {numerosRandom};
	

} 



module.exports = {mayorMenor};