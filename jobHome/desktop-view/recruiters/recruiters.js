  const header = document.getElementById('header');
  const portalBody = document.getElementById('portal_body');
  const submitBtn = document.getElementById('register');
  const form = document.getElementById('form');
  let flags = 0;

  function hideAll(){
     header.style.display = 'none';
     portalBody.style.display = 'none'; 
     submitBtn.style.display = 'none'; 
     form.style.display = "flex";
     flags = 1;
  }

  function showAll(){
    header.style.display = 'flex';
    portalBody.style.display = 'flex'; 
    submitBtn.style.display = 'flex'; 
    form.style.display = "none";
    flags = 0;
  }

  submitBtn.addEventListener('click',function(){
    if(flags == 0){
      hideAll();
    }
    else{
       showAll();
    }
  })

//   this is to check the file upload
const uploadIdentityBtn = document.getElementById('upload_identity');
const uploadIdentityInput = document.getElementById('uploadIdentity');
uploadIdentityInput.addEventListener('change', function(event) {
   if (event.target.files.length > 0) {
       uploadIdentityBtn.textContent = 'Uploaded';
   }
});

const uploadEmploymentBtn = document.getElementById('upload_employment');
const uploadEmploymentInput = document.getElementById('uploadEmployment');
uploadEmploymentInput.addEventListener('change', function(event) {
   if (event.target.files.length > 0) {
       uploadEmploymentBtn.textContent = 'Uploaded';
   }
});
  
// this is to change the logo
document.getElementById('uploadLogo').addEventListener('change', function(event) {
   const file = event.target.files[0];
   if (file) {
       const reader = new FileReader();
       reader.onload = function(e) {
           const img = document.getElementById('logoImage');
           img.src = e.target.result;
           img.style.display = 'block'; 
           document.getElementById('upload_logo').textContent = "Change logo";
           document.querySelector('.logo span').style.display = 'none'; 
       }
       reader.readAsDataURL(file);
   }
}); 

//   this is for dropdown 1
    const dropDownBtn = document.getElementById('dropDownBtn');
    const input = document.querySelector('#input');
    const inputDiv = document.querySelector('.inputDiv');
    const dropDownContainer = document.querySelector('.dropDownContainer');
    const dropDownElement = document.querySelectorAll('.dropDownElement');
    const overlay = document.getElementById('overlay');
    let flag =0;
 
    function openDropdown(){
       dropDownBtn.style.transform =" translateY(-50%) rotate(180deg)";
       dropDownBtn.style.top ="50%";
       dropDownContainer.style.display="flex"; 
       overlay.style.display="flex";      
       flag = 1;
    }
    function closeDropdown(){
       dropDownBtn.style.transform =" translateY(-50%) rotate(0deg)";
       dropDownBtn.style.top ="50%";
       dropDownContainer.style.display="none";
       overlay.style.display="none";
       flag = 0;
    }
 
    inputDiv.addEventListener('click',function(){
     if(flag==0){
       openDropdown();
       dropDownElement.forEach(function(elem){
          elem.addEventListener('click',function(){
           input.textContent = elem.textContent;
           inputDiv.style.color = "black";
        //    elem.querySelector('input[type="radio"]').checked="true";
           closeDropdown();
          })
       })
      flag = 1;
     }
   
     else{
        closeDropdown();
       flag = 0;
     }
    })

    overlay.addEventListener('click', closeDropdown);

//  this is dropDown2
  const dropDownBtn1 = document.getElementById('dropDownBtn1');
    const input1 = document.querySelector('#input1');
    const inputDiv1 = document.querySelector('.inputDiv1');
    const dropDownContainer1 = document.querySelector('.dropDownContainer1');
    const dropDownElement1 = document.querySelectorAll('.dropDownElement1');
    const overlay1 = document.getElementById('overlay1');
    let flag1 =0;
 
    function openDropdown1(){
       dropDownBtn1.style.transform =" translateY(-50%) rotate(180deg)";
       dropDownBtn1.style.top ="50%";
       dropDownContainer1.style.display="flex"; 
       overlay1.style.display="flex";      
       flag1 = 1;
    }
    function closeDropdown1(){
       dropDownBtn1.style.transform =" translateY(-50%) rotate(0deg)";
       dropDownBtn1.style.top ="50%";
       dropDownContainer1.style.display="none";
       overlay1.style.display="none";
       flag1 = 0;
    }
 
    inputDiv1.addEventListener('click',function(){
     if(flag1==0){
       openDropdown1();
       dropDownElement1.forEach(function(elem){
          elem.addEventListener('click',function(){
           input1.textContent = elem.textContent;
           inputDiv1.style.color = "black";
           
           closeDropdown1();
          })
       })
      flag1 = 1;
     }
   
     else{
        closeDropdown1();
       flag1 = 0;
     }
    })

    overlay1.addEventListener('click', closeDropdown1);