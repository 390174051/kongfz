<?php 
 header('Access-Control-Allow-Origin:*');
 header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTION');
 header('Access-Control-Allow-Headers:x-requested-with,content-type');
    $servername="localhost" ;
    $name="root" ;
    $password="root" ;
    $mysql="bookshop" ;
    $connect=new mysqli($servername,$name,$password,$mysql) ;
    if($connect->connect_error){
        die("连接失败".$connect->connect_error) ;
    }
    $create = "create table users (name char(12),password char(12),phone char(11),email char(20))";
    if($connect->query($create)===true){
        echo "创建表成功";
    }
?>