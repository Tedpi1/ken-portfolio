const form= document.querySelector('form')
const fullName=document.getElementById('name')
const email=document.getElementById('email')
const subject=document.getElementById('subject')
const message=document.getElementById('message')


function sendEmail(){
    const bodyMessage =`Name:${fullName.value}<br> Email: ${email.value}<br> 
    Subject: ${subject.value} <br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kenlyon2525@gmail.com",
        Password : "DE18EF778920814C7EA71F57A7EE1F35D177",
        To : 'kenlyon2525@gmail.com',
        From : "kenlyon2525@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message=='OK'){
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    sendEmail();
})