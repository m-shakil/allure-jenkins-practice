pipeline {
    agent any 
    
    stages {
        stage('Run Tests') {
            steps {
                bat 'npm ci'
                bat 'npm run practice'
            }
        }
    }
    
    post {
        always {
            archiveArtifacts(
                artifacts: 'allure-results',
                allowEmptyArchive: true
            )
            build job: 'Allure-Report',
                wait: false
        }
    }
}