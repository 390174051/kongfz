<?php
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: x-requested-with, content-type'); 
    $servername="localhost";
    $name="root";
    $password="root";
    $mysql="bookshop";
    $connect=new mysqli($servername,$name,$password,$mysql);
    // if($connect->connect_error){
    //     die("连接失败".$connect->connect_error);
    // }echo "连接成功";



    $select="select * from kongfz;";
    $txt=$connect->query($select);
    if($txt->num_rows>0){
        // var_dump($txt->num_rows);
        while($arr=$txt->fetch_assoc()){
            $arr1[]=$arr;
        }
    }
    echo json_encode($arr1)
?>