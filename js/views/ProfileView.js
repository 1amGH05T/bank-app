import AbstractView from "./AbstractView.js";
import { appStore } from "../store.js";
import { navigateTo } from "../router.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Profile - NovaBank");
        this.user = appStore.getCurrentUser();
    }

    async getHtml() {
        if (!this.user) return '';

        return `
            <div class="min-h-screen bg-slate-900 flex flex-col text-white">
                <!-- Background Gradients -->
                <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div class="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div class="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
                </div>

                 <nav class="sticky top-0 z-30 glass-dark border-b border-white/10">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center">
                                <a href="/dashboard" class="flex items-center space-x-2" data-link>
                                    <div class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10 hover:bg-slate-700 transition">
                                        <ion-icon name="arrow-back-outline" class="text-white text-xl"></ion-icon>
                                    </div>
                                    <span class="text-xl font-bold text-white">Back to Dashboard</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="max-w-xl w-full space-y-8 glass-dark p-8 rounded-2xl shadow-xl border border-white/10">
                        <div class="text-center">
                            <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-4xl font-bold mb-4 shadow-lg ring-4 ring-white/10">
                                ${this.user.name.charAt(0)}
                            </div>
                            <h2 class="text-3xl font-extrabold text-white">
                                ${this.user.name}
                            </h2>
                            <p class="text-sm text-slate-400">
                                ${this.user.email}
                            </p>
                        </div>
                        
                        <div class="border-t border-white/10 pt-6 space-y-4">
                            <div>
                                <h3 class="text-sm font-medium text-slate-400">Account Number</h3>
                                <p class="mt-1 text-lg font-mono text-white tracking-wider">${this.user.accountNumber}</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-slate-400">Account Type</h3>
                                <p class="mt-1 text-lg text-white">Checking Account</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-slate-400">Member Since</h3>
                                <p class="mt-1 text-lg text-white">Jan 2026</p>
                            </div>
                        </div>

                         <div class="mt-8">
                            <button id="logoutBtn" class="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition shadow-lg shadow-red-600/30">
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async executeViewScript() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                appStore.logout();
                navigateTo('/login');
            });
        }
    }
}
