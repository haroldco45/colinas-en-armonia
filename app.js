// Registro del Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('SW registrado', reg))
    .catch(err => console.log('Error al registrar SW', err));
}

// Función de reporte con Geolocalización
function enviarReporte() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const mensaje = `Reporte de Convivencia - Colinas del Portal\nUbicación: https://www.google.com/maps?q=${lat},${lon}\nIncidencia: Vehículo u objeto obstruyendo el paso.`;
            
            // Reemplaza con el número de la junta o autoridad local
            const whatsappUrl = `https://wa.me/3117700431?text=${encodeURIComponent(mensaje)}`;
            window.open(whatsappUrl, '_blank');
        }, () => {
            alert("Para reportar necesitamos tu ubicación. Por favor, actívala.");
        });
    }
}
