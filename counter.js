//cashing variables
let Title = document.getElementById('title');
let date = document.getElementById('date');
let result = document.getElementById('count-down');
let btn =  document.getElementById('button');
let prg=document.getElementById("p");
let days,hours,minutes,seconds;
let items = [];
let titleData = JSON.parse(localStorage.getItem('item1'));
let dateData = JSON.parse(localStorage.getItem('item2'));

// function to calculate the date
function countDown(){
	
	let current = new Date().getTime(); 
	let countDownDate=new Date(date.value).getTime();
    let difference = countDownDate - current;

   let days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
   let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // put 0 after the number if the time less than 10
    days = days<10? "0"+days : days;
	hours= hours<10 ? "0" + hours : hours;
	minutes=minutes<10? "0"+minutes:minutes;
	seconds= seconds<10? "0" +seconds : seconds;

    // display the div to show countdown
     result.style.display="block";

	document.getElementById("count-down").innerHTML=days +"d :" +"" +
	hours + "h :"+""
	+minutes+ "m :" +""+ seconds +"s ";

	+ minutes +"m:" + seconds + "s:"

let y = setInterval(countDown,1000);
	
//making check for the input value
if (difference<0) {
	  
    clearInterval(y,1000);
    document.getElementById("count-down").innerHTML = 
    "Ooh! The Event Will Accured Now" 
  
}
else if (date.value==""){
	alert("Please, Enter Your Event Date  ");
}

else if(title.value=="")
 {

alert("Please, Enter Your Event title");
}
//end the countDown() function
}

//function to show the title;
function showTitle(){

prg.innerHTML ="The Event Title is: " +"" + title.value ;
}
//making event 
form.addEventListener("submit" , function(e){

	e.preventDefault();
	// to add the item to the localestorage
	items.push(title.value);
	localStorage.setItem('item1' , JSON.stringify(items));

	items.push(date.value);
	localStorage.setItem('item2', JSON.stringify(items));
	
	let showTimer = result;
	showTimer = 
	countDown();

	showTitle();
	
});