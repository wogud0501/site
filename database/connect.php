<?php
$servername = "10.114.13.79";
$username = "wogud0501";
$password = "Qwogud05041^";
$dbname = "shop";
// 상품 정보 수신
$productID = $_POST['productID'];
$productName = $_POST['productName'];
$available = $_POST['available'];
$expirationDate = $_POST['expirationDate'];

// MySQL에 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
die("연결 실패: " . $conn->connect_error);
}

// SQL 쿼리 작성
$sql = "INSERT INTO product (ProductID, ProductName, available, ExpirationDate)
VALUES ('$productID', '$productName', '$available', '$expirationDate')";

// 쿼리 실행
if ($conn->query($sql) === TRUE) {
echo "상품이 성공적으로 추가되었습니다.";
} else {
echo "상품 추가 실패: " . $conn->error;
}

// MySQL 연결 닫기
$conn->close();
