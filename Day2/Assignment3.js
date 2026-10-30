function launchBrowser(browserName){
    if (browserName ==='chrome'){
        console.log('The browser Name is chrome')
    }
    else {
        console.log(`The broswer name is ${browserName}`)
    }
}
 
let browwserName = 'chrome'
launchBrowser(browwserName)

browwserName = 'firefox'
launchBrowser(browwserName)

// Funtion 2

function runTests(testType){
    switch(testType){
        case "smoke":
            console.log('Test type is smoke')
        break;
        case "sanity":
            console.log('Test type is sanity')
        break;
        case "regression":
            console.log('Test type is regression')
        break;
        default:
            console.log('Test type is default(smoke)')
        break;
            
    }
}
let testType = 'smoke'
runTests(testType)

testType = 'sanity'
runTests(testType)

testType = 'regression'
runTests(testType)

testType = 'default'
runTests(testType)

