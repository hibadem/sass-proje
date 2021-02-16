
function setCookie(name,value,days){
    var date = new Date();
    date.setDate(date.getDate()+ days);
    document.cookie = name + '=' + escape(value) +'; expires =' + date.toUTCString();
    console.log('cookie'+name+'created');
}
//setCookie('halil',true,5);
//console.log(document.cookie);

function getCookie(cookieName){
var pattern = cookieName + '=(?<value>[0-9a-zA-Z\s]+);?';
var regex = new RegExp(pattern);
var result = document.cookie.match(regex);
if(result){
    return result.groups.value;
}
}
//console.log(getCookie('halil'));

function showCookieBanner(id){
    if (!getCookie(id)) {
        document.getElementById(id).classList.add('.active');
    }
    
}
showCookieBanner('banner-1');