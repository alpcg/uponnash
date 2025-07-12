const novels = [
  {
    id: 1,
    title: "হ্যাঁরি পটার",
    author: "জে. কে. রাওলিং",
    category: "জে. কে. রাওলিং",
    thumbnail: "assets/thumbnails/harry-potter.jpg",
    pdf: "pdfs/harry-potter.pdf",
    content: "হ্যাঁরি পটার একটি জাদুকরী জগতের কাহিনী যেখানে হ্যাঁরি তার বন্ধুদের সাথে নানা রহস্য উন্মোচন করে।"
  },
  {
    id: 2,
    title: "দেবদাস",
    author: "শরৎচন্দ্র চট্টোপাধ্যায়",
    category: "শরৎচন্দ্র চট্টোপাধ্যায়",
    thumbnail: "assets/thumbnails/test.png",
    pdf: "pdfs/debdas.pdf",
    content: "দেবদাস একটি মর্মস্পর্শী প্রেমের গল্প যা আত্মত্যাগ ও অনুশোচনার নিদর্শন।"
  },
  {
    id: 3,
    title: "চোখের বালি",
    author: "রবীন্দ্রনাথ ঠাকুর",
    category: "রবীন্দ্রনাথ ঠাকুর",
    thumbnail: "assets/thumbnails/test.png",
    pdf: "pdfs/chokher-bali.pdf",
    content: "চোখের বালি উপন্যাসে প্রেম, বন্ধুত্ব ও নারীর স্বাধীনতার সূক্ষ্ম দিক তুলে ধরা হয়েছে।"
  }
];

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const novelList = document.getElementById('novelList');

function renderNovelList(novelArray) {
  novelList.innerHTML = '';
  if (novelArray.length === 0) {
    novelList.innerHTML = '<p>কোনো উপন্যাস পাওয়া যায়নি।</p>';
    return;
  }

  novelArray.forEach(novel => {
    const card = document.createElement('div');
    card.className = 'novel-card';
    card.innerHTML = `
      <div class="thumbnail-wrapper">
        <img src="${novel.thumbnail}" alt="${novel.title}">
        <div class="overlay">
          <h3>${novel.title}</h3>
          <p>✍️ ${novel.author}</p>
          <p>📚 ${novel.category}</p>
        </div>
      </div>
      <div class="novel-buttons">
        <a href="novels/Harry Potter and The Chamber of Secrets by J. K. Rowling.pdf?id=${novel.id}" onclick='localStorage.setItem("selectedNovel", JSON.stringify(${JSON.stringify(novel)}))'>📖 পড়ুন</a>
        <a href="novels/Harry Potter and The Chamber of Secrets by J. K. Rowling.pdf?id=${novel.pdf}" download>⬇️ PDF</a>
      </div>
    `;
    novelList.appendChild(card);
  });
}

function filterNovels() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const filtered = novels.filter(novel =>
    novel.title.toLowerCase().includes(searchText) &&
    (selectedCategory ? novel.category === selectedCategory : true)
  );
  renderNovelList(filtered);
}

searchInput.addEventListener('input', filterNovels);
categoryFilter.addEventListener('change', filterNovels);

// Initial render
renderNovelList(novels);
