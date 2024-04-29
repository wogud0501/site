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

    var rows = document.querySelectorAll('tbody tr');
    var cells = rows[selectedRow].getElementsByTagName('td');
    cells[1].textContent = productName;
    cells[2].textContent = productLoc;
    cells [3].textContent = available;

    // 서버로 상품 전송
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("POST", "./add_product.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("productLoc=" + productLoc + "&productName=" + productName + "&available=" + available);

    /* Update the table */
}
function getSelectedRow() {
    for (let i = 1; i <= 5; i++) {
        if ( document.getElementById('row' + i).checked ) {
            return i - 1;
        }
    }
    return -1;
}