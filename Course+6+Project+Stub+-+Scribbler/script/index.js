function Signup()
{
    //  this form will open a signup page for signup 
    var p='<form>'+
    '<div class="cut">'+
    '<p class="fr"> Get Started</p>'+
    '<i class="fas fa-times" id="cross" onclick="CutOut()"></i>'+
    '</div>'+
    '<div>'+'<hr class="fr">'+'</div>'+
   
        '<label class="fr">Name</label>'+
        '<input type="text" placeholder="Enter your name" required> '+
        '<label class="fr">Username</label>'+
        '<input type="text" placeholder="Enter your username" required>'+
        '<label class="fr">Password</label>'+
        '<input type="password" placeholder="Enter your password" required>'+
        '<label class="fr">Confirm Password</label>'+
        '<input type="password" placeholder="Re-enter your password" required>'+

        '<button id="fbt">Sign Up</button>'+

    
'</form>';
document.getElementById('del').innerHTML='';
//it will set allpost and create post to none
  document.getElementById('main').innerHTML=p;
}

function CutOut()
{
  // it will cut the form signup or signin
    document.getElementById('main').innerHTML='';
   
    var pr= '<div>'+
    '<button class="btc" onclick="loadPage()">All Posts</button>'+
  '</div>'+
  '<div>'+
      '<button class="btc" onclick="Create()">Create Post</button>'+
  '</div>';
    


document.getElementById('del').innerHTML=pr;
}


function Sign()
{
  // this is for sign in
    var p='<form id="sign">'+
    '<div class="cut">'+
    '<p class="fr"> Welcome Back!</p>'+
    '<i class="fas fa-times" id="cross" onclick="CutOut()"></i>'+
    '</div>'+
    '<div>'+'<hr class="fr">'+'</div>'+
   
        
        '<label class="fr">Username</label>'+
        '<input type="text" placeholder="Enter your username" required>'+
        '<label class="fr">Password</label>'+
        '<input type="password" placeholder="Enter your password" required>'+
       

        '<button id="fbt">Sign In</button>'+
        '<p class="fr" style="text-align:center">Not a member? <span onclick="Signup()" style="color:#0066cc">Sign up</span></p>'+
    
'</form>'
;
document.getElementById('del').innerHTML='';

  document.getElementById('main').innerHTML=p;
}

function Create()
{
  // this will open form to create posts
  var p='<form id="createone">'+
  '<div class="cut">'+
  '<p id="PYP">Pen Your Post</p>'+
  '<i class="fas fa-times" id="cross" onclick="CutOut()"></i>'+
  '</div>'+
  '<div>'+'<hr class="fr">'+'</div>'+
 
      
      '<label class="fr">Title</label>'+
      '<input type="text" placeholder="Enter title of your post" required>'+
      '<label class="fr">Contents</label>'+
      ' <textarea name="" id="tar" cols="30" rows="10" class="fr" placeholder="Enter the contents of your post"required></textarea>'+
     
    '<div id="shift">'+
      '<button id="fbt1"  >Create</button>'+
      '</div>'+
     
  
'</form>';

  document.getElementById('del').innerHTML='';

  document.getElementById('main').innerHTML=p;
}
function loadPage()
{
    //this will open a page for that post after extending
     window.location="html/postslist.html";
    

}
