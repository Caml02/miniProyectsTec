document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var number = document.getElementById("number").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/convert", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("resultText").textContent = response.result;
      }
    };

    var data = JSON.stringify({ number: number });
    xhr.send(data);
});
