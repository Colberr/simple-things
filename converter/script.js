var b,o,d,h,r;

function update(changed) {
    if (changed == "bin") {
        b = document.getElementById("bin").value;
    } else
    if (changed == "oct") {
        o = document.getElementById("oct").value;
    } else
    if (changed == "dec") {
        d = document.getElementById("dec").value;

        b = decimalTo(d,2);
        o = decimalTo(d,8);
        h = decimalTo(d,16);
        r = hexToRGB(h);

        display(b,o,d,h,r);
    } else
    if (changed == "hex") {
        h = document.getElementById("hex").value;
    } else
    if (changed == "rgb") {
        r = document.getElementById("rgb").value;
    }
}

function decimalTo(decimal, x) {
    var result = [];
    while (decimal > 0) {
        var quotient = Math.floor(decimal/x);
        var modulus = decimal % x;

        // If hexadecimal
        if (x == 16 && modulus >= 10) {
            if (modulus == 10) {modulus = "A"}
            else if (modulus == 11) {modulus = "B"}
            else if (modulus == 12) {modulus = "C"}
            else if (modulus == 13) {modulus = "D"}
            else if (modulus == 14) {modulus = "E"}
            else if (modulus == 15) {modulus = "F"}
        }

        result.unshift(modulus);
        decimal = quotient;
    }
    result = result.join("");
    return result;
}

function hexToRGB(hex) {
    var hex = hex.split("");
    if (hex.length == 6) {
        var result = [];
        for (var i=0;i<3;i++) {
            var temp = hex[2*i] + hex[2*i + 1];
            temp = parseInt(temp, 16);
            result.push(temp);
        }
        result = result.join(",");
        return(result);
    } else {
        return("N/A");
    }
}

function display(b,o,d,h,r) {
    document.getElementById("bin").value = b;
    document.getElementById("oct").value = o;
    document.getElementById("dec").value = d;
    document.getElementById("hex").value = h;
    document.getElementById("rgb").value = r;
}