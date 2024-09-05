const welcomeQueryResolvers = {
  Query: {
    helloWorldQuery: (_parent, _args, _ctx, _info) => {
      return 'Hello World 👋'
    }
  }
}

module.exports = welcomeQueryResolvers
