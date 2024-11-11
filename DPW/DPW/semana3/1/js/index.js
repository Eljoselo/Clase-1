$(document) .ready(function(){
cargarEstados();

    function cargarEstados() {
        console.log("hola mundo")
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            data: {'lista' : 'todos' },
            dataType: "json",
            success: function (estados) {
                $("#estados").append("<option value=''>Selecciona una opcion</option>");
                $.each(estados,function(i,estado) {
                    $("#estados").append("<option value=" + estado.idestado + ">" + estado.nombre + "</option>");
                    
                });
                
            },
            error:function(){alert("error en la peticion ajax");}
        });
    }
    
    $("#agregar").click(function(){
        var nombreEstado = $("#estado").val();
        console.log(nombreEstado);
        $.ajax({
            url:"crud/estados.php",
            type: "POST",
            data: {
                'ADD' : 'estado',
                'nombre' : nombreEstado
            },
            dataType: 'json',
            success: function(data){
                alert(data.estado);
                $("#estados").empty();
                cargarEstados();
            },
            error: function(){
                alert(data.estado);
            }
        });
    });
    $("#eliminar").click(function(){
        var nombreEliminar = $("#estadEliminar").val();
        console.log(nombreEliminar);
        $("#divEliminar").toggle();
        if (nombreEliminar==="") {
            alert("El nombre es requerido");
            return;
        }
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            dataType: "json",
            date: {
                'DELETE' : 'estado',
                'nombre' : nombreEliminar},
                success: function(data) {
                    alert(data.estado);
                    $("#divAgregar").toggle();
                    $("#estados").empty();
                    cargarEstados();
                },
                error: function(data){alert(data.estado);}
        })
    });
    $("#Actualizar").click(function(){
        var idestado = $("#idestado").val();
        var nombreEstado = $("#estadoActualizar").val();
        if (nombreEstado==="") {
            alert("ingrese un nombre valido");
            return;
        }
        $("#divActualizar").toggle();
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            dataType: "json",
            date:{
                "UPDATE" : "estado",
                "idestado" : idestado,
                "nombre" : nombreEstado
            },
            success: function (data) {
                $("#estado").empty();
                cargarEstados();
                alert(data.estado);
            }
        });
    });
    $("#btAgrgar").click(function(){
        $("#divagregar").toggle();
    });
    $("#btEliminar").click(function(){
        $("#diveliminar").toggle();
    });
    $("#btActualizar").click(function(){
        $("#divActualizar").toggle();
        $("#estadoActualizar").val($("#estados"))
    });

});