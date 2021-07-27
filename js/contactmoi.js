    			 /*send mail*/
    function sendEmail() {
        
        var Name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
    
                Email.send({
                    SecureToken:"a39c5ba5-a443-4187-8af8-53f3b6d83762",
                    From: 'chaqdidportfolio@gmail.com',
                    To: 'Abdelazizchaqdid@gmail.com',
                    Subject: Name + " : " + email,
                    Body: "MESSAGE : " + message
                })
                    .then(function (message) {
                        alert("mail sent successfully")
                    });
            }