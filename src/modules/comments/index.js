const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require("graphql");
const CommentType = require("./CommentType");
const { getComments, saveComment } = require("./CommentLoader");

const queries = {
	getComments: {
		type: GraphQLList(CommentType),
		resolve: getComments,
	},
};

const mutations = {
	saveComments: {
		type: CommentType,
		resolve: saveComment,
		args: {
			input: {
				type: new GraphQLInputObjectType({
					name: "CommentInput",
					fields: {
						name: {
							type: GraphQLString,
						},
						content: {
							type: GraphQLString,
						},
					},
				}),
			},
		},
	},
};

module.exports = {
	mutations,
	queries,
};
