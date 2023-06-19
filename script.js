let timeNow="";
let local= window.localStorage;
let planner= ["","","","","","","","",""];

console.log("start setDate");
setDate();
console.log("setDate done");

console.log("start loader");
loader();
console.log("loader done");

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



//load local storage for daily planner
function loader(){
  planner=JSON.parse(local.getItem("planner") ||"[]");
  $("#9am-text").val(planner[0]);
  $("#10am-text").val(planner[1]);
  $("#11am-text").val(planner[2]);
  $("#12pm-text").val(planner[3]);
  $("#1pm-text").val(planner[4]);
  $("#2pm-text").val(planner[5]);
  $("#3pm-text").val(planner[6]);
  $("#4pm-text").val(planner[7]);
  $("#5pm-text").val(planner[8]);
}

//save all
function save(){
  local.setItem("planner",Json.stringify(planner));
}

//past, present and future timeslot background colours
function colours(){
  let time1="9:00am";
  let check1=compareTime(time1);

  let time2="10:00am";
  let check2=compareTime(time2);

  let time3="11:00am";
  let check3=compareTime(time3);

  let time4="12:00pm";
  let check4=compareTime(time4);

  let time5="1:00pm";
  let check5=compareTime(time5);

  let time6="2:00pm";
  let check6=compareTime(time6);

  let time7="3:00pm";
  let check7=compareTime(time7);

  let time8="4:00pm";
  let check8=compareTime(time8);

  let time9="5:00pm";
  let check9=compareTime(time9);

  let time10="6:00pm";
  let check10=compareTime(time10);

  //functionality for determining bg colours

  if  (check1== false && check2==false){
    $("#9am-text").addClass("bg-danger");
  } else if (check1==false && check2==true){
    $("#9am-text").addClass("bg-warning");
  } else {
    $("#9am-text").addClass("bg-success");
  }

  if  (check2== false && check3==false){
    $("#10am-text").addClass("bg-danger");
  } else if (check2==false && check3==true){
    $("#10am-text").addClass("bg-warning");
  } else {
    $("#10am-text").addClass("bg-success");
  }

  if  (check3== false && check4==false){
    $("#11am-text").addClass("bg-danger");
  } else if (check3==false && check4==true){
    $("#11am-text").addClass("bg-warning");
  } else {
    $("#11am-text").addClass("bg-success");
  }

  if  (check4== false && check5==false){
    $("#12pm-text").addClass("bg-danger");
  } else if (check4==false && check5==true){
    $("#12pm-text").addClass("bg-warning");
  } else {
    $("#12pm-text").addClass("bg-success");
  }

  if  (check5== false && check6==false){
    $("#1pm-text").addClass("bg-danger");
  } else if (check5==false && check6==true){
    $("#1pm-text").addClass("bg-warning");
  } else {
    $("#1pm-text").addClass("bg-success");
  }

  if  (check6== false && check7==false){
    $("#2pm-text").addClass("bg-danger");
  } else if (check6==false && check7==true){
    $("#2pm-text").addClass("bg-warning");
  } else {
    $("#2pm-text").addClass("bg-success");
  }

  if  (check7== false && check8==false){
    $("#3pm-text").addClass("bg-danger");
  } else if (check7==false && check8==true){
    $("#3pm-text").addClass("bg-warning");
  } else {
    $("#3pm-text").addClass("bg-success");
  }

  if  (check8== false && check9==false){
    $("#4pm-text").addClass("bg-danger");
  } else if (check8==false && check9==true){
    $("#4pm-text").addClass("bg-warning");
  } else {
    $("#4pm-text").addClass("bg-success");
  }

  if  (check9== false && check10==false){
    $("#5pm-text").addClass("bg-danger");
  } else if (check9==false && check10==true){
    $("#5pm-text").addClass("bg-warning");
  } else {
    $("#5pm-text").addClass("bg-success");
  }
}
  //comparing schedule blocks with actual time
function compareTime(blockTime) {
  let rowTime= moment(blockTime, "h:mma");
  let currentTime= moment(timeNow, "h:mma");
  let bool=currentTime.isBefore(rowTime);

  if(bool==false){
    return false;
  } else if(bool==true){
    return true;
  }
}

//Display for current date/time function
function setDate(){
  let getDate= moment().toDate();
  let dateNow= moment(getDate).format("dddd, MMMM do YYYY");
  timeNow = moment(getDate).format("h:mma");

  $("#currentDay").html("<p>"+dateNow+ "<p>");
}