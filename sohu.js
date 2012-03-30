/***********************************************************
sohu.com 
***********************************************************/
var name="sohu.com";

function init() {
  this.dataURL="http://mail.sohu.com/bapp/95/main#mailList_-2";
  this.loginData=["https://passport.sohu.com/sso/login.jsp", "userid","password","appid=1000&pwdtype=0"];
  this.mailURL="http://mail.sohu.com/bapp/95/main#mailMain";
}
function getCount(aData) {
  var fnd=aData.match(/var.*unread.:\s(\d+),.*\\\\u6536\\\\u4ef6/);
  if(fnd) {
    return fnd[1];
  }else{
    return -1;
  }
}