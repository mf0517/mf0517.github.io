let user = prompt("What is your name?");
console.log("Hello, "+user+"!");

console.log("Wise Traveler "+ user);
console.log("You are driving through the city and a man had appeared, he is wearing dark clothing and he walks across the road screaming.");
let x = prompt("do you help this man?(Y/N)");
if((x == "y") || (x == "Y"))
{
    console.log("As you get out of your car to assist the man, his hands being extremely boney and the clothing he has is very ragged and torn in multiple places.");
    console.log("He goes to grab you in a hastely manner");
    let y = prompt("do you hit his hand away and run?(Y/N)");
    if((y == "y") || (y == "Y"))
        {
        console.log("The man becomes furious, taking a weapon out of his pocket and starts charging towards you");
        let z = prompt("do you get in your car?(Y/N)");
        if((z == "y") || (z == "Y"))
        {
            console.log("The man leaps towards your car with his weapon in his hand, he climbs onto the hood of your car holding on by his very fraile fingers.");
            console.log("As you are driving the roads become clear and the street lights turn off.");
            console.log("You continue to press your foot on the gas to gain more speed, the man is swinging his weapon at you trying to intimidate you.");
            let a = prompt("Do you slam on the breaks?");
            if((a == "y") || (a == "Y")){
                console.log("As you slam on your breaks the man has flung off of your car but in the mean time your tires could not hold together since they were slashed while the man was on your car.");
                let b = prompt("Do you continue driving?(Y/N)");
                if((b == "y") || (b == "Y"))
                {
                    console.log("The car kept skidding and your car had caught fire, luckily you were near civilization and someone had seen your car aflame.");
                    console.log("As the ambulance had gotten to care for you the severe damages done to you had caused you to succumb to your wounds. (Died from injuries)");
                }
                else{
                    console.log("You get out of your car and start to run in a direction away from the man.");
                    console.log("You find a happy family who beknown to you were cannibals.");
                    console.log("They welcome you in with open arms and instantly start to look you up and down constantly.");
                    console.log("They end up giving you food but the food had been drugged and you never wake up again.(Death by being eaten)");
                }
            }
            else{
                console.log("As you kept driving attempting to get the man off of your car, you start to swerve left and right.");
                console.log("You ended up losing control and went off road crashing into a tree.");
                console.log("The man flew off your car and ended up getting impaled by a tree branch that had not been cleared in years since the tornado.");
                console.log("You Live! (With injuries)");
            }
        }
        else{
            console.log("You start running on foot while the man is chasing you.");
            console.log("You start trying to hide away from the man in any openings or easily visible areas.");
            console.log("As you start to lose your breath from running around he can hear you breathing.");
            console.log("As you try to stay calm he ends up finding you and taking your life(Death my man)");
        }
    }
    else{
        console.log("As you let him grab you he starts mumbling and saying random things you cannot understand.");
        console.log("As he is speaking his grip starts to strengthen.");
        console.log("You feel your arms and legs begin to lose feeling");
        console.log("You start to become dizzy and had passed out and never woken again.(Death by ritual)")
    }
}
else{
    console.log("You stay in your car and continue driving forward completely ignoring the man. You Live!");
}