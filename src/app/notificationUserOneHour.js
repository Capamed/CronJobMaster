const cron = require("node-cron");
const { connectToDatabase } = require('../db/db');

class Main{
    static async notificationUserOneHour(){
        connectToDatabase()
        .then((connection) => {
          connection.query('SELECT COUNT(CONSULTATION_ID) as rows FROM CONSULTATIONS WHERE STATUS = "1" AND SCHEDULE IN ("1","2")', (queryError, results) => {
            if (queryError) {
              console.error('Error al ejecutar la consulta:', queryError);
            } else {
              console.log('Resultado de la consulta:', results[0].rows);
              if(results[0].rows > 0){
                //Hacer la notificacion
              }
            }
    
            // Asegurarse de cerrar la conexión cuando hayas terminado
            connection.end();
          });
        })
        .catch((error) => {
          console.error('Error al conectar a la base de datos:', error);
        });
    }
}

cron.schedule("*/5 * * * * *",()=>{
    Main.notificationUserOneHour();
});