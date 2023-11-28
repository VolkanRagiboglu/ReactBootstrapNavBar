// load page and inject into content
async function loadPage(page) {
  console.log("loadPage called with page:", page);
  const res = await fetch(page);
  const content = await res.text();
  const element = document.getElementById("content");
  element.innerHTML = content;
}
