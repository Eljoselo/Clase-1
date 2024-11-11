function cambiarImagen() {
    const select = document.getElementById('imagen');
    const backGroundBox = document.getElementById('backGroundBox');
    const seslectImagen = select.value;
    if (seslectImagen) {
        backGroundBox.style.backgroundImage = `url('${seslectImagen}')`;
    }
    else{
        backGroundBox.style.backgroundImage = 'none';
    }
}