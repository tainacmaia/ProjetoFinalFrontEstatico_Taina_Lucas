let form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let data = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbxlQLJLpT9G0FStiCpczndg-8Ggq__zfmD-So54Br5NJyevCP2h4qU933KUsxBYAuoSug/exec',{
                method: "POST",
                body: data
            })
            .then(res => res.text())
            .then(data =>{
                document.querySelector("#msg").innerHTML = "Enviado com sucesso!"
                // document.querySelector("#sub").value = "Enviado";
            });
        });

         // const btn = document.getElementById('sub');

        // btn.addEventListener('click', function handleClick(event) {
        // // 👇️ if you are submitting a form

        // // var content = document.getElementById('msg');

        // // if(content.innerHTML == 'Enviado com sucesso!'){
        // event.preventDefault();

        // const inputs = document.querySelectorAll('#input1, #input2, #input3, #input4, #input5');

        //     inputs.forEach(input => {
        //     input.value = '';
        // })
        // // }  
        // ;
        // });
        
        // function clearText()  
        // {
        //     document.getElementById('clear').value = "";
        // }  