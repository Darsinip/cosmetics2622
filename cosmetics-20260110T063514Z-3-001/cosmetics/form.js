document.addEventListener('DOMContentLoaded',function(){
    const sendButton =document.getElementById('sendBtn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

//initialy disabled send button
sendButton.disabled = true;

//enable button when message field has input
messageInput.addEventListener('input',function(){
    sendButton.disabled = messageInput.value.trim() === '';
});

//Handle button click for validation
sendButton.addEventListener('click',function(e){
    e.preventDefault(); //prevent form submission


    //get form input
    const username = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    //reset error message
    document.getElementById('nameerror').innerHTML ='';
    document.getElementById('emailerror').innerHTML = '';
    document.getElementById('messageerror').innerHTML = '';

    let isvalid = true;
 

    //validate username
    if(username === ''){
        document.getElementById('nameerror').innerHTML = 'Name  is required';
        isvalid = false;
    }

    //validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('emailerror').innerHTML = 'Invalid Email Format';
        isvalid = false;
    }

    //validate message
    if(message === ''){
        document.getElementById('messageerror').innerHTML='Message is required';
        isvalid = false;
    }

    
    //form alert
    if(isvalid){
    alert('Message sent successfully!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    sendButton.disabled =true;
    }
});
});




   

   
    
