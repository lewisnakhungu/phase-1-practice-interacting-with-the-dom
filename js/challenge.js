document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let count = 0;
    let interval = setInterval(incrementCounter, 1000);
  
    function incrementCounter() {
      count++;
      counter.innerText = count;
    }
  
    function decrementCounter() {
      count--;
      counter.innerText = count;
    }
  
    document.getElementById("plus").addEventListener("click", incrementCounter);
    document.getElementById("minus").addEventListener("click", decrementCounter);
  
    document.getElementById("heart").addEventListener("click", () => {
      let likesList = document.querySelector(".likes");
      let existingLike = document.getElementById(`like-${count}`);
      
      if (existingLike) {
        let likeCount = parseInt(existingLike.dataset.count, 10) + 1;
        existingLike.dataset.count = likeCount;
        existingLike.innerText = `${count} has been liked ${likeCount} times`;
      } else {
        let li = document.createElement("li");
        li.id = `like-${count}`;
        li.dataset.count = 1;
        li.innerText = `${count} has been liked 1 time`;
        likesList.appendChild(li);
      }
    });
  
    let pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click", () => {
      if (pauseButton.innerText === "pause") {
        clearInterval(interval);
        document.querySelectorAll("button:not(#pause)").forEach(btn => btn.disabled = true);
        pauseButton.innerText = "resume";
      } else {
        interval = setInterval(incrementCounter, 1000);
        document.querySelectorAll("button").forEach(btn => btn.disabled = false);
        pauseButton.innerText = "pause";
      }
    });
  
    document.getElementById("comment-form").addEventListener("submit", (e) => {
      e.preventDefault();
      let commentInput = document.getElementById("comment-input");
      let commentText = commentInput.value;
      if (commentText.trim()) {
        let commentList = document.getElementById("list");
        let p = document.createElement("p");
        p.innerText = commentText;
        commentList.appendChild(p);
        commentInput.value = "";
      }
    });
  });