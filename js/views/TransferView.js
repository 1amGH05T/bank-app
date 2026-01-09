import AbstractView from "./AbstractView.js";
import { appStore } from "../store.js";
import { navigateTo } from "../router.js";
import { Utils } from "../utils.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Transfer Funds - NovaBank");
        this.user = appStore.getCurrentUser();
    }

    async getHtml() {
        return `
            <div class="min-h-screen bg-slate-900 flex flex-col text-white">
                <!-- Background Gradients -->
                <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
                </div>

                <!-- Navigation (Simplified) -->
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
                    <div class="max-w-md w-full space-y-8 glass-dark p-8 rounded-2xl shadow-xl border border-white/10">
                        <div>
                            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/30">
                                <ion-icon name="paper-plane-outline" class="text-white text-3xl"></ion-icon>
                            </div>
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
                                Send Money
                            </h2>
                            <p class="mt-2 text-center text-sm text-slate-400">
                                Available Balance: <span class="font-bold text-white">${Utils.formatCurrency(this.user.balance)}</span>
                            </p>
                        </div>
                        
                        <form class="mt-8 space-y-6" id="transferForm">
                            <div class="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label for="recipient-email" class="sr-only">Recipient Email</label>
                                    <input id="recipient-email" name="email" type="email" required class="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Recipient Email">
                                </div>
                                <div>
                                    <label for="amount" class="sr-only">Amount</label>
                                    <div class="relative w-full">
                                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                          <span class="text-slate-400 sm:text-sm">$</span>
                                        </div>
                                        <input type="number" name="amount" id="amount" required min="0.01" step="0.01" class="appearance-none rounded-b-md relative block w-full pl-7 pr-3 py-3 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="0.00">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" id="submitBtn" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition shadow-lg shadow-indigo-500/30">
                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <ion-icon name="send-outline" class="text-indigo-200 group-hover:text-white text-lg transition"></ion-icon>
                                    </span>
                                    Transfer Now
                                </button>
                            </div>
                            <div id="statusMessage" class="hidden text-sm text-center mt-2 p-2 rounded"></div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    async executeViewScript() {
        const form = document.getElementById('transferForm');
        const submitBtn = document.getElementById('submitBtn');
        const statusMessage = document.getElementById('statusMessage');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = form.email.value;
            const amount = form.amount.value;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline shadow-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...`;

            try {
                const result = await appStore.transfer(email, amount);
                if (result.success) {
                    statusMessage.textContent = "Transfer Successful!";
                    statusMessage.className = "text-green-700 bg-green-100 p-2 rounded block mt-4";

                    // Reset form and redirect after short delay
                    form.reset();
                    submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="checkmark-circle-outline" class="text-white text-lg transition"></ion-icon></span> Success`;
                    await Utils.delay(1000);
                    navigateTo('/dashboard');
                } else {
                    statusMessage.textContent = result.message;
                    statusMessage.className = "text-red-700 bg-red-100 p-2 rounded block mt-4";
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="send-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon></span> Transfer Now`;
                }
            } catch (error) {
                console.error(error);
                statusMessage.textContent = "An error occurred";
                statusMessage.className = "text-red-700 bg-red-100 p-2 rounded block mt-4";
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="send-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon></span> Transfer Now`;
            }
        });
    }
}
