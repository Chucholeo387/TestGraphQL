

const typeDefs = `#graphql
type Address {
    street: String
    city: String
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

type Query {
    personCount: Int
    allPersons: [Person]
    findPerson(name: String): Person
    address(input: AddressInput): [Address]
    allCharacters: [character]
    oneCharacter(id: ID): character
}
`

module.exports = typeDefs