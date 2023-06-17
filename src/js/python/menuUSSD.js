document.getElementById("menuForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var option = document.getElementById("option").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/menu", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("message").textContent = response.message;
        }
    };

    var data = JSON.stringify({ option: option });
    xhr.send(data);
});
