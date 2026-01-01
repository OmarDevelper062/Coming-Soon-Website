let count = localStorage.getItem("texly_clicks")
  ? parseInt(localStorage.getItem("texly_clicks"))
  : 0;

document.getElementById("count").textContent = count;

function increaseCount() {
  count++;
  localStorage.setItem("texly_clicks", count);
  document.getElementById("count").textContent = count;
}
