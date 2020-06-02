<?php 
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: x-requested-with, content-type'); 
    $id=$_GET["id"];
    $con=new mysqli("localhost","root","root","bookshop");
    // if($con->connect_error) {
    //     die("连接失败");
    // }
    // echo "连接成功";

    $select="select * from author where id={$id};";
    $txt=$con->query($select);
    while($article=$txt->fetch_assoc()) {
        $articles=$article;
    }
    print_r(json_encode($articles));
?>