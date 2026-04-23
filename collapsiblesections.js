var coll = document.getElementsByClassName("collapsible");
console.log(coll)
console.log(coll.length)
for(var i = 0; i < coll.length; i++)
{
    console.log("THe code is getting to the for loop")
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle("active");
        if(content.style.display === "block")
        {
            content.style.display = "none";
            console.log("This works if display === block")

        }
        else{
            content.style.display = "block";
        }
    });
}