
pipeline {
    agent any

    environment {
        APP_NAME = 'Allure Practice'
        TEST_ENV = 'QA'
    }

    parameters {
        choice(
            name: 'TARGET_ENV',
            choices: ['QA', 'UAT', 'Production'],
            description: 'Select the test environment'
        )
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World!'
            }
        }

        stage('Build') {
            steps {
                echo 'This is the build stage'
            }
        }

        stage('Test') {
            steps {
                echo 'This is the test stage'
            }
        }

        stage('Environment') {
            steps {
                echo "Application: ${APP_NAME}"
                echo "Default Environment: ${TEST_ENV}"
                echo "Selected Environment: ${params.TARGET_ENV}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }

        success {
            echo 'Build was successful!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}
