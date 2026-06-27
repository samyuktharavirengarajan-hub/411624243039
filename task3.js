let messages = [];

const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const count = document.getElementById("count");
const status = document.getElementById("status");
const messageSection = document.getElementById("messageSection");

// Character Count
input.addEventListener("input", () => {
    count.textContent = "Character Count: " + input.value.length;
});

// Display Messages
function displayMessages() {
    messageSection.innerHTML = "";
    messages.forEach((msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        messageSection.appendChild(p);
        setTimeout(() => {
            p.remove();
            status.textContent = "Message Expired";
        }, 10000);
    });
}

// Add Message Button
addBtn.addEventListener("click", () => {
    const message = input.value;
    const promise = new Promise((resolve, reject) => {
        if (message.length >= 3) {
            resolve(message);
        } else {
            reject();
        }
    });
    promise
        .then((msg) => {
            status.textContent = "Message Added Successfully";
            messages.push(msg);
            displayMessages();
            input.value = "";
            count.textContent = "Character Count: 0";
        })
        .catch(() => {
            status.textContent =
                "Message must contain at least 3 characters";
        });
});

// Clear All Messages
clearBtn.addEventListener("click", () => {
    messages = [];
    messageSection.innerHTML = "";
    status.textContent = "All Messages Cleared";

});