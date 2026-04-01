const keyCount = {};
window.addEventListener("keyup", eventHandler);
function eventHandler(event) {
    // Which key was pressed?
    let key = event.key;
    // Now do something with it.
    console.log("You pressed "+key);
    
    keyCount[key] = (keyCount[key] || 0) + 1;
    for(let char in keyCount){
        console.log(`'${char}' : '${keyCount[char]}'`);
    }
    specialRules(key,keyCount[key]);
}
function specialRules(key, count)
{
    if(key === 'n' && count === 7){
         document.body.style.setProperty("background-color", "#FFC0CB");
    }
}
