const  { ApolloServer } = require('@apollo/server') ;
const  { startStandaloneServer } = require('@apollo/server/standalone') ;
const  typeDefs  = require("./resolver-Type/schema")
const resolvers = require("./resolver-Type/resolvers")



const server = new ApolloServer({
    typeDefs, 
    resolvers
})
const Apollo = async ()=>{
    const { url } = await startStandaloneServer(server);
    console.log(` Server ready at ${url}`);
}

Apollo()