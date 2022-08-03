---
id: "mimeeqApp._mimeeq.AuthErrorTypes"
title: "Enumeration: AuthErrorTypes"
sidebar_label: "mimeeqApp.@mimeeq.AuthErrorTypes"
custom_edit_url: null
---

[mimeeqApp](../modules/mimeeqApp.md).[@mimeeq](../namespaces/mimeeqApp._mimeeq.md).AuthErrorTypes

Authentication error types

## Enumeration Members

### CodeMismatchException

• **CodeMismatchException** = ``"CodeMismatchException"``

Invalid code or auth state for the user.

___

### Default

• **Default** = ``"default"``

___

### DeviceConfig

• **DeviceConfig** = ``"deviceConfig"``

Device tracking has not been configured in this User Pool

___

### EmptyChallengeResponse

• **EmptyChallengeResponse** = ``"emptyChallengeResponse"``

Challenge response cannot be empty

___

### EmptyCode

• **EmptyCode** = ``"emptyCode"``

Provided confirmation code was empty.

___

### EmptyPassword

• **EmptyPassword** = ``"emptyPassword"``

Provided password was empty.

___

### EmptyUsername

• **EmptyUsername** = ``"emptyUsername"``

Provided username was empty.

___

### InvalidMFA

• **InvalidMFA** = ``"invalidMFA"``

Invalid MFA type

___

### InvalidUsername

• **InvalidUsername** = ``"invalidUsername"``

The username should be valid email address.

___

### MissingAuthConfig

• **MissingAuthConfig** = ``"missingAuthConfig"``

Auth has not been configured correctly. The configuration object is missing required auth properties.

___

### NetworkError

• **NetworkError** = ``"networkError"``

There was some network error during the request.

___

### NoAccess

• **NoAccess** = ``"NoAccess"``

This exception is thrown then a user doesn't have access to current customer

___

### NoConfig

• **NoConfig** = ``"noConfig"``

Auth has not been configured correctly. Make sure you are passing awsconfig object to initialize method. There might be also multiple conflicting version of amplify on site.

___

### NoMFA

• **NoMFA** = ``"noMFA"``

No valid MFA method provided

___

### NoUserSession

• **NoUserSession** = ``"noUserSession"``

Failed to get the session because the user is empty

___

### NotAuthorizedException

• **NotAuthorizedException** = ``"NotAuthorizedException"``

This exception is thrown when a user isn't authorized.

___

### SignUpError

• **SignUpError** = ``"signUpError"``

There was some error while creating account

___

### UserLambdaValidationException

• **UserLambdaValidationException** = ``"UserLambdaValidationException"``

This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.

___

### UserNotConfirmedException

• **UserNotConfirmedException** = ``"UserNotConfirmedException"``

This exception is thrown when a user isn't confirmed successfully.

___

### UserNotFoundException

• **UserNotFoundException** = ``"UserNotFoundException"``

This exception is thrown when a user isn't found.
