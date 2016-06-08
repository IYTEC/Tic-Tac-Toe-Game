var box_1o1, box_1o2, box_1o3, box_2o1, box_2o2, box_2o3, box_3o1, box_3o2, box_3o3, boxcount, current_player_pick, boxcount = 0, person_value, computer_value;
$(document).ready(function(){    
    $("#1o1").click(function(event){ box_1o1 = $(event.target)[0].id; play_game(box_1o1); });
    $("#1o2").click(function(event){ box_1o2 = $(event.target)[0].id; play_game(box_1o2); });
    $("#1o3").click(function(event){ box_1o3 = $(event.target)[0].id; play_game(box_1o3); });
    $("#2o1").click(function(event){ box_2o1 = $(event.target)[0].id; play_game(box_2o1); });
    $("#2o2").click(function(event){ box_2o2 = $(event.target)[0].id; play_game(box_2o2); });
    $("#2o3").click(function(event){ box_2o3 = $(event.target)[0].id; play_game(box_2o3); });
    $("#3o1").click(function(event){ box_3o1 = $(event.target)[0].id; play_game(box_3o1); });
    $("#3o2").click(function(event){ box_3o2 = $(event.target)[0].id; play_game(box_3o2); });
    $("#3o3").click(function(event){ box_3o3 = $(event.target)[0].id; play_game(box_3o3); });
    
    initialize();
});
function initialize(){
     while(true){
         if(current_player_pick === "X" || current_player_pick === "O"){
             nextTurn = current_player_pick.toUpperCase();
             person_value = nextTurn;
             if(person_value === "X"){
                 computer_value = "O";
             }else if(person_value === "O"){
                 computer_value = "X";
             }
             break;
         }else{
             current_player_pick = prompt("Please Choose Between X or O");
         }
     }
    nextTurn = current_player_pick;
    alert("You picked " + current_player_pick);
}

/********************************************
// Person Play
*******************************************/
function person_play(id){
    box_1o1 = document.getElementById("1o1");
    box_1o2 = document.getElementById("1o2");
    box_1o3 = document.getElementById("1o3");
    box_2o1 = document.getElementById("2o1");
    box_2o2 = document.getElementById("2o2");
    box_2o3 = document.getElementById("2o3");
    box_3o1 = document.getElementById("3o1");
    box_3o2 = document.getElementById("3o2");
    box_3o3 = document.getElementById("3o3");
    
    var curr_value = document.getElementById(id);
    if(curr_value.value === ""){
        curr_value.value = nextTurn;
    }
    winning_check(id);
    changeTurn();
    boxcount++;
//    console.log(boxcount);
}

/***************************************
// Computer Play
**************************************/
function computer_play(id){
    var box_1o1 = document.getElementById("1o1");
    var box_1o2 = document.getElementById("1o2");
    var box_1o3 = document.getElementById("1o3");
    var box_2o1 = document.getElementById("2o1");
    var box_2o2 = document.getElementById("2o2");
    var box_2o3 = document.getElementById("2o3");
    var box_3o1 = document.getElementById("3o1");
    var box_3o2 = document.getElementById("3o2");
    var box_3o3 = document.getElementById("3o3");
    
    var all_value = [box_1o1.id, box_1o2.id, box_1o3.id, box_2o1.id, box_2o2.id, box_2o3.id, box_3o1.id, box_3o1.id, box_3o3.id];
    
    switch(boxcount, true){
        case 1 && box_2o2.value === "":
            box_2o2.value = nextTurn;
            break;
        case box_1o1.value === person_value && box_1o3.value === person_value && box_1o2.value === "":
            box_1o2.value = nextTurn;
            break;
        case box_1o1.value === person_value && box_3o1.value === person_value && box_2o1.value === "":
            box_2o1.value = nextTurn; 
            break;
        case box_1o3.value === person_value && box_3o3.value === person_value && box_2o2.value === "":
            box_2o2.value = nextTurn; 
            break;
        case box_3o1.value === person_value && box_3o3.value === person_value && box_3o2.value === "":
            box_3o2.value = nextTurn; 
            break;
        case box_1o1.value === person_value && box_1o2.value === person_value && box_1o3.value === "":
            box_1o3.value = nextTurn; 
            break;
        case box_2o1.value === person_value && box_2o2.value === person_value && box_2o3.value === "":
            box_2o3.value = nextTurn; 
            break;
        case box_3o1.value === person_value && box_3o2.value === person_value && box_3o3.value === "":
            box_3o3.value = nextTurn; 
            break;
        case box_1o2.value === person_value && box_1o3.value === person_value && box_1o1.value === "":
            box_1o1.value = nextTurn; 
            break;
        case box_2o2.value === person_value && box_2o3.value === person_value && box_2o1.value === "":
            box_2o1.value = nextTurn; 
            break;
        case box_3o2.value === person_value && box_3o3.value === person_value && box_3o1.value === "":
            box_3o1.value = nextTurn; 
            break;
        case box_3o1.value === person_value && box_2o1.value === person_value && box_1o1.value === "":
            box_1o1.value = nextTurn; 
            break;
         case box_3o2.value === person_value && box_2o2.value === person_value && box_1o2.value === "":
            box_1o2.value = nextTurn; 
            break;
        case box_3o3.value === person_value && box_2o3.value === person_value && box_1o3.value === "":
            box_1o3.value = nextTurn; 
            break;
        case box_1o1.value === person_value && box_2o1.value === person_value && box_3o1.value === "":
            box_3o1.value = nextTurn; 
            break;
        case box_1o2.value === person_value && box_2o2.value === person_value && box_3o2.value === "":
            box_3o2.value = nextTurn; 
            break;
        case box_1o3.value === person_value && box_2o3.value === person_value && box_3o3.value === "":
            box_3o3.value = nextTurn; 
            break;
        case box_1o1.value === person_value && box_3o3.value === person_value && box_2o2.value === "":
            box_2o2.value = nextTurn; 
            break;
            
            // Check Diagonally top left - bottom right
        case box_1o1.value === person_value && box_2o2.value === person_value && box_3o3.value === "":
            box_3o3.value = nextTurn; 
            break;
            // bottom right - top left
        case box_3o3.value === person_value && box_2o2.value === person_value && box_1o1.value === "":
            box_1o1.value = nextTurn; 
            break;
            // check diagonally bottom left to top right
        case box_3o1.value === person_value && box_2o2.value === person_value && box_1o3.value === "":
            box_1o3.value = nextTurn; 
            break;
            // top right to bottom left
        case box_1o3.value === person_value && box_2o2.value === person_value && box_3o1.value === "":
            box_3o1.value = nextTurn; 
            break;
        default:
            var pos = Math.floor(Math.random() * ((all_value.length - 1) + 1) + 1);
            for(var i = 0; i < all_value.length; i++){
                if(document.getElementById(all_value[pos]).value == ""){
                    var something = document.getElementById(all_value[pos]);
                    something.value = nextTurn;
                    break;
                }else{
                    var pos = Math.floor(Math.random() * all_value.length);
                }
            }
    }
    var current = nextTurn;
    var win = false;
    winning_check(current);
    changeTurn();
    boxcount++;
}

/*******************************************
// Game over check
******************************************/
function game_over(winning){
    if(boxcount > 8 || winning == true){
        var play_again = confirm("Game Over!!! \n\nPress OK to Play Again or Cancel");
    }
    if(play_again == true){
        location.reload();
    }
}
// Play Game
function play_game(id){
    person_play(id);
    computer_play();
    if(boxcount > 8){
        var play_again = confirm("Game Over!!! \n\nPress OK to Play Again or Cancel");
    }
    if(play_again == true){
        location.reload();
    }
}
/**************************************
// Change Turn
*************************************/
function changeTurn(){
    if(nextTurn == "X"){
        nextTurn = "O";
    }else{
        nextTurn = "X";
    }
}

/**********************************************
    // CHeck the current winner
*********************************************/
function winning_check(id){
    var current = id;
    var win = false;
    switch(true){
        case box_1o1.value === current && box_1o2.value === current && box_1o3.value === current ||
            box_2o1.value === current && box_2o2.value === current && box_2o3.value === current ||
            box_3o1.value === current && box_3o2.value === current && box_3o3.value === current:
            alert("Congratulations!!! " + current + " is the winner");
            win = true;
            game_over(win);
            break;
            
        case box_1o1.value === current && box_2o1.value === current && box_3o1.value === current ||
            box_1o2.value === current && box_2o2.value === current && box_3o2.value === current ||
            box_1o3.value === current && box_2o3.value === current && box_3o3.value === current:
            alert("Congratulations!!! " + current + " is the winner");
            win = true;
            game_over(win);
            break;
            
        case box_1o1.value === current && box_2o2.value === current && box_3o3.value === current ||
            box_1o3.value === current && box_2o2.value === current && box_3o1.value === current:
            alert("Congratulations!!! " + current + " is the winner");
            win = true;
            game_over(win);
            break;   
    }    
}