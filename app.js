const stars = document.querySelectorAll('.rating input');

        stars.forEach(star => {
            star.addEventListener('click', function () {
                alert('Você classificou com ' + this.value + ' estrelas!');
            });
        });

    