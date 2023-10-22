document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-button");
    const chatArea = document.getElementById("chat-area");

    const socket = new WebSocket("ws://localhost:3000"); // WebSocketサーバーのアドレスに合わせて変更

    socket.addEventListener("open", (event) => {
        console.log("WebSocket接続が確立されました");
    });

    socket.addEventListener("message", (event) => {
        const message = event.data;
        chatArea.innerHTML += message + "<br>";
    });

    sendButton.addEventListener("click", () => {
        const name = nameInput.value;
        const message = messageInput.value;
        if (message) {
            const chatMessage = `${name}: ${message}`;
            socket.send(chatMessage);
            messageInput.value = "";
        }
    });
});
