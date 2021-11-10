var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;
var moves = 0;

function checkWinX(){
    if($(".row-1 .box.X").length === 3
    || $(".row-2 .box.X").length === 3
    || $(".row-3 .box.X").length === 3
    || $(".col-1.X").length === 3
    || $(".col-2.X").length === 3
    || $(".col-3.X").length === 3
    || $("#1").hasClass("X")
    && $("#5").hasClass("X")
    && $("#9").hasClass("X")
    || $("#3").hasClass("X")
    && $("#5").hasClass("X")
    && $("#7").hasClass("X")){
        return true
    }
}



function checkWinO(){
    if($(".row-1 .box.O").length === 3
    || $(".row-2 .box.O").length === 3
    || $(".row-3 .box.O").length === 3
    || $(".col-1.O").length === 3
    || $(".col-2.O").length === 3
    || $(".col-3.O").length === 3
    || $("#1").hasClass("O")
    && $("#5").hasClass("O")
    && $("#9").hasClass("O")
    || $("#3").hasClass("O")
    && $("#5").hasClass("O")
    && $("#7").hasClass("O")){
        return true
    }
}


function boardReset(){
    $(".X").empty();
    $(".O").empty();
    $(".X").removeClass("X");
    $(".O").removeClass("O");
    turn = 1
    $("#turn").text("P1");
}


$(".box").click(function(){
    if($(this).hasClass("X") || $(this).hasClass("O")){
    }
    else if(turn === 1){
        $(this).text("X");
        turn = 2;
        $("#turn").text("P2");
        $(this).addClass("X");
        moves = moves + 1
        if(checkWinX()){
        p1Score++
        moves = 0
        $("#p1Score").text(p1Score);
        boardReset();
        }
        else if(moves === 9){
            $("#tie").text(tie = tie + 1);
            boardReset();
        }
    }
    else{
        $(this).text("O");
        turn = 1
        $("#turn").text("P1");
        $(this).addClass("O");
        moves = moves + 1
        if(checkWinO()){
        p2Score++
        moves = 0
        $("#p2Score").text(p2Score);
        boardReset();
        }
        else if(moves === 9){
            $("#tie").text(tie = tie + 1);
            boardReset();
        }
    }
});


$(".resetbtn").click(function(){
    $("#p1Score").text(0);
    p1Score=0;
    $("#p2Score").text(0);
    p2Score=0
    $("#tie").text(0);
    tie=0;
});