// Function to handle changes in the language selection
function updateCodeSnippet() {
    const lan = document.getElementById("language").value;

    // Hide all div elements
    document.querySelectorAll('.snippet').forEach(div => div.style.display = 'none');

    if (lan === "java") {
        document.getElementById("java-snippet").style.display = 'block';
    } else if (lan === "cpp") {
        document.getElementById("cpp-snippet").style.display = 'block';
    } else if (lan === "c") {
        document.getElementById("c-snippet").style.display = 'block';
    } else if (lan === "python") {
        document.getElementById("python-snippet").style.display = 'block';
    } else {
        // Handle unsupported languages or default behavior
    }
}

// Attach the updateCodeSnippet function to the change event of the language input element
document.getElementById("language").addEventListener("change", updateCodeSnippet);

// Call the updateCodeSnippet function initially to set the initial state based on the current value
updateCodeSnippet();
document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.getElementById('userIcon');
    alert("Click Start button , it will take few seconds...😊");
    userIcon.addEventListener('click', function() {
       alert("Hello, hey fellow developer ❤️😍😘😁");
    });
});