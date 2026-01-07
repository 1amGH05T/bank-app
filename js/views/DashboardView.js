import AbstractView from "./AbstractView.js";
import { appStore } from "../store.js";
import { Utils } from "../utils.js";
import { navigateTo } from "../router.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard - NovaBank");
        this.user = appStore.getCurrentUser();
    }

    async getHtml() {
        if (!this.user) return '';

        const transactionsHtml = this.user.transactions.slice(0, 5).map(tx => `
            <div class="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}">
                        <ion-icon name="${tx.type === 'credit' ? 'arrow-down-outline' : 'arrow-up-outline'}" class="text-xl"></ion-icon>
                    </div>
                    <div>
                        <div class="text-sm font-bold text-gray-900">${tx.description}</div>
                        <div class="text-xs text-gray-500">${Utils.formatDate(tx.date)}</div>
                    </div>
                </div>
                <div class="text-sm font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-gray-900'}">
                    ${tx.type === 'credit' ? '+' : '-'}${Utils.formatCurrency(tx.amount)}
                </div>
            </div>
        `).join('');

        return `
            <div class="min-h-screen bg-gray-50 flex flex-col">
                <!-- Top Navigation -->
                <nav class="bg-white border-b border-gray-200 sticky top-0 z-30">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center">
                                <a href="/dashboard" class="flex items-center space-x-2" data-link>
                                    <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                        <ion-icon name="wallet-outline" class="text-white text-xl"></ion-icon>
                                    </div>
                                    <span class="text-xl font-bold text-gray-900">NovaBank</span>
                                </a>
                                <div class="hidden md:flex ml-10 space-x-8">
                                    <a href="/dashboard" class="text-indigo-600 font-medium items-center flex border-b-2 border-indigo-600 h-16 px-1" data-link>
                                        <ion-icon name="grid-outline" class="mr-2"></ion-icon> Dashboard
                                    </a>
                                    <a href="/transactions" class="text-gray-500 hover:text-gray-900 font-medium items-center flex h-16 px-1 transition" data-link>
                                        <ion-icon name="list-outline" class="mr-2"></ion-icon> Activity
                                    </a>
                                    <a href="/transfer" class="text-gray-500 hover:text-gray-900 font-medium items-center flex h-16 px-1 transition" data-link>
                                        <ion-icon name="paper-plane-outline" class="mr-2"></ion-icon> Pay & Transfer
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="hidden md:flex flex-col items-end mr-2">
                                    <span class="text-sm font-medium text-gray-900">${this.user.name}</span>
                                    <span class="text-xs text-gray-500">${this.user.email}</span>
                                </div>
                                <div class="relative group">
                                    <button class="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 border border-indigo-200 focus:outline-none">
                                        <span class="font-bold text-lg">${this.user.name.charAt(0)}</span>
                                    </button>
                                    <!-- Dropdown -->
                                    <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                                        <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-link>Profile Settings</a>
                                        <button id="logoutBtn" class="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Sign out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Page Content -->
                <div class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                    
                    <!-- Welcome & Balance -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Balance Card -->
                        <div class="lg:col-span-2 space-y-8">
                             <div class="bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                                <div class="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 rounded-full bg-white opacity-10"></div>
                                <div class="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 rounded-full bg-white opacity-10"></div>
                                
                                <div class="relative z-10">
                                    <div class="text-indigo-100 font-medium mb-1">Total Balance</div>
                                    <div class="text-4xl md:text-5xl font-bold mb-8">${Utils.formatCurrency(this.user.balance)}</div>
                                    
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div class="text-indigo-200 text-sm mb-1">Account Number</div>
                                            <div class="font-mono text-lg tracking-wider">${this.user.accountNumber}</div>
                                        </div>
                                        <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                            <span class="text-xs font-bold tracking-widest uppercase">Active</span>
                                        </div>
                                    </div>
                                </div>
                             </div>

                             <!-- Quick Actions -->
                             <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <a href="/transfer" class="block group" data-link>
                                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition text-center h-full flex flex-col items-center justify-center space-y-3">
                                        <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                                            <ion-icon name="arrow-redo-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700 group-hover:text-indigo-600 transition">Transfer</span>
                                    </div>
                                </a>
                                <a href="/transfer" class="block group" data-link>
                                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition text-center h-full flex flex-col items-center justify-center space-y-3">
                                        <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition">
                                            <ion-icon name="qr-code-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700 group-hover:text-purple-600 transition">Scan & Pay</span>
                                    </div>
                                </a>
                                <a href="#" class="block group">
                                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition text-center h-full flex flex-col items-center justify-center space-y-3">
                                        <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                                            <ion-icon name="document-text-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition">Bills</span>
                                    </div>
                                </a>
                                <a href="#" class="block group">
                                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition text-center h-full flex flex-col items-center justify-center space-y-3">
                                        <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                                            <ion-icon name="card-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700 group-hover:text-emerald-600 transition">My Cards</span>
                                    </div>
                                </a>
                             </div>
                        </div>

                        <!-- Recent Transactions Column -->
                        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-lg font-bold text-gray-900">Recent Activity</h3>
                                <a href="/transactions" class="text-sm font-medium text-indigo-600 hover:text-indigo-500" data-link>View all</a>
                            </div>
                            
                            <div class="space-y-4 overflow-y-auto flex-grow">
                                ${transactionsHtml.length > 0 ? transactionsHtml : '<div class="text-center text-gray-500 py-4">No recent transactions</div>'}
                            </div>
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