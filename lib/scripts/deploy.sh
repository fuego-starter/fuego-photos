#!/bin/sh

if [[ ( "$CODEBUILD_SOURCE_VERSION" == $(git ls-remote --heads | grep 'refs/heads/master' | egrep -o '\b[0-9a-f]+\b') ) && ( "$CODEBUILD_BUILD_SUCCEEDING" != 0 ) ]]
then
    export AWS_ACCESS_KEY=`aws ssm get-parameters --name "ServicesAccess" --region us-west-1 --with-decryption --query "Parameters[0].Value"`
    export AWS_SECRET_ACCESS_KEY=`aws ssm get-parameters --name "ServicesSecret" --region us-west-1 --with-decryption --query "Parameters[0].Value"`
    ./node_modules/serverless/bin/serverless deploy
fi
