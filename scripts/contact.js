



(function(){
    console.log('contact form')
    const form = document.getElementById("formContact")

    form.addEventListener('submit', ev =>{
        ev.preventDefault()
        
        const formdata = new FormData(form)

        let FD = {
            nom: formdata.get('nom'),
            mailTo: 'baptiste.wentzler@wanadoo.fr',
            mail: formdata.get('mail'),
            message: formdata.get('message')
        }

        console.log(formdata.get('nom'))

        fetch("https://young-eyrie-25903.herokuapp.com/api/contact",{
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(FD)
        })
        .then(resp => resp.json())
        .then(resp =>{
            console.log(resp)

            // notification alert
            const alert = document.createElement('div')
            const button = '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
            alert.classList.add('alert','w-50','mx-auto','fade','show','alert-dismissible','mt-2')
            alert.setAttribute('role', 'alert')
            if(resp.message){
                alert.innerHTML = resp.message + button
                alert.classList.add('alert-success')
            }else{
                alert.innerHTML = resp.error + button
                alert.classList.add('alert-danger')
            }
            document.body.insertBefore(alert, document.body.children[2])
            form.reset()
        })

    })
})()
