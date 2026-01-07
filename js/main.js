import { router, navigateTo } from "./router.js";
import { appStore } from "./store.js";

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Store
    appStore.init();

    // Intercept clicks on links for SPA navigation
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    // Initial Routing
    router();
});
