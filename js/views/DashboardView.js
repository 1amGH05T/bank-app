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
            <div class="flex items-center justify-between p-4 bg-slate-800/50 border border-white/5 rounded-xl hover:bg-slate-800 transition group">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}">
                        <ion-icon name="${tx.type === 'credit' ? 'arrow-down-outline' : 'arrow-up-outline'}" class="text-xl"></ion-icon>
                    </div>
                    <div>
                        <div class="text-sm font-bold text-white group-hover:text-indigo-300 transition">${tx.description}</div>
                        <div class="text-xs text-slate-500">${Utils.formatDate(tx.date)}</div>
                    </div>
                </div>
                <div class="text-sm font-bold ${tx.type === 'credit' ? 'text-emerald-400' : 'text-white'}">
                    ${tx.type === 'credit' ? '+' : '-'}${Utils.formatCurrency(tx.amount)}
                </div>
            </div>
        `).join('');

        return `
            <div class="min-h-screen bg-slate-900 flex flex-col text-white">
                <!-- Background Gradients -->
                <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div class="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div class="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
                </div>

                <!-- Top Navigation -->
                <nav class="sticky top-0 z-30 glass-dark border-b border-white/10">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center">
                                <a href="/dashboard" class="flex items-center space-x-2" data-link>
                                    <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                        <ion-icon name="wallet-outline" class="text-white text-xl"></ion-icon>
                                    </div>
                                    <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">NovaBank</span>
                                </a>
                                <div class="hidden md:flex ml-10 space-x-8">
                                    <a href="/dashboard" class="text-white font-medium items-center flex border-b-2 border-indigo-500 h-16 px-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500 after:shadow-[0_0_10px_rgba(99,102,241,0.5)]" data-link>
                                        <ion-icon name="grid-outline" class="mr-2"></ion-icon> Dashboard
                                    </a>
                                    <a href="/transactions" class="text-slate-400 hover:text-white font-medium items-center flex h-16 px-1 transition" data-link>
                                        <ion-icon name="list-outline" class="mr-2"></ion-icon> Activity
                                    </a>
                                    <a href="/transfer" class="text-slate-400 hover:text-white font-medium items-center flex h-16 px-1 transition" data-link>
                                        <ion-icon name="paper-plane-outline" class="mr-2"></ion-icon> Pay & Transfer
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="hidden md:flex flex-col items-end mr-2">
                                    <span class="text-sm font-medium text-white">${this.user.name}</span>
                                    <span class="text-xs text-slate-400">${this.user.email}</span>
                                </div>
                                <div class="relative group">
                                    <button class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg border border-white/10 focus:outline-none">
                                        <span class="font-bold text-lg">${this.user.name.charAt(0)}</span>
                                    </button>
                                    <!-- Dropdown -->
                                    <div class="absolute right-0 mt-2 w-48 bg-slate-800 rounded-xl shadow-xl border border-white/10 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                                        <a href="/profile" class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition" data-link>Profile Settings</a>
                                        <button id="logoutBtn" class="w-full text-left block px-4 py-2 text-sm text-rose-400 hover:bg-rose-500/10 transition">Sign out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Page Content -->
                <div class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10">
                    
                    <!-- Welcome & Balance -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Balance Card -->
                        <div class="lg:col-span-2 space-y-8">
                             <div class="bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-white/10 group">
                                <div class="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl group-hover:opacity-10 transition duration-1000"></div>
                                <div class="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 rounded-full bg-white opacity-5 blur-3xl group-hover:opacity-10 transition duration-1000"></div>
                                
                                <div class="relative z-10">
                                    <div class="text-indigo-200 font-medium mb-1 tracking-wide">Total Balance</div>
                                    <div class="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">${Utils.formatCurrency(this.user.balance)}</div>
                                    
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div class="text-indigo-200 text-sm mb-1">Account Number</div>
                                            <div class="font-mono text-lg tracking-wider opacity-90">${this.user.accountNumber}</div>
                                        </div>
                                        <div class="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg">
                                            <span class="text-xs font-bold tracking-widest uppercase text-emerald-300">Active</span>
                                        </div>
                                    </div>
                                </div>
                             </div>

                             <!-- Quick Actions -->
                             <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <a href="/transfer" class="block group" data-link>
                                    <div class="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800 hover:shadow-indigo-500/10 transition text-center h-full flex flex-col items-center justify-center space-y-3 backdrop-blur-sm">
                                        <div class="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition shadow-lg shadow-indigo-500/5">
                                            <ion-icon name="arrow-redo-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-slate-300 group-hover:text-white transition">Transfer</span>
                                    </div>
                                </a>
                                <a href="/transfer" class="block group" data-link>
                                    <div class="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-white/5 hover:border-purple-500/50 hover:bg-slate-800 hover:shadow-purple-500/10 transition text-center h-full flex flex-col items-center justify-center space-y-3 backdrop-blur-sm">
                                        <div class="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition shadow-lg shadow-purple-500/5">
                                            <ion-icon name="qr-code-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-slate-300 group-hover:text-white transition">Scan & Pay</span>
                                    </div>
                                </a>
                                <a href="#" class="block group">
                                    <div class="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-white/5 hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-blue-500/10 transition text-center h-full flex flex-col items-center justify-center space-y-3 backdrop-blur-sm">
                                        <div class="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition shadow-lg shadow-blue-500/5">
                                            <ion-icon name="document-text-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-slate-300 group-hover:text-white transition">Bills</span>
                                    </div>
                                </a>
                                <a href="#" class="block group">
                                    <div class="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-white/5 hover:border-emerald-500/50 hover:bg-slate-800 hover:shadow-emerald-500/10 transition text-center h-full flex flex-col items-center justify-center space-y-3 backdrop-blur-sm">
                                        <div class="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition shadow-lg shadow-emerald-500/5">
                                            <ion-icon name="card-outline" class="text-2xl"></ion-icon>
                                        </div>
                                        <span class="text-sm font-bold text-slate-300 group-hover:text-white transition">My Cards</span>
                                    </div>
                                </a>
                             </div>
                        </div>

                        <!-- Recent Transactions Column -->
                        <div class="bg-slate-900/50 rounded-3xl shadow-lg border border-white/10 p-6 flex flex-col h-full backdrop-blur-md">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-lg font-bold text-white">Recent Activity</h3>
                                <a href="/transactions" class="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition" data-link>View all</a>
                            </div>
                            
                            <div class="space-y-4 overflow-y-auto flex-grow custom-scrollbar">
                                ${transactionsHtml.length > 0 ? transactionsHtml : '<div class="text-center text-slate-500 py-4">No recent transactions</div>'}
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