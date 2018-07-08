import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  // code to run on server at startup
  Todos = new Mongo.Collection('todos');
  Categories = new Mongo.Collection('categories');
});
