// Esperamos a que todo el HTML esté cargado antes de ejecutar la magia
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Buscamos todas las etiquetas que empiezan por la clase "highlight-"
    const highlights = document.querySelectorAll('[class^="highlight-"]');
    
    // 2. Si existen elementos con esa clase en la página actual...
    if (highlights.length > 0) {
        
        // Recorremos cada elemento uno por uno
        highlights.forEach((el, index) => {
            
            /* 3. Añadimos un retraso progresivo.
               El primero tarda 500ms, el segundo 1100ms, el tercero 1700ms...
               Así creamos el efecto visual secuencial. */
            setTimeout(() => {
                // Le añadimos la clase que dispara la animación CSS
                el.classList.add('show-highlight');
            }, (index * 600) + 500); 
            
        });
    }
});