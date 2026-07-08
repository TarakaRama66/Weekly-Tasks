function windowInfo(){
document.getElementById("output").innerHTML=`
<h3>Window Object</h3>
Width : ${window.innerWidth}px <br>
Height : ${window.innerHeight}px <br>
Current Time : ${new Date()}
`;
}
function navigatorInfo(){
document.getElementById("output").innerHTML=`
<h3>Navigator Object</h3>
Browser : ${navigator.appName} <br>
Platform : ${navigator.platform} <br>
Language : ${navigator.language} <br>
Online : ${navigator.onLine}
`;
}
function locationInfo(){
document.getElementById("output").innerHTML=`
<h3>Location Object</h3>
URL : ${location.href}<br>
Hostname : ${location.hostname}<br>
Protocol : ${location.protocol}<br>
Pathname : ${location.pathname}
`;
}
function historyInfo(){
document.getElementById("output").innerHTML=`
<h3>History Object</h3>
History Length : ${history.length}<br><br>
<button onclick="history.back()">Back</button>
<button onclick="history.forward()">Forward</button>
<button onclick="history.go(-1)">Go -1</button>
`;
}
