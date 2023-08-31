process.env.PORT = process.env.PORT || 3000;

process.env.HOSTNAME = 'localhost';

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Base de Datos
if (process.env.NODE_ENV === 'dev') {
    process.env.URLDB = "mongodb://localhost:27017/db_pacientes";
} else {
    process.env.URLDB = "mongodb://localhost:27017/db_pacientes";
}

// Declaración de array de middleweres a usar en las APIS
process.middlewares = []; //