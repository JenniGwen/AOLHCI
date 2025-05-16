console.log("Lohloholhohlhohlholo")

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const age = form.age.value.trim();
    const question = form.question.value;
    const accept = form.accept.checked;

    //validasi 1: semua value g boleh kosong
    if(!name || !email || !age || !question){
        alert("All fields must be filled out");
        return;
    }

    //validasi 2: minimal name length
    if(name.length < 5){
        alert("Name must be at least 5 characters.");
        document.getElementById("error-fullname").classList.remove("error-inactive");
        document.getElementById("error-fullname").classList.add("error-active");

        return;
    }
    
    //validasi 3: cek email udah ada "@", "." dan ".com"
    if(!email.includes("@") || !email.includes(".") || !email.includes(".com")){
        alert("enter a valid email");
        return;
    }

    //validasi 4: umur harus diantara 18 dan 100
    const ageNum = Number(age); //typecast string ke int
    if(isNaN(ageNum) || ageNum < 18 || ageNum > 100){
        alert("Age must be between 18 and 100");
    }

    //validasi 5: question length must be more than 5 characters
    if(question.length < 5){
        alert("Question must be at least 5 characters long");
        return;
    }

    //validasi 6: must agree to terms and conditions
    if(!accept){
        alert("You must accept the terms and conditions");
        return;
    }
    
    // console.log(name);
    // console.log(email)
    // console.log(age)
    // console.log(question)
    // console.log(accept)
})
