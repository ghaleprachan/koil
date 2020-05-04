import { Controller } from "@stimulus/core";

export default class NavController extends Controller {
  connect() {
    const url = this.element.getAttribute("href");

    if (window.location.pathname === url) {
      this.element.classList.add("current-nav");
    }
  }
}
