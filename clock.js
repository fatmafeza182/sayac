

// function tarihSaat() {
//     let date =new date().toLocalString("tr-TR")
//     document.querySelector("#myClock").innerHTML =date;

//     setInterval(tarihSaat, 1000);
// }
// var date= new date();
//     var show_date= date.getFullYear()+"-"+(date.getMonth()+1)+ "-"+(date.getDate);
//     var show_time =time.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

//     var date_time=show_date+""+show_time;
//     document.getElementById("myClock").innerHTML =date_time;
//  function showTime(){
//     const clockDiv =document.getElementById("myClock");
//     setInterval(function() {
//         const now =new Date();
//         const hours =now.getHours().toString().padStart(2,"0");
//         const minutes =now.getMinutes().toString().padStart(2,"0");
//         const seconds =now.getSeconds().toString().padStart(2,"0");
//         const date =now.getDate().toString().padStart(2,"0");
//         const month =now.getMonth().toString().padStart(2,"0");
//         const year=now.getFullYear();

//         const timeString =`${hours}:${minutes}:${seconds}`;
//         const dateString =`${date}-${month}-${year}`;
//         clockDiv.innerHTML = `${dateString} ${timeString}`;},1000);
//         clockDiv.innerHTML = `${dateString} ${timeString}`;
//  }
let myName = document.getElementById("myName");

myName.innerHTML = prompt("Adınız Nedir?");

function showTime(){
    var currentDate= new Date();//şu anki zaman
    //tarih ve saat
    var year =currentDate.getFullYear();
    var month =currentDate.getMonth();
    var date =currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes(); 
    var seconds =currentDate.getSeconds();
    
    return year +"-" +month +"-"+date+" "+hours+":"+minutes+":"+seconds;
}
myClock.innerHTML=showTime();