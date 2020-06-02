<?php
  header('Access-Control-Allow-Origin:*');
  header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTION');
  header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
  $connect = new mysqli("localhost","root","root","bookshop");
  $content = "select * from kongfz;";
  $txt1 = $connect->query($content);
  while($arr1=$txt1->fetch_assoc()){
      $array1[]=$arr1; 
  }
  echo json_encode($array1); 
?>