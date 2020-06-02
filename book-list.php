<?php
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: x-requested-with, content-type');  
  $sever="localhost";
  $name="root";
  $pass="root";
  $mysql="bookshop";
  $con=new mysqli($sever,$name,$pass,$mysql);
  if($con->connect_error){
      die("连接失败".$connect_error);
  }
  // echo "连接成功";
  $select="select * from kongfz;";
   $a=$con->query($select);
  //  print_r($a);
   if($a->num_rows>0){
      while($detail=$a->fetch_assoc()){
      $details[] = $detail;
    }
 }
   
  echo json_encode($details);
?>