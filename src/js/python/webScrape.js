document.getElementById("webScrapeForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var url = document.getElementById("url").value;
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/web_scraping", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.error) {
            alert("Error: " + response.error);
          } else {
            document.getElementById("pageTitle").textContent = response.title;
            document.getElementById("metaDescription").textContent = response.description;
            document.getElementById("internalLinks").textContent = response.links;
          }
        } 
      }
    };
  
    var data = JSON.stringify({ url: url });
    xhr.send(data);
  });
  