export default {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-uploads-martin"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://hbm8ebqm75.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_ojThGvGK4",
        APP_CLIENT_ID: "4st5ocos3il1glnph585ecla69",
        IDENTITY_POOL_ID: "us-east-1:b9846fa9-5224-4116-b94a-85039535e499"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY:"pk_test_51HEUmXAqOSuhwlCzsOa44ha056lhawmPj0lTtnY6oqlsEDrtM1fncATVkmKKAPfeK5lFRwyjqkcIb25pLhSNnNPV00AUNI5Fj3"
};