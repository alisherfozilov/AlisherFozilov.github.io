function open_card() {
    document.getElementById('outside').className = 'open-card';
}

function close_card() {
    document.getElementById('outside').className = '';
}

function make_button_visible() {
    document.getElementById('outside-button').className = 'button-visible';
}

i = 0;
dt = new Array("black", "red", "green", "   yellow", "blue");

function next_cl() {
    i++;
    document.getElementById("name").style.color = dt[i];
    if (i > dt.length) i = 0;
    setTimeout("next_cl()", 500);
}

next_cl();