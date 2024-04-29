var rowData = [
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' }
];

document.addEventListener("click" , function(event) {
    if  ( event.target.matches("#productLoc , #productName, #available") ) {
        document.getElementById("row1Btn").style.display = "inline-block";
        document.getElementById("row2Btn").style.display = "inline-block";
        document.getElementById("row3Btn").style.display = "inline-block";
        document.getElementById("row4Btn").style.display = "inline-block";
        document.getElementById("row5Btn").style.display = "inline-block";
    }
}