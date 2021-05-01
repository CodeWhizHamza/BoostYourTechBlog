const containerPost = document.querySelector("#posts");
const categoryBtn = document.querySelectorAll(".category__item");

const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Cannot get data!");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export async function loadPosts(e, category = "all") {
  if (e) {
    e.preventDefault();
    categoryBtn.forEach((btn) =>
      btn.classList.remove("category__item--active")
    );
    const target = e.target.closest(".category__item");
    target.classList.add("category__item--active");
  }
  const json = await getJSON("/data.json");
  if (category === "all") loadArticles(json);
  else loadArticles(json.filter((item) => item.category === category));
}

const createArticle = function (obj) {
  const html = `
    <article class="post">
      <div class="post__header" onclick='document.location="post.html?id=${obj.id}"'>
        <picture>
          <img
            src="${obj.image}"
            alt="${obj.title}"
            class="post__image"
          />
        </picture>
        <div class="post__content">
          <span class="post__category">${obj.category}</span>
          <h2 class="post__title">
            ${obj.title}
          </h2>
          <div class="post__details">
            <span>${obj.author}</span><span>${obj.date}</span>
          </div>
          <div class="post__actions">
            <span class="post__views">
              <span class="fas fa-eye"></span> ${obj.views}+ Views
            </span>
            <span class="post__views">
              <span class="fas fa-comment"></span> ${obj.comments}+ comments
            </span>
            <span class="post__views">
              <span class="fas fa-share-square"></span> ${obj.shares}+ shares
            </span>
          </div>
        </div>
      </div>
      <div class="post__footer">
        <p class="post__text">
          ${obj.text}
        </p>
        <a data-id="${obj.id}" href='/post.html?id=${obj.id}' class="post__btn btn btn--solid">
          Continue reading &rarr;
        </a>
      </div>
    </article>
  `;
  return html;
};

const loadArticles = function (arr) {
  const articles = arr.map((item) => createArticle(item));
  containerPost.innerHTML = articles.join("");
};
