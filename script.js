const ul = document.getElementById("task-list");
const taskList = [
  "base-apparel-coming-soon",
  "four-card-feature-section-master",
  "signup-form-master",
  "single-price-grid",
];
taskList.forEach((x) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let image = document.createElement("img");
  image.src = `/FrontEndChallenges/${x}/design/desktop-design.jpg`;
  a.href = `/FrontEndChallenges/${x}/index.html`;
  a.innerText = x;
  li.appendChild(a);
  li.appendChild(image);
  ul.appendChild(li);
});
