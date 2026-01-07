import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("NovaBank - Modern Banking for Everyone");
    }

    async getHtml() {
        return `
            <!-- Navigation -->
            <nav class="sticky top-0 z-50 glass border-b border-gray-200">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <a href="/" class="flex items-center space-x-2" data-link>
                                <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <ion-icon name="wallet-outline" class="text-white text-xl"></ion-icon>
                                </div>
                                <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">NovaBank</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="#features" class="text-gray-600 hover:text-indigo-600 font-medium transition">Features</a>
                            <a href="#how-it-works" class="text-gray-600 hover:text-indigo-600 font-medium transition">How it Works</a>
                            <a href="#testimonials" class="text-gray-600 hover:text-indigo-600 font-medium transition">Testimonials</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="/login" class="text-gray-600 hover:text-indigo-600 font-medium transition" data-link>Log In</a>
                            <a href="/login" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40" data-link>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <div class="relative overflow-hidden bg-white">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div class="sm:text-center lg:text-left">
                                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span class="block xl:inline">Banking made</span>
                                    <span class="block text-indigo-600 xl:inline">simple & secure</span>
                                </h1>
                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Experience the future of banking with NovaBank. Manage your money, pay bills, and track expenses all in one place with our award-winning digital platform.
                                </p>
                                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div class="rounded-md shadow">
                                        <a href="/login" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition" data-link>
                                            Open Account
                                        </a>
                                    </div>
                                    <div class="mt-3 sm:mt-0 sm:ml-3">
                                        <a href="#features" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
                    <div class="w-full h-96 lg:h-full relative overflow-hidden">
                        <!-- Abstract decorative shapes -->
                         <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                         <div class="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                         <div class="absolute bottom-1/4 right-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                         
                         <!-- Mockup container -->
                         <div class="relative z-10 w-full h-full flex items-center justify-center p-8">
                            <div class="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 w-80 transform rotate-[-5deg] hover:rotate-0 transition duration-500">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                                        <ion-icon name="card"></ion-icon>
                                    </div>
                                    <span class="text-sm font-bold text-gray-800">NovaBank</span>
                                </div>
                                <div class="text-2xl font-bold text-gray-900 mb-1">$12,450.00</div>
                                <div class="text-xs text-gray-500 mb-6">Total Balance</div>
                                <div class="space-y-3">
                                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                <ion-icon name="arrow-down"></ion-icon>
                                            </div>
                                            <div>
                                                <div class="text-sm font-medium text-gray-900">Salary</div>
                                                <div class="text-xs text-gray-500">Today</div>
                                            </div>
                                        </div>
                                        <div class="text-sm font-bold text-green-600">+$2,500</div>
                                    </div>
                                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                                <ion-icon name="cafe"></ion-icon>
                                            </div>
                                            <div>
                                                <div class="text-sm font-medium text-gray-900">Coffee Shop</div>
                                                <div class="text-xs text-gray-500">Yesterday</div>
                                            </div>
                                        </div>
                                        <div class="text-sm font-bold text-gray-900">-$4.50</div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            <!-- Features Section -->
            <div id="features" class="py-12 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to manage your wealth
                        </p>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Powerful tools to help you save, spend, and invest smarter.
                        </p>
                    </div>

                    <div class="mt-10">
                        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ion-icon name="swap-horizontal-outline" class="text-2xl"></ion-icon>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Fast Transfers</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Send money to anyone, anywhere instantly with zero fees.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ion-icon name="shield-checkmark-outline" class="text-2xl"></ion-icon>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Banking</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Bank with confidence using our enterprise-grade encryption and security.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ion-icon name="stats-chart-outline" class="text-2xl"></ion-icon>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Expense Tracking</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Visualize your spending habits with detailed analytics and reports.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <ion-icon name="phone-portrait-outline" class="text-2xl"></ion-icon>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile First</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Access your account on the go with our fully responsive mobile design.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <footer class="bg-gray-800 text-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 filter hover:brightness-110 transition">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Features</a></li>
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Security</a></li>
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Team</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Help Center</a></li>
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Contact Us</a></li>
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                            <ul class="mt-4 space-y-4">
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Privacy</a></li>
                                <li><a href="#" class="text-base text-gray-300 hover:text-white">Terms</a></li>
                            </ul>
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Newsletter</h3>
                            <p class="mt-4 text-base text-gray-300">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </p>
                        </div>
                    </div>
                    <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                        <div class="flex space-x-6 md:order-2">
                             <!-- Social icons placeholder -->
                        </div>
                        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                            &copy; 2026 NovaBank, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }
}
