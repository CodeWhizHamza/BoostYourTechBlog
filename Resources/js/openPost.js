export default function openPost(e) {
  e.preventDefault();

  document.location = `/post.html?id=${this.dataset.id}`;
}
