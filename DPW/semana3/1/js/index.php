
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Estados</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="..js/index.js"></script>
</head>
<style>
    div{
        display: none;
        padding: 20px;
        border: 1px solid #ccc;
    }
</style>
<body>
    <select id="estados">
    </select>
    <br>
        <button id="btAgregar">Agregar</button>
        <button id="btEliminar">Eliminar</button>

        <div id="divAgregar">
            <h4>Agregar Estados</h4>
            <label for="estado">Nombre</label>
            <input type="text" id="estado" >
            <button id="btAgregar">Agregar</button>
        </div>
        <div id="divEliminar">
        <h4>Eliminar Estados</h4>
            <label for="estado">Nombre</label>
            <input type="text" id="estadoEliminar" >
            <button id="btEliminar">Eliminar</button>
        </div>
    <div id="divActualizar">
    <label for="estado">Nombre</label>
    <input type="hidden" id="estado" >
    <input type="text" id="estadoActualizar" >
    <button id="agregar">Agregar</button>
    </div>
</body>
</html>