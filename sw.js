if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw-builder.js')
    .then(function (reg) {
        console.log('serviceWorker registrado' + reg.scope);
    }).catch(function (error) {
        console.warn('serviceWorker Falhou' + error);
        
    });
} else {
    console.log('serviceWorker não é suportado');
}