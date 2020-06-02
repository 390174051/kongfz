<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
 $server="localhost";
 $name="root";
 $password="root"; 
 $mysql="bookshop";
 $connect=new mysqli($server,$name,$password,$mysql);
 if($connect->connect_error){
     die("连接失败".$connect->connect_error);
 }
//  echo "连接成功";
 $select ="select * from kongfz;";
 $all=$connect->query($select);
 if($all->num_rows>0){
     while($arr=$all->fetch_assoc()){
        $arr1[]=$arr;
     }
 }
//  else{
//     //  echo "0条数据";
//  }
 echo json_encode($arr1);

?>