/* index 배열 정의*/
var rowData = [
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' },
    { location : ' ', name: ' ', count: ' ' }
];
/* 버튼 활성화 */
document.addEventListener("click", function(event) {
    if (event.target.matches("#productLoc, #productName, #available")) {
        for (let i = 1; i <= 5; i++) {
            document.getElementById("row" + i + "Btn").style.display = "inline-block";
        }
    }
});

function changeRow(rowNum) {
    alert(rowNum + "번째 행이 변경 되었습니다!");
}
/* Update row */
function updateRow() {
    var productLoc = document.getElementById("productLoc").value;
    var productName = document.getElementById("productName").value;
    var available = document.getElementById("available").value;

    var selectedRow = getSelectedRow();

    rowData[selectedRow].location = productLoc;
    rowData[selectedRow].name = productName;
    rowData[selectedRow].count = available;

    /* Update the table */
}