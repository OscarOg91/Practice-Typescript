// Importar módulos necesarios
const axios = require('axios');
const _ = require('lodash');

// Función para hacer request a una API
async function makeApiRequest() {
    try {
        console.log('Realizando petición a la API...');
        
        // Hacer request a la API de JSONPlaceholder (API pública gratuita)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        
        console.log('✅ Respuesta de la API recibida exitosamente:');
        console.log('==================================================');
        
        // Imprimir la respuesta completa
        console.log('Datos completos:', response.data);
        
        console.log('==================================================');
        
        // Usar lodash para mostrar algunas funcionalidades
        console.log('📊 Análisis adicional usando Lodash:');
        console.log(`Título en mayúsculas: ${_.upperCase(response.data.title)}`);
        console.log(`Número de palabras en el título: ${_.words(response.data.title).length}`);
        console.log(`Primeras 50 caracteres del cuerpo: ${_.truncate(response.data.body, {length: 50})}`);
        
        // Información adicional de la respuesta HTTP
        console.log('==================================================');
        console.log('📡 Información de la respuesta HTTP:');
        console.log(`Status: ${response.status} - ${response.statusText}`);
        console.log(`Headers Content-Type: ${response.headers['content-type']}`);
        
    } catch (error) {
        console.error('❌ Error al hacer la petición:', error.message);
        
        if (error.response) {
            console.error(`Status del error: ${error.response.status}`);
            console.error(`Datos del error:`, error.response.data);
        }
    }
}

// Ejecutar la función
console.log('🚀 Iniciando aplicación Node.js con Axios...\n');
makeApiRequest();