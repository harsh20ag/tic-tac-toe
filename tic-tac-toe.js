
var display = document.querySelector(".name");
var turn = 0; var current; var flag = 0;
var allspace = document.querySelectorAll(".playspace");
var multiplayer = document.querySelector(".multi");
var singleplayer = document.querySelector(".single");
var singleactive = 0, multipleactive = 0;
document.querySelector('.single').addEventListener('click', function () {
    singleplayer.style.cursor = "default";
    multiplayer.style.cursor = "default";
    if (flag == 0 && turn > -1) {
        flag = 1; singleactive = 1;
        display.innerHTML = "Your's Turn";
        MouseCursor();
        for (i = 0; i < 9; i++) {

            allspace[i].addEventListener('click', function () {
                if (singleactive == 1) {
                    var idcheck = this.id;
                    var text = document.querySelector('#' + idcheck).innerHTML;
                    if (turn < 9 && turn % 2 == 0 && text == "" && flag == 1) {
                        document.querySelector('#' + idcheck).style.opacity = "0.8";
                        setTimeout(function () {
                            document.querySelector('#' + idcheck).style.opacity = "1";
                        }, 300);
                        current = this.id;
                        turn++;
                        GameBegin();

                    }
                }
            })
        }

        function GameBegin() {
            document.querySelector('#' + current).innerHTML = "X";
            document.querySelector('#' + current).style.color = "red";
            document.querySelector('#' + current).classList.add('fontstyle');
            var player1 = "You", player2 = "Computer";
            check(player1, player2);
            if (flag != 0) {
                display.innerHTML = "Computer's Turn";
                setTimeout(ComputerPlay, 1000);
            }


        }

        function ComputerPlay() {
            var curturn = turn;
            var a = document.querySelector('#one').innerHTML;
            var b = document.querySelector('#two').innerHTML;
            var c = document.querySelector('#three').innerHTML;
            var d = document.querySelector('#four').innerHTML;
            var e = document.querySelector('#five').innerHTML;
            var f = document.querySelector('#six').innerHTML;
            var g = document.querySelector('#seven').innerHTML;
            var h = document.querySelector('#eight').innerHTML;
            var i = document.querySelector('#nine').innerHTML;
            if (a == b && a == 'O' && c == "") {
                document.querySelector('#three').innerHTML = "O";
                document.querySelector('#three').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#three').style.opacity = "1";
                }, 300);
                document.querySelector('#three').style.color = "blue";
                document.querySelector('#three').classList.add('fontstyle');
                turn++;
            }
            else if (b == c && b == 'O' && a == "") {
                document.querySelector('#one').innerHTML = "O";
                document.querySelector('#one').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#one').style.opacity = "1";
                }, 300);
                document.querySelector('#one').style.color = "blue";
                document.querySelector('#one').classList.add('fontstyle');
                turn++;
            }
            else if (a == c && a == 'O' && b == "") {
                document.querySelector('#two').innerHTML = "O";
                document.querySelector('#two').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#two').style.opacity = "1";
                }, 300);
                document.querySelector('#two').style.color = "blue";
                document.querySelector('#two').classList.add('fontstyle');
                turn++;
            }
            else if (d == e && e == 'O' && f == "") {
                document.querySelector('#six').innerHTML = "O";
                document.querySelector('#six').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#six').style.opacity = "1";
                }, 300);
                document.querySelector('#six').style.color = "blue";
                document.querySelector('#six').classList.add('fontstyle');
                turn++;
            }
            else if (e == f && e == 'O' && d == "") {
                document.querySelector('#four').innerHTML = "O";
                document.querySelector('#four').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#four').style.opacity = "1";
                }, 300);
                document.querySelector('#four').style.color = "blue";
                document.querySelector('#four').classList.add('fontstyle');
                turn++;
            }
            else if (d == f && d == 'O' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (g == i && g == 'O' && h == "") {
                document.querySelector('#eight').innerHTML = "O";
                document.querySelector('#eight').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#eight').style.opacity = "1";
                }, 300);
                document.querySelector('#eight').style.color = "blue";
                document.querySelector('#eight').classList.add('fontstyle');
                turn++;
            }
            else if (a == g && g == 'O' && d == "") {
                document.querySelector('#four').innerHTML = "O";
                document.querySelector('#four').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#four').style.opacity = "1";
                }, 300);
                document.querySelector('#four').style.color = "blue";
                document.querySelector('#four').classList.add('fontstyle');
                turn++;
            }
            else if (b == h && b == 'O' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (c == i && c == 'O' && f == "") {
                document.querySelector('#six').innerHTML = "O";
                document.querySelector('#six').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#six').style.opacity = "1";
                }, 300);
                document.querySelector('#six').style.color = "blue";
                document.querySelector('#six').classList.add('fontstyle');
                turn++;
            }
            else if (c == g && c == 'O' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (a == i && a == 'O' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (g == h && g == 'O' && i == "") {
                document.querySelector('#nine').innerHTML = "O";
                document.querySelector('#nine').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#nine').style.opacity = "1";
                }, 300);
                document.querySelector('#nine').style.color = "blue";
                document.querySelector('#nine').classList.add('fontstyle');
                turn++;
            }
            else if (h == i && h == 'O' && g == "") {
                document.querySelector('#seven').innerHTML = "O";
                document.querySelector('#seven').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#seven').style.opacity = "1";
                }, 300);
                document.querySelector('#seven').style.color = "blue";
                document.querySelector('#seven').classList.add('fontstyle');
                turn++;
            }
            else if (a == d && a == 'O' && g == "") {
                document.querySelector('#seven').innerHTML = "O";
                document.querySelector('#seven').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#seven').style.opacity = "1";
                }, 300);
                document.querySelector('#seven').style.color = "blue";
                document.querySelector('#seven').classList.add('fontstyle');
                turn++;
            }
            else if (g == d && g == 'O' && a == "") {
                document.querySelector('#one').innerHTML = "O";
                document.querySelector('#one').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#one').style.opacity = "1";
                }, 300);
                document.querySelector('#one').style.color = "blue";
                document.querySelector('#one').classList.add('fontstyle');
                turn++;
            }
            else if (b == e && b == 'O' && h == "") {
                document.querySelector('#eight').innerHTML = "O";
                document.querySelector('#eight').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#eight').style.opacity = "1";
                }, 300);
                document.querySelector('#eight').style.color = "blue";
                document.querySelector('#eight').classList.add('fontstyle');
                turn++;
            }
            else if (e == h && e == 'O' && b == "") {
                document.querySelector('#two').innerHTML = "O";
                document.querySelector('#two').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#two').style.opacity = "1";
                }, 300);
                document.querySelector('#two').style.color = "blue";
                document.querySelector('#two').classList.add('fontstyle');
                turn++;
            }
            else if (c == f && c == 'O' && i == "") {
                document.querySelector('#nine').innerHTML = "O";
                document.querySelector('#nine').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#nine').style.opacity = "1";
                }, 300);
                document.querySelector('#nine').style.color = "blue";
                document.querySelector('#nine').classList.add('fontstyle');
                turn++;
            }
            else if (i == f && f == 'O' && c == "") {
                document.querySelector('#three').innerHTML = "O";
                document.querySelector('#three').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#three').style.opacity = "1";
                }, 300);
                document.querySelector('#three').style.color = "blue";
                document.querySelector('#three').classList.add('fontstyle');
                turn++;
            }
            else if (a == e && a == 'O' && i == "") {
                document.querySelector('#nine').innerHTML = "O";
                document.querySelector('#nine').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#nine').style.opacity = "1";
                }, 300);
                document.querySelector('#nine').style.color = "blue";
                document.querySelector('#nine').classList.add('fontstyle');
                turn++;
            }
            else if (i == e && e == 'O' && a == "") {
                document.querySelector('#one').innerHTML = "O";
                document.querySelector('#one').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#one').style.opacity = "1";
                }, 300);
                document.querySelector('#one').style.color = "blue";
                document.querySelector('#one').classList.add('fontstyle');
                turn++;
            }
            else if (c == e && e == 'O' && g == "") {
                document.querySelector('#seven').innerHTML = "O";
                document.querySelector('#seven').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#seven').style.opacity = "1";
                }, 300);
                document.querySelector('#seven').style.color = "blue";
                document.querySelector('#seven').classList.add('fontstyle');
                turn++;
            }
            else if (g == e && e == 'O' && c == "") {
                document.querySelector('#three').innerHTML = "O";
                document.querySelector('#three').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#three').style.opacity = "1";
                }, 300);
                document.querySelector('#three').style.color = "blue";
                document.querySelector('#three').classList.add('fontstyle');
                turn++;
            }
            else if (a == b && a == 'X' && c == "") {
                document.querySelector('#three').innerHTML = "O";
                document.querySelector('#three').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#three').style.opacity = "1";
                }, 300);
                document.querySelector('#three').style.color = "blue";
                document.querySelector('#three').classList.add('fontstyle');
                turn++;
            }
            else if (b == c && b == 'X' && a == "") {
                document.querySelector('#one').innerHTML = "O";
                document.querySelector('#one').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#one').style.opacity = "1";
                }, 300);
                document.querySelector('#one').style.color = "blue";
                document.querySelector('#one').classList.add('fontstyle');
                turn++;
            }
            else if (a == c && a == 'X' && b == "") {
                document.querySelector('#two').innerHTML = "O";
                document.querySelector('#two').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#two').style.opacity = "1";
                }, 300);
                document.querySelector('#two').style.color = "blue";
                document.querySelector('#two').classList.add('fontstyle');
                turn++;
            }
            else if (d == e && e == 'X' && f == "") {
                document.querySelector('#six').innerHTML = "O";
                document.querySelector('#six').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#six').style.opacity = "1";
                }, 300);
                document.querySelector('#six').style.color = "blue";
                document.querySelector('#six').classList.add('fontstyle');
                turn++;
            }
            else if (e == f && e == 'X' && d == "") {
                document.querySelector('#four').innerHTML = "O";
                document.querySelector('#four').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#four').style.opacity = "1";
                }, 300);
                document.querySelector('#four').style.color = "blue";
                document.querySelector('#four').classList.add('fontstyle');
                turn++;
            }
            else if (d == f && d == 'X' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (g == i && g == 'X' && h == "") {
                document.querySelector('#eight').innerHTML = "O";
                document.querySelector('#eight').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#eight').style.opacity = "1";
                }, 300);
                document.querySelector('#eight').style.color = "blue";
                document.querySelector('#eight').classList.add('fontstyle');
                turn++;
            }
            else if (a == g && g == 'X' && d == "") {
                document.querySelector('#four').innerHTML = "O";
                document.querySelector('#four').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#four').style.opacity = "1";
                }, 300);
                document.querySelector('#four').style.color = "blue";
                document.querySelector('#four').classList.add('fontstyle');
                turn++;
            }
            else if (b == h && b == 'X' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (c == i && c == 'X' && f == "") {
                document.querySelector('#six').innerHTML = "O";
                document.querySelector('#six').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#six').style.opacity = "1";
                }, 300);
                document.querySelector('#six').style.color = "blue";
                document.querySelector('#six').classList.add('fontstyle');
                turn++;
            }
            else if (c == g && c == 'X' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (a == i && a == 'X' && e == "") {
                document.querySelector('#five').innerHTML = "O";
                document.querySelector('#five').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#five').style.opacity = "1";
                }, 300);
                document.querySelector('#five').style.color = "blue";
                document.querySelector('#five').classList.add('fontstyle');
                turn++;
            }
            else if (g == h && g == 'X' && i == "") {
                document.querySelector('#nine').innerHTML = "O";
                document.querySelector('#nine').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#nine').style.opacity = "1";
                }, 300);
                document.querySelector('#nine').style.color = "blue";
                document.querySelector('#nine').classList.add('fontstyle');
                turn++;
            }
            else if (h == i && h == 'X' && g == "") {
                document.querySelector('#seven').innerHTML = "O";
                document.querySelector('#seven').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#seven').style.opacity = "1";
                }, 300);
                document.querySelector('#seven').style.color = "blue";
                document.querySelector('#seven').classList.add('fontstyle');
                turn++;
            }
            else if (a == d && a == 'X' && g == "") {
                document.querySelector('#seven').innerHTML = "O";
                document.querySelector('#seven').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#seven').style.opacity = "1";
                }, 300);
                document.querySelector('#seven').style.color = "blue";
                document.querySelector('#seven').classList.add('fontstyle');
                turn++;
            }
            else if (g == d && g == 'X' && a == "") {
                document.querySelector('#one').innerHTML = "O";
                document.querySelector('#one').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#one').style.opacity = "1";
                }, 300);
                document.querySelector('#one').style.color = "blue";
                document.querySelector('#one').classList.add('fontstyle');
                turn++;
            }
            else if (b == e && b == 'X' && h == "") {
                document.querySelector('#eight').innerHTML = "O";
                document.querySelector('#eight').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#eight').style.opacity = "1";
                }, 300);
                document.querySelector('#eight').style.color = "blue";
                document.querySelector('#eight').classList.add('fontstyle');
                turn++;
            }
            else if (e == h && e == 'X' && b == "") {
                document.querySelector('#two').innerHTML = "O";
                document.querySelector('#two').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#two').style.opacity = "1";
                }, 300);
                document.querySelector('#two').style.color = "blue";
                document.querySelector('#two').classList.add('fontstyle');
                turn++;
            }
            else if (c == f && c == 'X' && i == "") {
                document.querySelector('#nine').innerHTML = "O";
                document.querySelector('#nine').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#nine').style.opacity = "1";
                }, 300);
                document.querySelector('#nine').style.color = "blue";
                document.querySelector('#nine').classList.add('fontstyle');
                turn++;
            }
            else if (i == f && f == 'X' && c == "") {
                document.querySelector('#three').innerHTML = "O";
                document.querySelector('#three').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#three').style.opacity = "1";
                }, 300);
                document.querySelector('#three').style.color = "blue";
                document.querySelector('#three').classList.add('fontstyle');
                turn++;
            }
            else if (a == e && a == 'X' && i == "") {
                document.querySelector('#nine').innerHTML = "O";
                document.querySelector('#nine').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#nine').style.opacity = "1";
                }, 300);
                document.querySelector('#nine').style.color = "blue";
                document.querySelector('#nine').classList.add('fontstyle');
                turn++;
            }
            else if (i == e && e == 'X' && a == "") {
                document.querySelector('#one').innerHTML = "O";
                document.querySelector('#one').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#one').style.opacity = "1";
                }, 300);
                document.querySelector('#one').style.color = "blue";
                document.querySelector('#one').classList.add('fontstyle');
                turn++;
            }
            else if (c == e && e == 'X' && g == "") {
                document.querySelector('#seven').innerHTML = "O";
                document.querySelector('#seven').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#seven').style.opacity = "1";
                }, 300);
                document.querySelector('#seven').style.color = "blue";
                document.querySelector('#seven').classList.add('fontstyle');
                turn++;
            }
            else if (g == e && e == 'X' && c == "") {
                document.querySelector('#three').innerHTML = "O";
                document.querySelector('#three').style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#three').style.opacity = "1";
                }, 300);
                document.querySelector('#three').style.color = "blue";
                document.querySelector('#three').classList.add('fontstyle');
                turn++;
            }
            if (turn == curturn) {
                var space = current;
                while (document.querySelector('#' + space).innerHTML != "") {
                    var temp = Math.floor(Math.random() * 8) + 1;
                    if (temp == 1) {
                        space = "one";
                    }
                    else if (temp == 2) {
                        space = "two";
                    }
                    else if (temp == 3) {
                        space = "three";
                    }
                    else if (temp == 4) {
                        space = "four";
                    }
                    else if (temp == 5) {
                        space = "five";
                    }
                    else if (temp == 6) {
                        space = "six";
                    }
                    else if (temp == 7) {
                        space = "seven";
                    }
                    else if (temp == 8) {
                        space = "eight";
                    }
                    else if (temp == 9) {
                        space = "nine";
                    }


                }
                document.querySelector('#' + space).innerHTML = "O";
                document.querySelector('#' + space).style.color = "blue";
                document.querySelector('#' + space).classList.add('fontstyle');
                document.querySelector('#' + space).style.opacity = "0.8";
                setTimeout(function () {
                    document.querySelector('#' + space).style.opacity = "1";
                }, 300);
                turn++;
            }
            var player1 = "You", player2 = "Computer";
            check(player1, player2);
            if (flag != 0) {
                display.innerHTML = "Your's Turn";
            }
        }


    }

})

document.querySelector('.multi').addEventListener('click', function () {
    multiplayer.style.cursor = "default";
    singleplayer.style.cursor = "default";
    if (flag == 0 && turn > -1) {
        flag = 1; multipleactive = 1;
        display.innerHTML = "Player 1's Turn"
        for (i = 0; i < 9; i++) {
            allspace[i].style.cursor = "pointer";
            allspace[i].addEventListener('click', function () {
                if (multipleactive == 1) {
                    var idcheck = this.id;
                    var text = document.querySelector('#' + idcheck).innerHTML;
                    if (turn < 9 && text == "" && flag == 1) {

                        current = this.id;
                        document.querySelector('#' + current).style.opacity = "0.8";
                        setTimeout(function () {
                            document.querySelector('#' + current).style.opacity = "1";
                        }, 300);
                        turn++;
                        GameStart();

                    }
                }
            })
        }
        function GameStart() {
            if (turn % 2 == 0) {
                display.innerHTML = "Player 1's Turn";
                document.querySelector('#' + current).innerHTML = "O";
                document.querySelector('#' + current).style.color = "blue";
                document.querySelector('#' + current).classList.add('fontstyle');
            }
            else {
                display.innerHTML = "Player 2's Turn";
                document.querySelector('#' + current).innerHTML = "X";
                document.querySelector('#' + current).style.color = "red";
                document.querySelector('#' + current).classList.add('fontstyle');
            }
            var player1 = "Player 1"; var player2 = "Player 2";
            check(player1, player2);
        }
    }
})


function check(player1, player2) {

    var a = document.querySelector('#one').innerHTML;
    var b = document.querySelector('#two').innerHTML;
    var c = document.querySelector('#three').innerHTML;
    var d = document.querySelector('#four').innerHTML;
    var e = document.querySelector('#five').innerHTML;
    var f = document.querySelector('#six').innerHTML;
    var g = document.querySelector('#seven').innerHTML;
    var h = document.querySelector('#eight').innerHTML;
    var i = document.querySelector('#nine').innerHTML;
    if (a == b && b == c && a == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;

    }
    else if (d == e && e == f && e == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;

    }
    else if (g == h && h == i && g == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;
    }
    else if (a == d && d == g && a == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;
    }
    else if (b == e && e == h && b == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;

    }
    else if (c == f && c == i && c == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;

    }
    else if (a == e && e == i && a == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;

    }
    else if (c == e && c == g && c == "X") {
        if (player1 == "You") {
            display.innerHTML = player1 + " " + "Win!";
        }
        else { display.innerHTML = player1 + " " + "Wins!"; }
        flag = 0; turn = -1;

    }

    else if (a == b && b == c && a == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;
    }

    else if (d == e && e == f && e == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;

    }
    else if (g == h && h == i && g == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;

    }
    else if (a == d && d == g && a == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;

    }
    else if (b == e && e == h && b == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;

    }
    else if (c == f && c == i && c == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;

    }
    else if (a == e && e == i && a == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;

    }
    else if (c == e && c == g && c == "O") {
        display.innerHTML = player2 + " " + "Wins!";
        flag = 0; turn = -1;

    }
    else if (turn == 9) {
        display.innerHTML = "Game Draw!";
        flag = 0; turn = -1;



    }
    if (flag == 0) {
        for (num = 0; num < 9; num++) {
            allspace[num].style.cursor = "default";
        }
    }
}

function MouseCursor() {
    for (i = 0; i < 9; i++) {
        allspace[i].style.cursor = "pointer";
    }
}
function GameStop() {
    flag = 0; turn = 0;
    display.innerHTML = "Tic-Tac-Toe";
    multiplayer.style.cursor = "pointer";
    singleplayer.style.cursor = "pointer";
    singleactive = 0; multipleactive = 0;
    for (i = 0; i < 9; i++) {
        allspace[i].innerHTML = "";

    }

}

document.querySelector(".refresh").addEventListener('click', function () {
    GameStop();
})
