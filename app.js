function createParagraph(){
    var wordOne = document.getElementById('textOne').value;
    var wordTwo = document.getElementById('textTwo').value
    var wordThree = document.getElementById('textThree').value
    var wordFour = document.getElementById('textFour').value
    var wordFive = document.getElementById('textFive').value
    var wordSix = document.getElementById('textSix').value
    var wordSeven = document.getElementById('textSeven').value
    var wordEight = document.getElementById('textEight').value
    var wordNine = document.getElementById('textNine').value
    var wordTen = document.getElementById('textTen').value
    var wordEleven = document.getElementById('textEleven').value
    var wordTwelve = document.getElementById('textTwelve').value
    var wordThirteen = document.getElementById('textThirteen').value
    var wordFourteen = document.getElementById('textFourteen').value
    var wordFifteen = document.getElementById('textFifteen').value
    var wordSixteen = document.getElementById('textSixteen').value
    var wordSeventeen = document.getElementById('textSeventeen').value


var paragraph = "There are many kinds of " + wordOne  + " animals that " + wordTwo + " on a farm." + " For example, " + wordThree + " and " + wordFour + ' ' + wordFive + " eggs, and " + wordSix + " comes from farm-raised. " + wordSeven + " On a diary farm, " + wordEight + " and " + wordNine + " make " + wordTen + " that people drink and also use to make " + wordEleven + " and " + wordTwelve + " Some farm animals like " + wordThirteen + " and " + wordFourteen + " have soft " + wordFifteen + " which is used to make " + wordSixteen + " and " + wordSeventeen +".";
document.getElementById('answer').innerHTML = paragraph 
}