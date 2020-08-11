const dev = {
    STRIPE_KEY: "pk_test_51HEUmXAqOSuhwlCzsOa44ha056lhawmPj0lTtnY6oqlsEDrtM1fncATVkmKKAPfeK5lFRwyjqkcIb25pLhSNnNPV00AUNI5Fj3",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-1xxbz3kfqo3df"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://yorgsky0f7.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_2RvmAKcyq",
        APP_CLIENT_ID: "7cc1qgvbcdq1otdvqt5grirttg",
        IDENTITY_POOL_ID: "us-east-1:b4ed2ee7-6b1a-437f-a75f-0ce49e94f4d4"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_51HEUmXAqOSuhwlCzsOa44ha056lhawmPj0lTtnY6oqlsEDrtM1fncATVkmKKAPfeK5lFRwyjqkcIb25pLhSNnNPV00AUNI5Fj3",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-p7l9vfs49div"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://cndnc1fv0c.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Y97XicnJf",
        APP_CLIENT_ID: "vu2ok8hcsftqn3kn38ktm3623",
        IDENTITY_POOL_ID: "us-east-1:a4397571-fed3-4306-8dce-37045081cba6"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};