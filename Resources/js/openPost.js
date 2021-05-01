export default function openPost(e) {
  e.preventDefault();

  document.location = `/${this.dataset.href}?id=${this.dataset.id}`;
}
