import { getData } from "../api";
import { tbodyRef } from "../refs";
import { createUsersTable } from "../markup";
import { updatePage } from "../helpers";
console.log(tbodyRef);
getData("users")
  .then((data) => {
    const markup = createUsersTable(data);
    updatePage(tbodyRef, markup);
  })
  .catch((error) => {
    alert(error);
  });

tbodyRef.addEventListener("click", getUserId);

function getUserId(event) {
  const userId = event.target.parentNode.dataset.userid;
  location.href = "/user.html?userid=" + userId;
}
