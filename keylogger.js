const keyCount = {};
window.addEventListener("keyup", eventHandler);

function eventHandler(event) {
    // Which key was pressed?
    let key = event.key;
    let normalizedKey = key.toLowerCase();

    // Now do something with it.
    console.log("You pressed " + key);

    keyCount[normalizedKey] = (keyCount[normalizedKey] || 0) + 1;
    for (let char in keyCount) {
        console.log(`'${char}' : '${keyCount[char]}'`);
    }
    specialRules(normalizedKey, keyCount[normalizedKey]);
}

function specialRules(key, count) {
    if (key === 'n' && count === 7) {
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.background = '#FFC0CB';
        }
    }
}
