var b,o,d,h,r;

function update(changed) {
    if (changed == "bin") {
        b = document.getElementById("bin").value;
        d = parseInt(b, 2);

        o = d.toString(8);
        h = d.toString(16);
        r = hexToRGB(h);

        display(b,o,d,h,r);
    } else
    if (changed == "oct") {
        o = document.getElementById("oct").value;
        d = parseInt(o, 8);

        b = d.toString(2);
        h = d.toString(16);
        r = hexToRGB(h);
        
        display(b,o,d,h,r);
    } else
    if (changed == "dec") {
        d = document.getElementById("dec").value;
        d = parseInt(d);

        b = d.toString(2);
        o = d.toString(8);
        h = d.toString(16);
        r = hexToRGB(h);

        display(b,o,d,h,r);
    } else
    if (changed == "hex") {
        h = document.getElementById("hex").value;
        d = parseInt(h, 16);

        b = d.toString(2);
        o = d.toString(8);
        r = hexToRGB(h);
        
        display(b,o,d,h,r);
    } else
    if (changed == "rgb") {
        h = document.getElementById("colourDisplay").value.substr(1);
        d = parseInt(h, 16);

        b = d.toString(2);
        o = d.toString(8);
        r = hexToRGB(h);
        
        display(b,o,d,h,r);
    }
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
        document.getElementById("colourDisplay").style.background = "rgb(" + result + ")"; 
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