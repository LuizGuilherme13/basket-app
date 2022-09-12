import Logo from "../../assets/logo.png"
import potato from '../../assets/fruits/potato.png'
import tomato from '../../assets/fruits/tomato.png'
import pumpkin from '../../assets/fruits/pumpkin.png'
import cucumber from '../../assets/fruits/cucumber.png'
import broccoli from '../../assets/fruits/broccoli.png'

const basket = {
    details: {
        producer:{
            logo: Logo,
            name: "J.J Farm",
        },
        product:{
            title: "Vegetable basket",
            description: "Fresh produce selected from the best organic farm in the country.",
            value: "US$8,99",
        }
    },
    
    items:{
        hortifruti:[
            {
                name: "Cucumber",
            image: cucumber,
            },

            {
                name: "Broccoli",
                image: broccoli,
            },

            {
                name: "Potato",
                image: potato,
            },
            
            {
                name: "Pumpkin",
                image: pumpkin,
            },

            {
                name: "Tomato",
                image: tomato,
            },
        ]
    }
}

export default basket;