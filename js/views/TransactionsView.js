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

                <div class="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-gray-900">Transaction History</h2>
                        <div class="flex space-x-2">
                            <select id="filterType" class="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="all">All Transactions</option>
                                <option value="credit">Income Only</option>
                                <option value="debit">Expenses Only</option>
                            </select>
                        </div>
                    </div>

                    <div class="bg-white shadow rounded-lg overflow-hidden p-6" id="transactionsList">
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
            list.innerHTML = '<div class="text-center text-gray-500 py-12">No transactions found</div>';
            return;
        }

        list.innerHTML = filtered.map(tx => `
            <div class="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition mb-3 animate-fade-in">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}">
                        <ion-icon name="${tx.type === 'credit' ? 'arrow-down-outline' : 'arrow-up-outline'}" class="text-xl"></ion-icon>
                    </div>
                    <div>
                        <div class="text-sm font-bold text-gray-900">${tx.description}</div>
                        <div class="text-xs text-gray-500">${Utils.formatDate(tx.date)}</div>
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${tx.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                            ${tx.status}
                        </span>
                    </div>
                </div>
                <div class="text-sm font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-gray-900'}">
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
