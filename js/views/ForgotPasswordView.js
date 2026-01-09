import AbstractView from "./AbstractView.js";
import { Utils } from "../utils.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Forgot Password - NovaBank");
    }

    async getHtml() {
        return `
            <div class="min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <!-- Background Decoration -->
                <div class="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>

                <div class="max-w-md w-full space-y-8 glass-dark p-10 rounded-2xl shadow-xl relative z-10 border border-white/10">
                    <div>
                        <a href="/" class="flex justify-center" data-link>
                             <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <ion-icon name="wallet-outline" class="text-white text-3xl"></ion-icon>
                            </div>
                        </a>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
                            Reset your password
                        </h2>
                        <p class="mt-2 text-center text-sm text-slate-400">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" id="forgotPasswordForm">
                        <div class="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="email-address" class="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-md relative block w-full px-3 py-3 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                            </div>
                        </div>

                        <div>
                            <button type="submit" id="submitBtn" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition shadow-lg shadow-indigo-500/30">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <ion-icon name="mail-outline" class="text-indigo-200 group-hover:text-white text-lg transition"></ion-icon>
                                </span>
                                Send Reset Link
                            </button>
                        </div>
                        <div id="statusMessage" class="hidden text-sm text-center mt-2 p-2 rounded"></div>
                        
                        <div class="text-center">
                            <a href="/login" class="font-medium text-indigo-400 hover:text-indigo-300" data-link>
                                Back to Sign in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    async executeViewScript() {
        const form = document.getElementById('forgotPasswordForm');
        const submitBtn = document.getElementById('submitBtn');
        const statusMessage = document.getElementById('statusMessage');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline shadow-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...`;

            await Utils.delay(1500); // Simulate network

            statusMessage.textContent = "If an account exists for that email, we have sent a password reset link.";
            statusMessage.className = "text-green-700 bg-green-100 p-2 rounded block mt-4";

            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="mail-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon></span> Send Reset Link`;
            form.reset();
        });
    }
}
