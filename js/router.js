import LandingView from "./views/LandingView.js";
import LoginView from "./views/LoginView.js";
import RegisterView from "./views/RegisterView.js";
import ForgotPasswordView from "./views/ForgotPasswordView.js";
import DashboardView from "./views/DashboardView.js";
import TransferView from "./views/TransferView.js";
import TransactionsView from "./views/TransactionsView.js";
import ProfileView from "./views/ProfileView.js";
import HowItWorksView from "./views/HowItWorksView.js";
import TestimonialsView from "./views/TestimonialsView.js";
import { appStore } from "./store.js";

export const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: LandingView },
        { path: "/login", view: LoginView },
        { path: "/register", view: RegisterView },
        { path: "/forgot-password", view: ForgotPasswordView },
        { path: "/dashboard", view: DashboardView, protected: true },
        { path: "/transfer", view: TransferView, protected: true },
        { path: "/transactions", view: TransactionsView, protected: true },
        { path: "/profile", view: ProfileView, protected: true },
        { path: "/how-it-works", view: HowItWorksView },
        { path: "/testimonials", view: TestimonialsView }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // Check for protected routes
    if (match.route.protected && !appStore.isAuthenticated()) {
        navigateTo('/login');
        return;
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    // Execute any script associated with the view (event listeners etc)
    if (view.executeViewScript) {
        view.executeViewScript();
    }
};

window.addEventListener("popstate", router);

export { router };
