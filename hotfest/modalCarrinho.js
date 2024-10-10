const modal = document.getElementById("modalCarrinho");

        function abrirModal() {
            modal.style.display = "block";
        }

        function fecharModal() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                fecharModal();
            }
        }