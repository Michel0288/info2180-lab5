onload= function(){
    var btn=document.getElementById('lookup');
    var btn2=document.getElementById('lookup1');
    var httpRequest=new XMLHttpRequest();
    var result=document.getElementById('result');
    var country=document.getElementById('country');
    btn2.addEventListener('click',function(event){
        event.preventDefault();
        var url="world.php?country="+country.value+"&context=cities";
        httpRequest.onreadystatechange=hrequest;
        httpRequest.open('GET',url,true);
        httpRequest.send(); 
    })
    btn.addEventListener('click',function(event){
        event.preventDefault();
        var url="world.php?country="+country.value;
        httpRequest.onreadystatechange=hrequest;
        // httpRequest.open('GET',url);
        httpRequest.open('GET',url,true);
        httpRequest.send(); 
    });
    
    function hrequest(){
        if(httpRequest.readyState===XMLHttpRequest.DONE){
            if (httpRequest.status===200){
                var response=httpRequest.responseText;
                result.innerHTML=response;
            }else{
                result.innerHTML="There was a problem with the request";
            }
        }
    }
}