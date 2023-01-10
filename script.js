
// Daily Challenge: Tell The Story



/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: In todays exercise we will be creating a Mad Libs
 *  game.If you’ve never played this game, a mad lib is a game where
 *  you fill in a bunch of blank inputs with different word types 
 * (ie : noun, adjective, verb), and4 then a story is generated based on the words you chose,and sometimes the story is surprisingly funny.
 * Date : 05/01/2023
 */


/* 1  Get the value of each of the inputs in 
the HTML file when the form is submitted. Remember the event.preventDefault() */


//We create a var getForm to take form 
let getForm = document.getElementById('libform')

getForm.addEventListener("submit",Madlib)


function Madlib(e){
    e.preventDefault()
    let noun = document.getElementById('noun').value.trim()
    let adjective = document.getElementById('adjective').value.trim()
    let person = document.getElementById('person').value.trim()
    let verb = document.getElementById('verb').value.trim()
    let place = document.getElementById('place').value.trim();
    let span = document.getElementById('story')
    let words = [ person, verb, noun, adjective, place ]


//2 Make sure the values are not empty  

    let iSempty=false
    words.forEach(element => {
        if(element.length==0 || !isNaN(element)) {
            iSempty=true
        }
        
    });

    if(iSempty){
        alert('At least a field is empty')
    }
    else{
//3  Write a story that uses each of the values.
        span.innerHTML = words.join(' ')
    }

//4  Make sure you check the console for errors when playing the game.

// Done

}



