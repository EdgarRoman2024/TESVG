//FORMULARIO DE CONTACTO
((d) => {
    const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response"),
        $select = d.querySelector(".select");
        let correo;
        $select.addEventListener('change', () => {
            let valorOption = $select.value;
            var optionSelect = $select.options[$select.selectedIndex];
            correo = optionSelect.value;
            let  inputResult = d.querySelector('#resultado').value=(optionSelect.value)
          });
    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch(`https://formsubmit.co/ajax/${correo}`, {
            method: "POST",
            body: new FormData(e.target)
        })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
                location.hash = "#gracias";
                $form.reset();
            }).catch((err) => {
                let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
                $response.querySelector("h3").innerHTML = `Erro ${err.status}:${message}`;
            }).finally(() => {
                $loader.classList.add("none");
                setTimeout(() => {
                    location.hash = "#close";
                }, 5000);
            });
    });

})(document);