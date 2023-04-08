const axios = require('axios');

const persons = [
    {
        name: "Midu",
        phone: "034-1234567",
        street:"Calle Fronted",
        city: "Barcelona",
        id: "3d599470-3436-11e9-bc57-8b80ba54c431"
    },
    {
        name: "kristhie",
        phone: "034-1234567",
        street:"Avenida fullstack",
        city: "Stalingrado",
        id: "3d599470-3436-11e9-bc57-8b80ba54c431"
    },
    {
        name: "Youseff",
        phone: "034-1234567",
        street:"Calle Fronted",
        city: "Marsella",
        id: "3d599470-3436-11e9-bc57-8b80ba54c431"
    },
    {
        name: "Itzi",
        phone: "034-1234567",
        street:"Calle Backend",
        city: "Kyoto",
        id: "3d599470-3436-11e9-bc57-8b80ba54c431"
    }
]

// The GraphQL schema

const getCharacter = async ()=>{
    const response =  await axios.get("https://rickandmortyapi.com/api/character")
    return response.data.results

}
const getOneCharacter = async (id)=>{
    const response =  await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return response.data

}

const registerUserDb = async (username, password, password_repeat)=>{
    const response = await axios.post("http://localhost:3000/register", {
        username: username,
        password: password,
        password_repeat: password_repeat,
    })
    console.log(response.data.msg)
    return response.data.msg
}

const getProducts = async () =>{
    const response =  await axios.get("http://localhost:3000/testgraph")
    return response.data
}


// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
        findPerson: (root, args) =>{
            const { name } = args
            return persons.find(person => person.name === name)
        },
        address: (root, {input}) =>{
            return input
        },
        allCharacters:   () => {
           return getCharacter()
        },
        oneCharacter: (root, args) =>{
            const { id } = args
            return getOneCharacter(id)
        } ,
        getProducts: () =>{
            return getProducts()
        }      
},
    Mutation:{
        registerUser: (root, {input}) =>{
            const {username, password, password_repeat} = input
            return registerUserDb (username, password, password_repeat )
        },
        registerUser2: () =>{
            return registerUserDb ("Petra", "123456", "123456")
        },
        nuevoUsuario: (root, {input})=>{
            const {username, password, password_repeat} = input
            console.log(username)
            console.log(password)
            console.log(password_repeat)
            


          
        }

    }
}






module.exports = resolvers