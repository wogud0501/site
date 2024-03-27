<?php
require_once "init.php";

// 상품 정보 수신
global $productDoc, $productName, $available;
$productDoc = $_POST['productDoc'];
$productName = $_POST['productName'];
$available = $_POST['available'];

// MySQL 에 연결
global $servername, $username, $password, $dbname;
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("연결 실패: " . $conn->connect_error);
}

// SQL 쿼리 작성
$sql = "INSERT INTO product (ProductDoc, ProductName, available)
VALUES ('$productDoc', '$productName', '$available')";

// 쿼리 실행
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "error";
}

// MySQL 연결 닫기
$conn->close();

