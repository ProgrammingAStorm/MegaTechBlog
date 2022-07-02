const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    onDelete: 'cascade', 
    foreignKey: { name: 'user_id', allowNull: false } 
});

Post.belongsTo(User);

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});  
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    onDelete: 'cascade', 
    foreignKey: { name: 'user_id', allowNull: false } 
});
  
Comment.belongsTo(Post, {
    onDelete: 'cascade', 
    foreignKey: { name: 'post_id', allowNull: false } 
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };