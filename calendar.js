
//Loads the functions on to the HTML page
window.onload = function() {
    getMonth();
    getYear();
    getDayName()
    getDay()
    
  }

//Object of the Date function  
var date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const todayDate = date.getDay();




//Function for getting the current month

function getMonth(){
    const monthName = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date(),);


document.getElementById("month").innerHTML = monthName;

}

//Function for getting the current year

function getYear(){
    
    document.getElementById("year").innerHTML = year;
    }



    //Function to get the convert current day to readable value

function getDayName(dateToday, locale){

     date = new Date(dateToday);
  




   return date.toLocaleDateString(locale, {weekday:'long'});
    



}

 //Function to get the current day using for loop to set the week
function getDay(){

const together = [year, month, day].join('/');



var today = getDayName(together, "en-us");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const startDate = new Date(date.setDate(date.getDate() - date.getDay()));


// Loop through the week, adding one day at a time to the id's
for (let i = 0; i < 7; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);


if (i == 0){
    
    document.getElementById("sun").innerHTML = date.getDate();
    
   
}
else if (i == 1){
    document.getElementById("mon").innerHTML = date.getDate(); 
    
}
else if (i == 2){
    document.getElementById("tue").innerHTML = date.getDate(); 
    
}
else if (i == 3){

    
    document.getElementById("wed").innerHTML = date.getDate();
    
    
}
else if (i == 4){
    document.getElementById("thur").innerHTML = date.getDate(); 
    
}
else if (i == 5){
    document.getElementById("fri").innerHTML = date.getDate(); 
    
}
else if (i == 6){
    document.getElementById("sat").innerHTML = date.getDate(); 
    
}

}

}


//functions used to the previous week, includes the code for changing the month and year

function minusWeek(){
    const previousweekDate = new Date(date.setDate(date.getDate() - date.getDay() - 7));



    for (let i = 0; i < 7; i++) {
        const date = new Date(previousweekDate);
        
        date.setDate(previousweekDate.getDate() + i);

        const year = date.getFullYear();
        document.getElementById("year").innerHTML = year;
    

        const month = date.getMonth() + 1;
        


        if(month== 1){
            document.getElementById("month").innerHTML = "January";

        }
        else if(month== 2){
            document.getElementById("month").innerHTML = "February";

        }
        else if(month== 3){
            document.getElementById("month").innerHTML = "March";

        }
        else if(month== 4){
            document.getElementById("month").innerHTML = "April";

        }
        else if(month== 5){
            document.getElementById("month").innerHTML = "May";

        }
        else if(month== 6){
            document.getElementById("month").innerHTML = "June";

        }
        else if(month == 7){
            document.getElementById("month").innerHTML = "July";

        }
        else if(month== 8){
            document.getElementById("month").innerHTML = "August";

        }
        else if(month== 9){
            document.getElementById("month").innerHTML = "September";

        }

        else if(month== 10){
            document.getElementById("month").innerHTML = "October";

        } else if(month==11){
            document.getElementById("month").innerHTML = "November";

        }
        else if(month== 12){
            document.getElementById("month").innerHTML = "December";

        }

        

    
      if (i == 0){
          
          document.getElementById("sun").innerHTML = date.getDate(); 
          
         
      }
      else if (i == 1){
          document.getElementById("mon").innerHTML = date.getDate(); 
          
          
      }
      else if (i == 2){
          document.getElementById("tue").innerHTML = date.getDate(); 
          
          
      }
      else if (i == 3){
      
          
          document.getElementById("wed").innerHTML = date.getDate();
         
          
          
      }
      else if (i == 4){
          document.getElementById("thur").innerHTML = date.getDate(); 
          
          
      }
      else if (i == 5){
          document.getElementById("fri").innerHTML = date.getDate(); 
          
          
      }
      else if (i == 6){
          document.getElementById("sat").innerHTML = date.getDate(); 
          
          
      }

      }


}


//functions used to the next week, includes the code for changing the month and year

function addWeek(){
    const previousweekDate = new Date(date.setDate(date.getDate() - date.getDay() + 7));

    


    for (let i = 0; i < 7; i++) {
        const date = new Date(previousweekDate);
        date.setDate(previousweekDate.getDate() + i);


        const year = date.getFullYear();
        document.getElementById("year").innerHTML = year;
    
       
        const month = date.getMonth() + 1;
        

        if(month== 1){
            document.getElementById("month").innerHTML = "January";

        }
        else if(month== 2){
            document.getElementById("month").innerHTML = "February";

        }
        else if(month== 3){
            document.getElementById("month").innerHTML = "March";

        }
        else if(month== 4){
            document.getElementById("month").innerHTML = "April";

        }
        else if(month== 5){
            document.getElementById("month").innerHTML = "May";

        }
        else if(month== 6){
            document.getElementById("month").innerHTML = "June";

        }
        else if(month == 7){
            document.getElementById("month").innerHTML = "July";

        }
        else if(month== 8){
            document.getElementById("month").innerHTML = "August";

        }
        else if(month== 9){
            document.getElementById("month").innerHTML = "September";

        }

        else if(month== 10){
            document.getElementById("month").innerHTML = "October";

        } else if(month==11){
            document.getElementById("month").innerHTML = "November";

        }
        else if(month== 12){
            document.getElementById("month").innerHTML = "December";

        }
    



      if (i == 0){
          
          document.getElementById("sun").innerHTML = date.getDate(); 
         
      }
      else if (i == 1){
          document.getElementById("mon").innerHTML = date.getDate(); 
          
      }
      else if (i == 2){
          document.getElementById("tue").innerHTML = date.getDate(); 
          
      }
      else if (i == 3){
      
          
          document.getElementById("wed").innerHTML = date.getDate();
          
          
      }
      else if (i == 4){
          document.getElementById("thur").innerHTML = date.getDate(); 
          
      }
      else if (i == 5){
          document.getElementById("fri").innerHTML = date.getDate(); 
          
      }
      else if (i == 6){
          document.getElementById("sat").innerHTML = date.getDate(); 
          
      }

      
      }
    
}


//alert to fix schdule an event
function notification(){
    alert('You have set a time!');
}
