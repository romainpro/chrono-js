let inputDate = document.querySelector(`#inputDate`)
let dateNow = new Date();



let btnSubmit= document.querySelector(`#submit`)
let divError = document.querySelector(`.error`)
let divdisplay = document.querySelector(`.display`)

btnSubmit.addEventListener(`click`,compareDate);


// let NewDateInputConverted= new Date(dateParse) // converti  les millisecondes en date 

function compareDate(){
//////////////////////convertir date en milliseconde///////////////////////////////////////////////////////////////
    let inputDateValue= inputDate.value
    let inputDateParse = Date.parse(inputDateValue);
        console.log(`date input ${inputDateParse}`)
        console.log( `date Now ${dateNow}`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////compare les dates /////////////////////////////////////////////////////////////////
    if(inputDateParse<dateNow){
        console.log(`erreur date est deja passer`);
        let h1Error = document.createElement(`h1`);
        h1Error.textContent ="erreur date est deja passer";
        divError.appendChild(h1Error);
    }else if (inputDateParse >= dateNow){
        
        let lastforDate = inputDateParse - dateNow;//  var temps restant avent date 
        displayTime(lastforDate);
            
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function displayTime(lastforDate){

    let second= lastforDate/1000//var seconde
    let stayMms=lastforDate%1000
        console.log(second);
        console.log(stayMms)
        
    let minutes= second/60 //var minutes
    let staySeconde =second%60
        console.log(minutes)
        console.log(staySeconde)
    
 
    let hours =minutes/60 //var heures
    let stayMinutes =minutes%60
        console.log(hours)
        console.log(stayMinutes)


    let days = hours/24 // var jours
    let stayhours=hours%24
        console.log(hours)
        console.log(stayhours)
 

    let week= days/7 // var semaines
  

let paraSecond = document.createElement(`p`)
    paraSecond.textContent=(` il reste ${Math.floor(second)}secondes pour arriver a la date  `)
    divdisplay.appendChild(paraSecond)

let paraMinute =document.createElement(`p`)
    paraMinute.textContent=(`Il reste ${Math.floor(minutes)} minutes et ${Math.floor(staySeconde)} secondes`);
    divdisplay.appendChild(paraMinute)

    let paraHours =document.createElement(`p`)
    paraHours.textContent=(`Il reste ${Math.floor(stayhours)} heures ${Math.floor(minutes)} minutes et ${Math.floor(staySeconde)} secondes`);
    divdisplay.appendChild(paraHours)
}