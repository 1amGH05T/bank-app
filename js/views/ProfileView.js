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
            <div class="min-h-screen bg-gray-50 flex flex-col">
                 <nav class="bg-white border-b border-gray-200 sticky top-0 z-30">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center">
                                <a href="/dashboard" class="flex items-center space-x-2" data-link>
                                    <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                        <ion-icon name="arrow-back-outline" class="text-white text-xl"></ion-icon>
                                    </div>
                                    <span class="text-xl font-bold text-gray-900">Back onto Dashboard</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-xl w-full space-y-8 glass p-8 rounded-2xl shadow-xl bg-white">
                        <div class="text-center">
                            <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 text-indigo-600 text-4xl font-bold mb-4">
                                ${this.user.name.charAt(0)}
                            </div>
                            <h2 class="text-3xl font-extrabold text-gray-900">
                                ${this.user.name}
                            </h2>
                            <p class="text-sm text-gray-500">
                                ${this.user.email}
                            </p>
                        </div>
                        
                        <div class="border-t border-gray-200 pt-6 space-y-4">
                            <div>
                                <h3 class="text-sm font-medium text-gray-500">Account Number</h3>
                                <p class="mt-1 text-lg font-mono text-gray-900">${this.user.accountNumber}</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-500">Account Type</h3>
                                <p class="mt-1 text-lg text-gray-900">Checking Account</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-500">Member Since</h3>
                                <p class="mt-1 text-lg text-gray-900">Jan 2026</p>
                            </div>
                        </div>

                         <div class="mt-8">
                            <button id="logoutBtn" class="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition shadow-lg shadow-red-600/30">
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
