var selectedRow =  0;
function changeRow(rowNumber) {
    selectedRow = rowNumber;
    alert("행 " + rowNumber + "선택");
}

function addProduct() {
    var productDoc = document.getElementById("productName").value;
    var productName = document.getElementById("productDoc").value;
    var available = document.getElementById("available").value;

    var firstRow = document.querySelector('tbody tr');

    var cells = firstRow.getElementsByTagName('td')

    cells[1].textContent = productName;
    cells[2].textContent = productDoc;
    cells[3].textContent = available;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText); // 서버로부터의 응답'을 알림으로 표시
        }
    };
    xhttp.open("POST", "./add_product.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // POST 요청으로 상품 정보를 전송
    xhttp.send("productName=" + productName + "&productDoc=" + productDoc  + "&available=" + available);
}
