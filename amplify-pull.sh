set -e
IFS='|'

REACTCONFIG="{\
\"SourceDir\":\"src\",\
\"DistributionDir\":\"build\",\
\"BuildCommand\":\"${NPM_YARN} run-script build\",\
\"StartCommand\":\"${NPM_YARN} run-script start\"\
}"
AWSCONFIGCLOUDFORMATION="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\,\
\"profileName\":\"default\",\
\"accessKeyId\":\"${HEADLESS_ACCESS_KEY_ID}\",\
\"secretAccessKey\":\"${HEADLESS_ACCESS_KEY_SECRET}\",\
\"region\":\"us-east-2\"\
}"
AMPLIFY="{\
\"projectName\":\"${AMPLIFY_PROJECT_NAME}\",\
\"envName\":\"main\",\
\"appId\":\"${AWS_APP_ID}\",\
\"defaultEditor\":\"code\"\
}"
FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"
PROVIDERS="{\
\"awscloudformation\":${AWSCONFIGCLOUDFORMATION}\
}"

echo AWSCONFIGCLOUDFORMATION
echo AMPLIFY

amplify pull --amplify $AMPLIFY --frontend $FRONTEND --providers $PROVIDERS --yes