

function post(){
    location.href = "../html/post.html";

}


// this function will take id as para and it will pass to getelements
// and it willl set to none if user will cancel then it will set alert  box to cancel

function deletefun(){

    //    this will work when user click on trash and it will lead to this function 
       this.render=function(id){
        //    console.log(id);

        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogyes=document.getElementById('dialogyes');
        var dialogno=document.getElementById('dialogno');
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');

        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Are you sure you want to delete this post?";
        dialogyes.innerHTML='<button id="delete" onclick="Alert.del('+id+')">Yes</button>';
        dialogno.innerHTML='<button id="cancel" onclick="Alert.cancel()">No</button>';
        


       }

    //    when user click on yes to delete then this function will work. 

       this.del=function(id){
        console.log(id.id);
        
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        document.getElementById(id.id).style.display="none";

       }
       this.cancel=function(){
        document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
       }
    
}
var Alert=new deletefun();

