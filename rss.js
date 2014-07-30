var xmlhttp;
var clickObj=document.getElementById("buttonToShow");
var requestObj;
function RSS(rssUrl){

if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{

if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
//document.getElementById("jasonText").innerHTML=xmlhttp.responseText;

var s1= xmlhttp.responseText;
//console.log(ty(s1));
var obj = JSON.parse(s1);
//console.log(obj);
var feed = obj.responseData.feed.entries;
var titleRss=document.getElementById("title-rss-feed");
var descriptionTitle=document.getElementById("description-rss-feed");
titleRss.innerHTML=obj.responseData.feed.title;
descriptionTitle.innerHTML=obj.responseData.feed.description;

var i=0;
console.log(obj);
for(i=0;i<feed.length;i++){
   //alert(description);
   var title=feed[i].title;
   var link=feed[i].link;
   var date=feed[i].publishedDate;
   var description=feed[i].contentSnippet; 
   //alert(description); 
   //console.log(title,link,description);
  displayData(title,description,link,date);
}

}
}
xmlhttp.open("GET",rssUrl,true);

xmlhttp.send();

}


function displayData (title,description,link,date) {
var divId = document.getElementById('onFlyDiv');
var imageTitle = title;
var infoLink=link;
var info =description;
var pDate=date;
divId.innerHTML += templateMaker(imageTitle,info,infoLink,pDate);
}

function templateMaker(title,information,link,pdate) {

  var template = "<div class='rss'><a href=" + link +"><h3 class='rss-title'>" + title + "</h3></a><p class='pull-right publish-date'>"+pdate+"</p><p class='info'>" + information + "</p></div>";
  console.log(template);
  return template;
}


function calculate() {
   
     var urlRss=document.getElementById("rssUrl").value;
     //alert(urlRss);
     var fullUrl="http://googlefeed.appacitive.com/?q="+urlRss;
     RSS(fullUrl);
   

}
clickObj.onclick=calculate;