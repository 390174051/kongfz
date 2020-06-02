	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<meta http-equiv="X-UA-Compatible" content="ie=edge">	
		<script src="js/mui.min.js"></script>
    	<link rel="stylesheet" href="css/common.css">
    	<link href="css/mui.min.css" rel="stylesheet"/>
	</head>
	<body>
<?php 
        include "e-common.php"; 
        $phone = "";
        if($_SERVER["REQUEST_METHOD"]=="POST"){ 
            $a = $_REQUEST['phone'];
            if(empty($a)){
                $phone = "手机号不能为空";
            }else{
                if(preg_match("/^[1][0-9]{10}$/",$a)){
                    $phone = "";
                }else{
                    $phone = "请输入11位数字的手机号码";
                }
            }
            if(preg_match("/^[1][0-9]{10}$/",$a)){
                $insert = "insert into users (phone) values ('$a');";
                if($connect->query($insert)===true){
					// echo "插入数据成功";
                    header('location:e-logon.php'); 
                }
            }
        }  
    ?>
		<div class="e-signPage">
			<div class="e-signTop">
				<a href="javascript:window.history.go(-1)"><i class=" mui-icon mui-icon-arrowleft"></i></a>
				<span class="mui-col-lg-10 mui-col-md-10 mui-col-ms-10 mui-col-xs-10">注册</span> 
			</div>
			<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
				<div class="e-signForm">
					<div class="e-signPhone mui-input-row"> 
						<div>+86</div>
						<input id="signPhone" type="text" name="phone" maxlength="12" class="signPhones e-inputs mui-input-clear" placeholder="请输入手机号">
					  </br><span class="e-phonetip" style="color: red;"><?php echo $phone; ?></span>
					</div>
					<div class=" mui-input-row">  
						<input id="" type="text" class="e-incode e-inputs mui-input-clear" placeholder="请输入短信验证码">
						
						<div class="e-getcode">
							<span class="e-codetxt">获取验证码</span>
						</div>
					</div>
				</div>
				<div class="e-signbtn">
					<button class="e-signbutton" type="submit" >注册</button>
				</div>
			</form>
			<div class="e-tip">
				注册即表示您同意 <a href="">《孔夫子旧书网协议》</a>
			</div>
		</div>
		<?php $connect->close();?>
	</body>
	<script src="js/mine.js" type="text/javascript" charset="utf-8"></script>
	<script>
		var codeArr='abcdefghijklmnopqrstuvwxyz123456789'
		var signPhone=document.getElementsByClassName("signPhones")[0];
		var codetxt=document.getElementsByClassName("e-codetxt")[0];
		var inputcode=document.getElementsByClassName("e-incode")[0];
		var signbutton=document.getElementsByClassName("e-signbutton")[0];
		// var phonetip=document.getElementsByClassName("e-phonetip")[0];
		
		signPhone.onkeydown=function(){
			if(signPhone.value.length>=10){
				// phonetip.style.display="none";
				codetxt.style.color="#9E100E" ;
				codetxt.style.borderColor="#9E100E";
				codetxt.ontouchstart=function(){
					codetxt.style.fontSize=".35rem"
					function getcode(n){
						return Math.floor(Math.random()*n)
					}
					function back(){
						var str='';
						for(var i=0;i<4;i++){
							var ran=getcode(codeArr.length);
							str+=codeArr.charAt(ran)
						}    
						codetxt.innerHTML=str
					}
					back();

					inputcode.onkeydown=function(){
						// if(signPhone.value==''){
						// 	phonetip.style.display="block";
						// }
						if(inputcode.value.length==3){
							signbutton.style.backgroundColor="#9E100E";
							console.log(signPhone.value);
							
						// 	signbutton.ontouchstart=function(){
						// 		window.location.href="e-logon.php";		
						// }
						}else{
							signbutton.style.backgroundColor=""
						}
					}
				}
			}else{
				codetxt.style.color="" ; 
				codetxt.style.borderColor="";
			}
		}
		
	</script>
</html>

