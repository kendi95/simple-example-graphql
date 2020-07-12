const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");
const { GraphQLDateTime } = require("graphql-iso-date");

module.exports = new GraphQLObjectType({
	name: "CommentType",
	fields: {
		id: {
			type: GraphQLNonNull(GraphQLString),
		},
		name: {
			type: GraphQLNonNull(GraphQLString),
		},
		content: {
			type: GraphQLNonNull(GraphQLString),
		},
		createdAt: {
			type: GraphQLNonNull(GraphQLDateTime),
		},
		updatedAt: {
			type: GraphQLNonNull(GraphQLDateTime),
		},
	},
});
