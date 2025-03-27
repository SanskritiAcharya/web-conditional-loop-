// Let's target all the ID selectors from HTML in JavaScrript
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
// BUilding a submit event listener for the formValidation
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();

});
let formValidation =()=>{
    if (input.value===""){
        msg.innerHTML = "Post cannot be blank";
        console.group("failure");
    }
    else{
        console.log("successs");
        msg.innerHTML="";
        acceptData();
    }
};
// Accepting data from input fields
let data={};
let acceptData = () =>{
    data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      
    </span>
  </div>
    `;
    input.value = "";
  };
  // How to Delete a post?
  let deletePost= (e) =>{
    e.parentElement.parentElement.remove();
  };
  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };