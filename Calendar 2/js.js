var d = new Date();
var month = d.getMonth(); 
var year = d.getFullYear();
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

today = dd+'-'+mm+'-'+yyyy;

function generateCalendar(month,year){
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3); 
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year, month + 1, 0).getDate();
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    document.getElementById("calendar-dates").appendChild(calendar);
    function get_calendar(day_no, days){
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        for(var c = 0; c <= 6; c++){
            var td = document.createElement('td');
            td.innerHTML = "SMTWTFS"[c];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        tr = document.createElement('tr');
        var c;
        for( c=0 ; c<=6 ; c++){
            if(c == day_no){
                break;
            }
            var td = document.createElement('td');
            td.setAttribute("id", "blank");
            td.innerHTML = "";
            tr.appendChild(td);
        }
        
        var count = 1;
        for(; c<=6; c++){
            var td = document.createElement('td');
            td.innerHTML = count;
            td.setAttribute("id",count+"-"+ month +"-"+year);
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
        for(var r=3; r<=7; r++){
            tr = document.createElement('tr');
            for(var c=0; c<=6; c++){
                if(count > days){
                    table.appendChild(tr);
                    return table;
                }
                var td = document.createElement('td');
                td.innerHTML = count;
                td.setAttribute("id",count+"-"+ month +"-"+year);
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }
};

generateCalendar(month,year); 
specialDates();

function increaseMonth() {
    if(month >= 11) {
        year += 1;
        month = 0;
    }
    else {
        month += 1;
    }
    document.getElementById("calendar-month-year").innerHTML = " ";
    document.getElementById("calendar-dates").innerHTML = "";
    generateCalendar(month,year);
    specialDates();
};
function decreaseMonth() {
    if(month <= 0) {
        year -= 1;
        month = 11;
    }
    else {
        month -= 1;
    }
    document.getElementById("calendar-month-year").innerHTML = " ";
    document.getElementById("calendar-dates").innerHTML = "";
    generateCalendar(month,year);
    specialDates();
   };
function highlightDate(thisDate){
    highlightToday = document.getElementById(thisDate);
    highlightToday.className = "highlightToday";
};
function specialDates(){
    var specialDates = ["19-7-2014","27-0-2015","5-4-2015","25-4-2015","2-7-2015","3-7-2015","5-9-2015","30-9-2015","2-10-2015","10-0-2016","27-0-2016","4-3-2016","20-3-2016","2-4-2016","6-4-2016","2-5-2016","6-5-2016","16-5-2016","25-5-2016","3-8-2016","10-9-2016","25-10-2016","4-11-2016","5-11-2016","11-11-2016","27-11-2016","1-0-2017","5-0-2017","8-0-2016"];

    arrayLength = specialDates.length;

    var i = 0;
    for(i = 0; i < arrayLength ; i++){
        if(document.getElementById(specialDates[i])){
            temp = specialDates[i];
            highlightDate(temp);
        }
    }
};

function call(mth,yr){
    month = mth;
    year = yr;
    document.getElementById("calendar-month-year").innerHTML = " ";
    document.getElementById("calendar-dates").innerHTML = "";
    generateCalendar(month,year);
    specialDates();
}