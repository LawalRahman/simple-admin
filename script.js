const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// open side bar
menuBtn.addEventListener("click", function () {
  sideMenu.style.display = "block";
});

// close side bar
closeBtn.addEventListener("click", function () {
  sideMenu.style.display = "none";
});

// change theme
themeToggler.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <tr>
    <td>${order.productName}</td>
    <td>${order.ProductNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.shipping === "Declined"
        ? "danger"
        : order.shipping === "Pending"
        ? "warning"
        : "primary"
    }">${order.shipping}</td>
    <td class="primary">Details</td>
</tr>
    `;

  tr.innerHTML = trContent;

  document.querySelector("table tbody").appendChild(tr);
});
