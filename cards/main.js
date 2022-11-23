import hotels from "./assets/data.json";

const items = document.getElementsByClassName("items")[0];

hotels.forEach((i) => {
  items.innerHTML += `<div id=${i.id} class="item">
  <img
    src=${i.imageUrl}
    alt="hotel-image"
  />
  <h3>${i.name}</h3>
  <h4>
    ${i.city},<br />
    ${i.country}
  </h4>
</div> `;
});
