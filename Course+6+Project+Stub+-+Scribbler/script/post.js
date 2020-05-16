var count=0;

// this function for like count 
function countlike(){
    count++;
  var para=count+ ' person likes this post!';
  document.getElementById('liker').innerHTML=para;
  document.getElementById('liked').innerHTML='Liked';
}

// this is for edit text area 
function editor(){
    var a='<button class="change" onclick="save()">'+
    ' Save '+
     '<i class="fa fa-floppy-o" aria-hidden="true">'+
 
     '</i>'+
     '</button>';

     document.getElementById('edit').innerHTML=a;
    // var b= document.createElement(document.getElementById('postname'));
    document.getElementById('headone').readOnly=false;
    document.getElementById('contentbox').readOnly=false;
    
   
}
var c=0;

// this is for save button after editing 
function save(){
  var a='<button class="change" onclick="editor()">'+
  ' Edit '+
   '<i class="fa fa-pencil-square-o" aria-hidden="true">'+

   '</i>'+
   '</button>';
   document.getElementById('edit').innerHTML=a;

   if(c==0)
   {
    document.getElementById('headone').innerHTML='UPDATED: '+document.getElementById('headone').innerHTML;
    document.getElementById('contentbox').value='UPDATED :  '+document.getElementById('contentbox').value;
   }

    c++;
    document.getElementById('headone').readOnly=true;
    document.getElementById('contentbox').readOnly=true;
}

// this is for comment add button 
function commentf(){
  var pr=document.getElementById('commentbox').value;
  document.getElementById('commentbox').value='';

  if(pr!='')
  document.getElementById('commentadd').innerHTML+='<p class="ctadd">'+pr+'</p>'
  
  
    
}

