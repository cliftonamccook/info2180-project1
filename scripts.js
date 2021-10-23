/* Add your JavaScript to this file */
window.onload = () => {
    document.getElementsByTagName('input')[0].value = "";
    let form = document.querySelector('form');
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let email = document.querySelector('input').value;
        let msg = document.getElementsByClassName("message")[0];
        let pattern = /\w+@\w+.+\w/g;
        if (email == ""){
            msg.innerHTML = "Please enter a valid email address."
        } else if (email.match(pattern)) {
            msg.innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    } );
};
