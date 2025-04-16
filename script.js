// Change text content and styles
document.getElementById("changeTextBtn").addEventListener("click", function() {
    const title = document.getElementById("title");
    const message = document.getElementById("message");
  
    title.textContent = "Hello, JavaScript is Active!";
    message.textContent = "message updated dynamically!";
    message.classList.toggle("highlight");
  });
  
  // Add or remove a box element
  document.getElementById("toggleBoxBtn").addEventListener("click", function() {
    const existingBox = document.getElementById("box");
  
    if (existingBox) {
      existingBox.remove();
    } else {
      const newBox = document.createElement("div");
      newBox.id = "box";
      document.body.appendChild(newBox);
    }
  });
  