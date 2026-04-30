pipeline {
    agent any

    tools {
        nodejs 'Node-20-LTS'
    }

    stages {
        
        stage('Instalacion') {
            steps {
                echo 'Descargando librerias de produccion...'
                sh 'npm install'
            }
        }

        stage('Pruebas') {
            steps {
                echo 'Ejecutando suite de testing....'
                sh 'npm test'
            }
        }

        stage('Compilacion') {
            steps{
                echo 'Generando artefactos finales....'
                sh 'npm run build'
        }
    }
}



    post {
        always {
            echo 'Finalizando proceso de ejecucion....'
        }
        success {
            echo '!EXITO! El pipeline termino correctamente.'
        }
        failure {
            echo '!ERROR! El pipeline fallo. Revisar Logs.'
         }
    }
}