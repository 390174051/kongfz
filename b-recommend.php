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
   
    $select="select * from kongfz limit 20;";
    $txt=$con->query($select);
    if($txt->num_rows>0) {
        while($reco=$txt->fetch_assoc()) {
            $recommend[]=$reco;
        }
    }
    echo json_encode($recommend);
?>