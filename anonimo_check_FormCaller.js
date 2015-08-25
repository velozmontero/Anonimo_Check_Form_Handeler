function(){
    function isValidName(name) {
        var pattern = new RegExp(/^[a-z]{2,100}$/ig);
        return pattern.test(name);
    }

    function isValidEmail(address) {
        var pattern = new RegExp(/^\w{2,100}@\w{2,100}.\w{1,4}$/ig);
        return pattern.test(address);
    }

    function isValidPhone(phoneNum) {
        var phone = new RegExp(/^[0-9]{3}[-. ]{0,1}[0-9]{3}[-. ]{0,1}[0-9]{4}$/);
        return phone.test(phoneNum);
    }
    
    
    function CheckForm(theForm){
        //event.preventDefault();
        var fName = theForm.firstName.value;
        var lName = theForm.lastName.value;
        if (!isValidName(fName) || !isValidName(lName)) {
            alert("Please enter a valid First and Last name");
        }
        var email = theForm.email.value;
        if (!isValidEmail(email)) {
            alert("Enter a valid email");
            return false;
        }
        var phone = theForm.phoneNum.value;
        if (!isValidPhone(phone)) {
            alert("Enter a valid Phone Number");
            return false;
        }
        console.log("validation successful");
    }
    
    var form= document.getElementByID("elIDdelForm");
    form.addEventListener("submit", callCheckForm );
    
    function callCheckForm(){
        CheckForm1(form);
    }
}();
