function fetchRandomVerse() {
    const bookElement = document.getElementById("bookname");
    const book = bookElement.value.trim();
    if(!book){
        console.error("Please enter a book name.");
        return;
    }

const verse = Math.floor(Math.random()*10 + 1);
const chapter = Math.floor(Math.random()*3 +1);
const url = `https://bible-api.com/${book}+${chapter}:${verse}`;
fetch(url)
.then(response => 
{   
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Fetch works correctly");
    console.log("the response variable works");
    return response.json();
})
.then(data => {
    const outputDiv = document.getElementById("verseOutput");
    if(data.verses && data.verses.length > 0){
        const verseText = data.verses[0].text;
        outputDiv.textContent = `Random Verse: ${verseText}`;
    } else {
        outputDiv.textContent = "No verses found for the specified book.";
    }
})
.catch(error => console.error('Error:', error));
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fetchBtn").addEventListener("click", fetchRandomVerse);
});