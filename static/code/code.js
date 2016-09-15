var addToResults = function(text) {
    var div = document.getElementById('results');

    div.innerHTML = div.innerHTML + '<br />' + text;
    console.log(text);
};

var assertEqual = function(x, y) {
    if(x===y) {
        addToResults("&#10004;");
    } else {
        addToResults("Test Failed! " + x + " was not equal to: " + y);
    }
};


assertEqual(1,1);
assertEqual(1,2);
assertEqual(1,1);

