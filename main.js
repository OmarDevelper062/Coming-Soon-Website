let count = localStorage.getItem("texly_clicks")
  ? parseInt(localStorage.getItem("texly_clicks"))
  : 0;

const counter = document.getElementById("count");
if (counter) counter.textContent = count;

function increaseCount() {
  count++;
  localStorage.setItem("texly_clicks", count);
  if (counter) counter.textContent = count;
}

function submitForm(e) {
  e.preventDefault();
  setTimeout(() => {
    window.location.href = "thank-you.html";
  }, 500);
}
