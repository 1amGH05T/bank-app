import AbstractView from "./AbstractView.js";
import { appStore } from "../store.js";
import { navigateTo } from "../router.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Register - NovaBank");
    }

    async getHtml() {
        return `
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 glass p-10 rounded-2xl shadow-xl">
                    <div>
                        <a href="/" class="flex justify-center" data-link>
                             <div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <ion-icon name="wallet-outline" class="text-white text-3xl"></ion-icon>
                            </div>
                        </a>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create your account
                        </h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            Already have an account?
                            <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500 transition" data-link>
                                Sign in
                            </a>
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" id="registerForm">
                        <div class="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="name" class="sr-only">Full Name</label>
                                <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none rounded-t-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name">
                            </div>
                            <div>
                                <label for="email-address" class="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                            </div>
                            <div>
                                <label for="password" class="sr-only">Password</label>
                                <input id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none rounded-none rounded-b-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                            </div>
                        </div>

                        <div>
                            <button type="submit" id="submitBtn" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition shadow-lg shadow-indigo-600/30">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <ion-icon name="person-add-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon>
                                </span>
                                Create Account
                            </button>
                        </div>
                         <div id="errorMessage" class="hidden text-red-500 text-sm text-center mt-2 bg-red-50 p-2 rounded"></div>
                    </form>
                </div>
            </div>
        `;
    }

    async executeViewScript() {
        const registerForm = document.getElementById('registerForm');
        const submitBtn = document.getElementById('submitBtn');
        const errorMessage = document.getElementById('errorMessage');

        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = registerForm.name.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline shadow-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Creating account...`;

            try {
                const result = await appStore.register(name, email, password);
                if (result.success) {
                    navigateTo('/dashboard');
                } else {
                    errorMessage.textContent = result.message;
                    errorMessage.classList.remove('hidden');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="person-add-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon></span> Create Account`;
                }
            } catch (error) {
                console.error(error);
                errorMessage.textContent = "An error occurred";
                errorMessage.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span class="absolute left-0 inset-y-0 flex items-center pl-3"><ion-icon name="person-add-outline" class="text-indigo-500 group-hover:text-indigo-400 text-lg transition"></ion-icon></span> Create Account`;
            }
        });
    }
}
