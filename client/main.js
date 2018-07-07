import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

Todos = new Mongo.Collection('todos');
Categories = new Mongo.Collection('categories');

Template.main.helpers({
  todos: function(){
    return Todos.find({}, {sort: {createdAt: -1}});
  }
});

Template.main.events({
  "submit .new-todo": function(event){
    if (event.target.text.value == '') {
      alert("Todo can't be blank");
      return false;
    }

    var text = event.target.text.value;
    Todos.insert({
      test: text,
      createdAt: new Date()
    });

    // Clear form
    event.target.text.value = '';

    // Prevent submit
    return false;
  },

  "click .toggle-check": function(){
    Todos.update(this._id, {$set:{checked: ! this.checked}});
  },



 

  "click .delete-todo": function(){
    if (confirm('Are you sure?')){
      Todos.remove(this._id);
    }
  },

  "click .text": function()
  {
    // Get the modal
    var modal = document.getElementById('myModal');


    // Get the <span> element that closes the modal
   // var span = document.getElementsByClassName("close")[0];
   modal.style.display = "block";


      // When the user clicks on <span> (x), close the modal
      //span.onclick = function() {
          //modal.style.display = "none";
      //}
  },

  "click #btnExit": function()
  {
    var span = document.getElementById("btnExit");
    //modal.style.display = "block";

      span.onclick = function() {
          modal.style.display = "none";
}
  },

});