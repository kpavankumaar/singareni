var getItem = document.getElementById("getitem");
var postItem = document.getElementById("postitem");

function makeApiCall(method, url ,data){
    return function(){

        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.responseType = "json";
        if(data){
            xhr.send(JSON.stringify(data));
        }else{
            xhr.send()
        }
        xhr.onload = function(){
            console.log(xhr.readyState);
            if(xhr.status >= 400){
                console.log("something is missing" , xhr.response);
            }else{
                console.log(xhr.response);
            }
        }
        xhr.onerror = function(){
            console.log("something went wrong",xhr.response);
        }
    }
}
getItem.onclick = makeApiCall("GET","https://reqres.in/api/users" );
postItem.onclick = makeApiCall("POST","https://reqres.in/api/login", {
    "email": "eve.holt@reqres.in",
    // "password": "cityslicka"
});
