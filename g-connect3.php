<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTION');
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

$page = $_GET["page"];
$start = (($page-1)*10)+40;
$connect = new mysqli("localhost","root","root","bookshop");

$content = "select * from kongfz limit {$start},10;";
$txt = $connect->query($content);
while($list=$txt->fetch_assoc()){
    $lists[]=$list; 
}

echo json_encode($lists); 

?>