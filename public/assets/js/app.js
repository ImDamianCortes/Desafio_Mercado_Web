carrito = [];


$(".product").click(function (e) {
    e.preventDefault();
    $(this).addClass("bg-success");
    var productId = $(this).attr('id');
    var evaluacion = carrito.includes(productId);
    if (evaluacion == false) {
        carrito.push(productId);
    }
    console.log(carrito);
    //console.log(productId);
    mostrarCarrito();    
});


$('.product').on('dblclick', function () {
    $(this).removeClass("bg-success");
    var productId = $(this).attr('id');
    //eliminar del array

    carrito.splice(carrito.indexOf(productId), 1);
    console.log(carrito);
    mostrarCarrito();
});

mostrarCarrito = () => {
    $("#cesta").html("");
    carrito.forEach(function (element) {
        $("#cesta").append(`
        <div class="col-6 col-sm-4 p-3">
          <div class="card text-center h-100">
            <div class="card-header">
              <h6>${element}</h6>
            </div>
            <div class="card-body">
              <img src="/assets/img/${element}.png" class="w-100">
            </div>
          </div>
        </div>
        `);
    })
}

