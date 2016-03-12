import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql/type'

const count = 199

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      count: {
        type: GraphQLInt,
        resolve() {
          return count
        }
      }
    }
  })
})

export default schema