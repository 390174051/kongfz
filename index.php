<?php
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTION');
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    $servername = "localhost";
    $name = "root";
    $passeord = "root";
    $mysql = "bookshop";
    $connect = new mysqli($servername,$name,$passeord,$mysql);
    if($connect->connect_error){
        die("创建失败：". $connect->connect_error );
    }
    $select  = "select * from kongfz;";
    $txt = $connect->query($select);
    if($txt->num_rows>0){
        while($arr=$txt->fetch_assoc()){
            $data[]=$arr;
        }
    }
    echo json_encode($data);
?>