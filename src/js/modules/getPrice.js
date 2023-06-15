import { getResource } from "../services/requests";

const getPrice = () => {
    getResource('http://localhost:3000/prices')
        .then(res => setPrices(res))
        .catch(error => console.log(error));

    function setPrices(response) {
        const priceSize = document.querySelectorAll('#size>option');
        let i = 1;

        for (let key in response) {
            priceSize[i].setAttribute('value', response[key]);
        }
        
    }
};

export default getPrice;