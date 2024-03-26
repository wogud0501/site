function addProduct() {
    var productID = document.getElementById("productDoc").value;
    var productName = document.getElementById("productName").value;
    var available = document.getElementById("available").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText); // 서버로부터의 응답을 알림으로 표시
        }
    };
    xhttp.open("POST", "connect.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // POST 요청으로 상품 정보를 전송
    xhttp.send("productDoc=" + productDoc + "&productName=" + productName + "&available=" + available);
}
