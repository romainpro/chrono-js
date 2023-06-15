let inputDate = document.querySelector(`#inputDate`)


let btnSubmit= document.querySelector(`#submit`)
let divError = document.querySelector(`.error`)
let divdisplay = document.querySelector(`.display`)
let paraweek =document.createElement(`p`)
let paraDays =document.createElement(`p`)
let paraHours =document.createElement(`p`)
let paraMinute =document.createElement(`p`)
let paraSecond = document.createElement(`p`)
let h1Error = document.createElement(`h1`);

btnSubmit.addEventListener(`click`,updateDate);



function updateDate(){
    dateNow = new Date()
    compareDate()
    
}

function compareDate(){
//////////////////////convertir date en milliseconde///////////////////////////////////////////////////////////////
    let inputDateValue= inputDate.value
    let inputDateParse = Date.parse(inputDateValue);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////compare les dates /////////////////////////////////////////////////////////////////
    if(inputDateParse<dateNow){
        h1Error.textContent ="erreur date est deja passer";
        h1Error.remove()
        divError.appendChild(h1Error);
    }else if (inputDateParse >= dateNow){
        h1Error.remove()
        let lastforDate = inputDateParse - dateNow;//  var temps restant avent date 
        displayTime(lastforDate);     
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function displayTime(lastforDate){

    let second= lastforDate/1000//var seconde
    // let stayMms=lastforDate%1000
           
    let minutes= second/60 //var minutes
    let staySeconde =second%60
       
    let hours =minutes/60 //var heures
    let stayMinutes =minutes%60
        
    let days = hours/24 // var jours
    let stayhours=hours%24
        
    let week= days/7 // var semaines
    let stayDays=days%7

    
    paraSecond.textContent=(` il reste ${Math.floor(second)}secondes pour arriver a la date  `)
    divdisplay.appendChild(paraSecond)


    paraMinute.textContent=(`Il reste ${Math.floor(minutes)} minutes et ${Math.floor(staySeconde)} secondes`);
    divdisplay.appendChild(paraMinute)


    paraHours.textContent=(`Il reste ${Math.floor(hours)} heures ${Math.floor(stayMinutes)} minutes et ${Math.floor(staySeconde)} secondes`);
    divdisplay.appendChild(paraHours)


    paraDays.textContent=(`Il reste ${Math.floor(days)} jour ${Math.floor(stayhours)} heures ${Math.floor(stayMinutes)} minutes et ${Math.floor(staySeconde)} secondes`);
    divdisplay.appendChild(paraDays)


    paraweek.textContent=(`Il reste ${Math.floor(week)} semaine ${Math.floor(stayDays)} jour ${Math.floor(stayhours)} heures ${Math.floor(stayMinutes)} minutes et ${Math.floor(staySeconde)} secondes`);
    divdisplay.appendChild(paraweek)

}

setInterval(`updateDate()`,1000)

