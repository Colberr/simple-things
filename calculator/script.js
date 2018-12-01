var disparr = [];
var max = 15;

function input(char) {
    if (disparr.length < max) {
        disparr.push(char);
        document.getElementById("display").value += char;

        if (disparr.join("") == "5318008") {
            document.getElementById("display").value = "(.) (.)";
            setTimeout(function() {
                document.getElementById("display").value = disparr.join("");
            }, 300);
        }
        return disparr;
    }
}

function wipe() {
    disparr = [];
    document.getElementById("display").value = "";
    return disparr;
}

function backspace() {
    disparr.splice(-1,1);
    document.getElementById("display").value = disparr.join("");
    return disparr;
}

function equals() {
    var ans = eval(disparr.join(""));
    ans = (""+ans).split("");
    if (ans.length > max-3) {
        ans = ans.slice(0, max-3);
    }
    disparr = ans;
    ans = parseFloat(ans.join(""));
    document.getElementById("display").value = ans;
    return disparr;
}

// Typing with numbers & symbols (13 is enter for eqauls)
function keyCode(event) {
    var charNo = event.charCode;
    if (charNo >= 42  && charNo < 58) {
        if (charNo != 44) {
            input(event.key);
        }
    }
    else if (charNo == 13) {
        equals();
    }
}

window.onload = function() {
    // Backspace
    document.body.onkeydown = function(event) {
        var key = event.keyCode;
        if (key == 8) {
            backspace();
        }
    }
}