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
        }
  
    
        
}
}






module.exports = resolvers