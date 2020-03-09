module.exports = function (projectData, hookArgs) {
    
    var platform = (hookArgs.platform || (hookArgs.prepareData && hookArgs.prepareData.platform)).toLowerCase();
    if(platform !== "ios"){
        return;
    }

    const fs = require('fs');
    const sourceMapLocation = projectData.projectDir + '/node_modules/nativescript-azure-cognitiveservices/platforms/ios/module.modulemap';
    const targetMapLocation = projectData.platformsDir + '/ios/Pods/MicrosoftCognitiveServicesSpeech-iOS/MicrosoftCognitiveServicesSpeech.framework/Modules';
    if (!fs.existsSync(targetMapLocation)) {
        fs.mkdirSync(targetMapLocation);
    }
    if(!fs.existsSync(targetMapLocation + '/module.modulemap')){
        fs.copyFileSync(sourceMapLocation, targetMapLocation + "/module.modulemap");
    }
}

