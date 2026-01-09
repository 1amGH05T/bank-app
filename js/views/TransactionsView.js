import AbstractView from "./AbstractView.js";
import { appStore } from "../store.js";
import { Utils } from "../utils.js";
import { navigateTo } from "../router.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Transactions - NovaBank");
        this.user = appStore.getCurrentUser();
    }

    async getHtml() {
        if (!this.user) return '';

        // Initial render matches "All"
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

                <div class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-white">Transaction History</h2>
                        <div class="flex space-x-2">
                            <select id="filterType" class="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="all">All Transactions</option>
                                <option value="credit">Income Only</option>
                                <option value="debit">Expenses Only</option>
                            </select>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 shadow-xl border border-white/10 rounded-xl overflow-hidden p-6 backdrop-blur-md" id="transactionsList">
                        <!-- Transactions injected here -->
                    </div>
                </div>
            </div>
        `;
    }

    renderTransactions(filter = 'all') {
        const list = document.getElementById('transactionsList');
        if (!list) return;

        let filtered = this.user.transactions;
        if (filter !== 'all') {
            filtered = filtered.filter(tx => tx.type === filter);
        }

        if (filtered.length === 0) {
            list.innerHTML = '<div class="text-center text-slate-500 py-12">No transactions found</div>';
            return;
        }

        list.innerHTML = filtered.map(tx => `
            <div class="flex items-center justify-between p-4 bg-slate-800/50 border border-white/5 rounded-xl hover:bg-slate-800 transition mb-3 animate-fade-in group">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}">
                        <ion-icon name="${tx.type === 'credit' ? 'arrow-down-outline' : 'arrow-up-outline'}" class="text-xl"></ion-icon>
                    </div>
                    <div>
                        <div class="text-sm font-bold text-white group-hover:text-indigo-300 transition">${tx.description}</div>
                        <div class="text-xs text-slate-500">${Utils.formatDate(tx.date)}</div>
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${tx.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-yellow-500/10 text-yellow-400'} mt-1">
                            ${tx.status}
                        </span>
                    </div>
                </div>
                <div class="text-sm font-bold ${tx.type === 'credit' ? 'text-emerald-400' : 'text-white'}">
                    ${tx.type === 'credit' ? '+' : '-'}${Utils.formatCurrency(tx.amount)}
                </div>
            </div>
        `).join('');
    }

    async executeViewScript() {
        const filterSelect = document.getElementById('filterType');

        // Initial render
        this.renderTransactions();

        if (filterSelect) {
            filterSelect.addEventListener('change', (e) => {
                this.renderTransactions(e.target.value);
            });
        }
    }
}
