const Alexa = require('ask-sdk-core');
const defaultIntents = require('./intents/defaultIntents');
const HelloWorldIntentHandler = require('./intents/helloWorldIntent');

const {
	LaunchRequestHandler,
	HelpIntentHandler,
	CancelAndStopIntentHandler,
	SessionEndedRequestHandler,
	IntentReflectorHandler,
	ErrorHandler
} = defaultIntents;

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
        )
    .addErrorHandlers(
        ErrorHandler,
        )
    .lambda();
