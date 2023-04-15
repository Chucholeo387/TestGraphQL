

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

type responseLogin {
    msg: String
    token: String
    name: String
}


input AddressInput{
    street: String
    city: String
}

input newUser {
    username: String!
    password: String!
    password_repeat: String!
}

input usuarioInput{
    username: String!
    password: String!
    password_repeat: String!
}

input loginInput{
    username: String!
    password: String!
}

type Query {
    personCount: Int
    allPersons: [Person]
    findPerson(name: String): Person
    address(input: AddressInput): [Address]
    allCharacters: [character]
    oneCharacter(id: ID): character
    getProducts: [products]
    getProducts2: [products]
}

type Mutation {
    registerUser (input: newUser ) : String
    registerUser2 : msg
    nuevoUsuario (input: usuarioInput) : String
    loginUsuario (input: loginInput) : responseLogin
}

`

module.exports = typeDefs