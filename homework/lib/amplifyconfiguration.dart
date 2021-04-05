const amplifyconfig = ''' {
    "UserAgent": "aws-amplify-cli/2.0",
    "Version": "1.0",
    "analytics": {
        "plugins": {
            "awsPinpointAnalyticsPlugin": {
                "pinpointAnalytics": {
                    "appId": "a4fec0a0ed384604afda3f12e777de9e",
                    "region": "eu-central-1"
                },
                "pinpointTargeting": {
                    "region": "eu-central-1"
                }
            }
        }
    },
    "auth": {
        "plugins": {
            "awsCognitoAuthPlugin": {
                "UserAgent": "aws-amplify-cli/0.1.0",
                "Version": "0.1.0",
                "IdentityManager": {
                    "Default": {}
                },
                "CredentialsProvider": {
                    "CognitoIdentity": {
                        "Default": {
                            "PoolId": "eu-central-1:beedaa4e-283a-4b0f-9703-d05580a719f4",
                            "Region": "eu-central-1"
                        }
                    }
                },
                "Auth": {
                    "Default": {
                        "authenticationFlowType": "USER_SRP_AUTH"
                    }
                },
                "PinpointAnalytics": {
                    "Default": {
                        "AppId": "a4fec0a0ed384604afda3f12e777de9e",
                        "Region": "eu-central-1"
                    }
                },
                "PinpointTargeting": {
                    "Default": {
                        "Region": "eu-central-1"
                    }
                }
            }
        }
    }
}''';