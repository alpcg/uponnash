const novel = JSON.parse(localStorage.getItem("selectedNovel"));
const contentDiv = document.getElementById("novelContent");
const title = document.getElementById("novelTitle");
const downLink = document.getElementById("downloadPdf");

if (novel) {
  title.textContent = novel.title;
  contentDiv.textContent = novel.content;
  downLink.href = novel.pdf;
  const savedScroll = localStorage.getItem("scroll_" + novel.id);
  if (savedScroll) {
    setTimeout(() => window.scrollTo(0, parseInt(savedScroll)), 200);
  }
} else {
  contentDiv.textContent = "উপন্যাস পাওয়া যায়নি।";
}

function increaseFont() {
  let current = parseInt(window.getComputedStyle(contentDiv).fontSize);
  contentDiv.style.fontSize = (current + 2) + "px";
}

function decreaseFont() {
  let current = parseInt(window.getComputedStyle(contentDiv).fontSize);
  contentDiv.style.fontSize = (current - 2) + "px";
}

function saveBookmark() {
  localStorage.setItem("scroll_" + novel.id, window.scrollY);
  alert("✅ শেষ অবস্থানে বুকমার্ক করা হয়েছে!");
}
