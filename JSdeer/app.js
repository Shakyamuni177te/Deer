/* global Backbone, Marionette, $, require */

var character = {
  hydrated: 0,
  hurt = 0,
  scared = 0,
  loved = false,
  inLove = false,
  calm = true,
  drunk = 0,
}
var foal = {
  hydrated = 5;
  hurt = 0;
  scared = 0;
  entertained = 5;
  calm = true;
}

var choices = prompt("What do you do?");

var stage_0 = function() {
 console.log("You are a deer. Your nose is itchy.")
 console.log("What do you do?")
 choices="ITCH,NOTHING"
Choose()
If id = 1 Then
  Goto stage_1_1
ElseIf id = 2 Then
  Goto stage_0
Else
  TextWindow.WriteLine("Invalid choice.")
  Goto stage_0
EndIf
};
