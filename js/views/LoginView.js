import AbstractView from "./AbstractView.js";
import { appStore } from "../store.js";
import { navigateTo } from "../router.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login - NovaBank");
    }

    async getHtml() {
        return `
            <div class="min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <!-- Background Decoration -->
                <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>

                <div class="max-w-md w-full space-y-8 glass-dark p-10 rounded-2xl shadow-xl relative z-10 border border-white/10">
                    <div>
                        <a href="/" class="flex justify-center" data-link>
                             <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <ion-icon name="wallet-outline" class="text-white text-3xl"></ion-icon>
                            </div>
                        </a>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
                            Sign in to your account
                        </h2>
                        <p class="mt-2 text-center text-sm text-slate-400">
                            Or
                            <a href="/register" class="font-medium text-indigo-400 hover:text-indigo-300 transition" data-link>
                                create a new account
                            </a>
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" id="loginForm">
                        <div class="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="email-address" class="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value="alex@example.com">
                            </div>
                            <div>
                                <label for="password" class="sr-only">Password</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value="password123">
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-slate-600 rounded bg-slate-800">
                                <label for="remember-me" class="ml-2 block text-sm text-slate-300">
                                    Remember me
                                </label>
                            </div>

                            <div class="text-sm">
                                <a href="/forgot-password" class="font-medium text-indigo-400 hover:text-indigo-300" data-link>
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" id="submitBtn" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition shadow-lg shadow-indigo-500/30">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <ion-icon name="lock-closed-outline" class="text-indigo-200 group-hover:text-white text-lg transition"></ion-icon>
                                </span>
                                Sign in
                            </button>
                        </div>
                        <div id="errorMessage" class="hidden text-red-400 text-sm text-center mt-2 bg-red-900/20 p-2 rounded border border-red-500/20"></div>
                    </form>
                </div>
            </div>
        `;
    }

    async executeViewScript() {
        const loginForm = document.getElementById('loginForm');
        const submitBtn = document.getElementById('submitBtn');
        const errorMessage = document.getElementById('errorMessage');

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline shadow-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Signing in...`;

            try {
                const result = await appStore.login(email, password);
                if (result.success) {
                    navigateTo('/dashboard');
                } else {
                    errorMessage.textContent = result.message;
                    errorMessage.classList.remove('hidden');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="lock-closed-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon></span> Sign in`;
                }
            } catch (error) {
                console.error(error);
                errorMessage.textContent = "An error occurred";
                errorMessage.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="lock-closed-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon></span> Sign in`;
            }
        });
    }
}
