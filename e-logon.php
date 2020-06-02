<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title></title>
    <script src="js/mui.min.js"></script>
    <link rel="stylesheet" href="css/common.css">
    <link href="css/mui.min.css" rel="stylesheet"/>
    <script type="text/javascript" charset="utf-8">
      	mui.init();
    </script>
</head>
<body>
<?php
    error_reporting(E_ALL ^ E_NOTICE);   //显示除去 E_NOTICE 之外的所有错误信息 
    include "e-common.php"; 
    $message = "";
    $time = time()+60*60*24;
    $select = "select phone from users;";
    $txt = $connect->query($select);
    if($txt->num_rows>0){
        while($arr = $txt->fetch_assoc()){
            if($arr['phone']==$_REQUEST['admin']){
                echo "登录成功"; 
                $message = ""; 
                header('location:index.html'); 
                setcookie("name",$_REQUEST['admin'],$time);
                setcookie("password",$_REQUEST['pass'],$time);
            }else{
                if(empty($_REQUEST['admin'])){
                    $message = "";
                }else{
                    $message = "密码或用户名不正确，请重新输入或注册信息";
                }  
            }
        }
    } 
?>
	<div class="row e-all">
        <div class="e-top mui-col-lg-12 mui-col-md-12 mui-col-ms-12 mui-col-xs-12 ">
            <a href="javascript:window.history.go(-1)"><img class=" mui-col-lg-1 mui-col-md-1  mui-col-ms-1 mui-col-xs-1" src="./img/close.png" alt=""></a>
            <span class="mui-col-lg-10 mui-col-md-10 mui-col-ms-10 mui-col-xs-10">登录</span>
        </div>
        <form class="e-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            <div class="e-changeborder mui-input-row">  
                <input type="text" id="ipt" class="e-inputs mui-input-clear" name="admin" maxlenght="12" placeholder="请输入用户名/手机号/邮箱">
                <!-- </br><span style="color: red;"></span> -->
            </div>
            <div class="mui-input-row e-changeborder">
                <input type="password" class="e-inputs mui-input-password" name="pass" maxlenght="12" placeholder="请输入密码" >
            </div>
            <div class="e-forget"><a class="e-forgets" href="e-forget.html">忘记密码？</a></div>
            <div class="mui-button-row">
                <input class="e-login" id="submit" type="submit" class="mui-btn mui-btn-primary" value="登录">
            </div>
            <div class="e-verify">
                <a class="e-verifyLeft" href="e-code.html">短信验证码登录</a>
                <a class="e-verifyRight" href="e-sign.php">注册</a>
            </div>
            <span style="color: red;"><?php echo $message; ?></span>
        </form>
        <div class="e-loginBottom">
            <div class="e-account">
                <span class="e-accountLine e-leftLine"></span>
                <span class="e-accounttxt">使用社交账号登录</span>
                <span class="e-accountLine e-rightLine"></span>
            </div>
            <div class="e-other">
                <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101294073&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&client_id=101294073&redirect_uri=https%3A%2F%2Flogin.kongfz.com%2FopenPlatform%2FcallBack%2Fqq%3Fplatform%3D2%26returnUrl%3Dhttps%253A%252F%252Fm.kongfz.com%252Fpersonal%252F&response_type=code&state=63893b182e6915f894c2645f3f9c5beb" ><img src="https://login.kongfz.com/mobile/images/login/QQ.png" alt=""></a>
                <a href="https://api.weibo.com/oauth2/authorize?client_id=2419843132&redirect_uri=https%3A%2F%2Flogin.kongfz.com%2FMobile%2FOpenweibo%2Fcallback%3Fplatform%3Dweibo%26returnUrl%3Dhttps%253A%252F%252Fm.kongfz.com%252Fpersonal%252F&response_type=code&state=a220e0a495a71beb71280ad1712c65be" ><img src="https://login.kongfz.com/mobile/images/login/weibo.png" alt=""></a>
                <a class="weixin" href="#"><img src="https://login.kongfz.com/mobile/images/login/weixin.png" alt=""></a>
                <p id="alert"></p>
            </div>
        </div>
    </div>
</body>
<script src="js/mine.js" type="text/javascript" charset="utf-8"></script>
<script>
</script>
</html>
<?php 
    $connect->close();
?>