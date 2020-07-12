const Comment = require("./models/Comment");

async function saveComment(_, { input }) {
	const comment = await Comment.create(input);
	return comment;
}

async function getComments() {
	const comments = await Comment.find();
	return comments;
}

module.exports = {
	saveComment,
	getComments,
};
