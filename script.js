function addProduct() {
    var productID = document.getElementById("productID").value;
    var productName = document.getElementById("productName").value;
    var available = document.getElementById("available").value;
    var expirationDate = document.getElementById("expirationDate").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText); // 서버로부터의 응답을 알림으로 표시
        }
    };
    xhttp.open("POST", "add_product.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // POST 요청으로 상품 정보를 전송
    xhttp.send("productID=" + productID + "&productName=" + productName + "&available=" + available + "&expirationDate=" + expirationDate);
}
