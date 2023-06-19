let timeNow="";
let local= window.localStorage;
let planner= ["","","","","","","","",""];

console.log("start setDate");
setDate();
console.log("setDate done");

console.log("start loader");
loader();
console.log()("loader done");

console.log("start rowStatus");
rowStatus();
console.log("rowStatus done");

//buttons
$("#9am-save").click(function(){
  let text=$("#9am-text").val();
  planner[0]=text;
  save();
  console.log("Contents saved.");
})

$("#10am-save").click(function(){
  let text=$("#10am-text").val();
  planner[1]=text;
  save();
  console.log("Contents saved.");
})

$("#11am-save").click(function(){
  let text=$("#11am-text").val();
  planner[2]=text;
  save();
  console.log("Contents saved.");
})

$("#12pm-save").click(function(){
  let text=$("#12pm-text").val();
  planner[3]=text;
  save();
  console.log("Contents saved.");
})

$("#1pm-save").click(function(){
  let text=$("#1pm-text").val();
  planner[4]=text;
  save();
  console.log("Contents saved.");
})

$("#2pm-save").click(function(){
  let text=$("#2pm-text").val();
  planner[5]=text;
  save();
  console.log("Contents saved.");
})

$("#3pm-save").click(function(){
  let text=$("#3pm-text").val();
  planner[6]=text;
  save();
  console.log("Contents saved.");
})

$("#4pm-save").click(function(){
  let text=$("#4pm-text").val();
  planner[7]=text;
  save();
  console.log("Contents saved.");
})

$("#5pm-save").click(function(){
  let text=$("#5pm-text").val();
  planner[8]=text;
  save();
  console.log("Contents saved.");
})




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
