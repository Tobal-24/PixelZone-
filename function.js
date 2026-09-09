
document.addEventListener("DOMContentLoaded", () => {
    const botonesCarrito = document.querySelectorAll(".product-card .btn-primary");
    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();
            alert("¡Videojuego añadido al carrito de compras!");
        });
    });

    const formularios = document.querySelectorAll("form");
    formularios.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Datos enviados correctamente!");
        });
    });
});