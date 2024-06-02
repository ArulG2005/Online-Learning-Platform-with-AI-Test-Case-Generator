

// Select the list items and corresponding content divs
const listItems = document.querySelectorAll('ul li');
const contentDivs = document.querySelectorAll('.content1');

// Add event listeners to each list item
listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Hide all content divs
        contentDivs.forEach(content => content.style.display = 'none');
        
        // Show the corresponding content div
        contentDivs[index].style.display = 'block';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.getElementById('userIcon');

    userIcon.addEventListener('click', function() {
       alert("Hello, hey fellow developer ❤️😍😘😁");
    });
});
contentDivs[0].style.display = 'block';
function executeJavaCode(authToken) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.jdoodle.com/v1/execute');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error('Failed to fetch'));
            }
        };
        xhr.onerror = function () {
            reject(new Error('Network error'));
        };
        const requestData = {
            clientId: '36af3ac7c4fdd1d9e91d112624b64c7',
            clientSecret: 'a616d64cba05a3adef9fff6fe174febd90cba3c0f77876b025336ebb203b768b',
            script: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            language: 'java',
            versionIndex: '3',
            stdin: '',
            compileOnly: false
        };
        xhr.send(JSON.stringify(requestData));
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll('.clickable');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
      
            item.classList.add('clicked');
        });
    });
});


async function getAuthToken() {
    try {
        const response = await fetch('https://api.jdoodle.com/v1/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clientId: '36af3ac7c4fdd1d9e91d112624b64c7',
                clientSecret: 'a616d64cba05a3adef9fff6fe174febd90cba3c0f77876b025336ebb203b768b',
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch authentication token');
        }

        const data = await response.json();
        const authToken = data.token;
        console.log('Authentication token:', authToken);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to get the authentication token
getAuthToken();
