set -e
IFS='|'

AWSCONFIGCLOUDFORMATION="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\,\
\"profileName\":\"default\",\
\"appId\":\"${AWS_APP_ID}\",\
}"
AMPLIFY="{\
\"envName\":\"main\",\
\"appId\":\"${AWS_APP_ID}\",\
}"
PROVIDERS="{\
\"awscloudformation\":${AWSCONFIGCLOUDFORMATION}\
}"

echo AWSCONFIGCLOUDFORMATION
echo AMPLIFY

amplify pull \
--amplify $AMPLIFY \
--providers $PROVIDERS \
--yes