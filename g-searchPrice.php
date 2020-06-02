<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTION');
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

$connect = new mysqli("localhost","root","root","bookshop");
$low = $_GET["low"];
$high = $_GET["high"];

$content = "select * from kongfz where book_price>=$low and book_price<=$high limit 0,10;";

$txt = $connect->query($content);
while($list=$txt->fetch_assoc()){
    $lists[]=$list; 
}
echo json_encode($lists); 

?>