const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const age = form.age.value.trim();
    const question = form.question.value;
    const accept = form.accept.checked;

    // Reset all error messages
    document.querySelectorAll(".error-validation").forEach(el => el.classList.add("error-inactive"));
    let hasError = false;

    //validasi 1: semua value g boleh kosong
    if(!name){
        document.getElementById("error-fullname").textContent = "Name is required";
        document.getElementById("error-fullname").parentElement.classList.remove("error-inactive");
        hasError = true;
    //validasi 2: minimal name length
    }else if(name.length < 5){
        document.getElementById("error-fullname").textContent = "Name must be at least 5 characters";
        document.getElementById("error-fullname").parentElement.classList.remove("error-inactive");
        hasError = true;
       
    }

    //validasi 1: semua value g boleh kosong
    if(!email){
        document.getElementById("error-email").textContent = "Email is required";
        document.getElementById("error-email").parentElement.classList.remove("error-inactive");
        hasError = true;
    //validasi 3: cek email udah ada "@", "." dan ".com"
    }else if(!email.includes("@") || !email.includes(".") || !email.includes(".com")){
        document.getElementById("error-email").textContent = "Enter a valid email";
        document.getElementById("error-email").parentElement.classList.remove("error-inactive");
        hasError = true;
       
    }

    const ageNum = Number(age); //typecast string ke int
    //validasi 1: semua value g boleh kosong
    if(!age){
        document.getElementById("error-age").textContent = "Age is required";
        document.getElementById("error-age").parentElement.classList.remove("error-inactive");
        hasError = true;
    //validasi 4: umur harus diantara 18 dan 100  
    }else if(isNaN(ageNum) || ageNum < 18 || ageNum > 100){
        document.getElementById("error-age").textContent = "Age must be between 18 and 100";
        document.getElementById("error-age").parentElement.classList.remove("error-inactive");
        hasError = true;
        
    }

    //validasi 1: semua value g boleh kosong
    if(!question){
        document.getElementById("error-question").textContent = "Please enter your question";
        document.getElementById("error-question").parentElement.classList.remove("error-inactive");
        hasError = true;
    //validasi 5: question length must be more than 5 characters  
    }else if(question.length < 5){
        document.getElementById("error-question").textContent = "Question must be at least 5 characters";
        document.getElementById("error-question").parentElement.classList.remove("error-inactive");
        hasError = true;
        
    }

    //validasi 6: must agree to terms and conditions
    if(!accept){
        alert("You must accept the terms and conditions");
        hasError = true;
        
    }
    
    // prevent form submission if any error exists
    if (hasError){
        return;
    }

    //form is submitted successfully
    alert("Form submitted successfully!");
    console.log("Form submitted successfully!");
    form.reset();

    //testing
    // console.log(name);
    // console.log(email)
    // console.log(age)
    // console.log(question)
    // console.log(accept)
})
