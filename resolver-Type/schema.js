

const typeDefs = `#graphql
type Address {
    street: String
    city: String
}

type products{
    id: ID
    name: String
    price: Int
}

type msg {
    msg: String
}

input newUser {
    username: String!
    password: String!
    password_repeat: String!
}



type Person {
    name: String
    phone: String
    street: String
    city: String
    id: ID
}

type character{
    id: ID
    name: String
    status: String
    species: String
}


input AddressInput{
    street: String
    city: String
}

input usuarioInput{
    username: String!
    password: String!
    password_repeat: String!
}

type Query {
    personCount: Int
    allPersons: [Person]
    findPerson(name: String): Person
    address(input: AddressInput): [Address]
    allCharacters: [character]
    oneCharacter(id: ID): character
    getProducts: [products]
}

type Mutation {
    registerUser (input: newUser ) : String
    registerUser2 : msg
    nuevoUsuario (input: usuarioInput) : String
}

`

module.exports = typeDefs