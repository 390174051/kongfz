<?php 
   header('Access-Control-Allow-Origin: *'); 
   header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
   header('Access-Control-Allow-Headers: x-requested-with, content-type'); 
    $con=new mysqli("localhost","root","root","bookshop");
    // if($con->connect_error) {
    //     die("连接失败".$con->connect_error);
    // }else {
    //     echo "连接成功";
    // }
    
    $select="select * from author;";
    $txt=$con->query($select);
    if($txt->num_rows>0) {
        while($article=$txt->fetch_assoc()) {
            $articles[]=$article;
        }
    }
    echo json_encode($articles);
?>