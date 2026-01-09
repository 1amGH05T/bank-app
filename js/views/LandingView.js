import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("NovaBank - Modern Banking for Everyone");
    }

    async getHtml() {
        return `
            <!-- Navigation -->
            <nav class="sticky top-0 z-50 glass-dark border-b border-white/10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <a href="/" class="flex items-center space-x-2" data-link>
                                <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                    <ion-icon name="wallet-outline" class="text-white text-xl"></ion-icon>
                                </div>
                                <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">NovaBank</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="/" class="text-white font-medium transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-indigo-400 after:to-blue-500" data-link>Features</a>
                            <a href="/how-it-works" class="text-slate-300 hover:text-white font-medium transition" data-link>How it Works</a>
                            <a href="/testimonials" class="text-slate-300 hover:text-white font-medium transition" data-link>Testimonials</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="/login" class="text-slate-300 hover:text-white font-medium transition" data-link>Log In</a>
                            <a href="/login" class="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 text-white rounded-full font-medium transition shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5" data-link>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="relative min-h-screen bg-slate-900 overflow-hidden text-white selection:bg-indigo-500/30">
                 <!-- Background Gradients -->
                <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div class="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div class="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
                </div>

                <!-- Hero Section -->
                <div class="relative z-10 pt-20 pb-32">
                     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                                <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span class="block xl:inline">Banking made</span>
                                    <span class="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 animate-gradient-x xl:inline">simple & secure</span>
                                </h1>
                                <p class="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Experience the future of banking with NovaBank. Manage your money, pay bills, and track expenses all in one place with our award-winning digital platform.
                                </p>
                                <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                    <div class="grid grid-cols-2 gap-4">
                                        <a href="/login" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 md:py-4 md:text-lg md:px-10 transition shadow-lg shadow-indigo-500/30" data-link>
                                            Open Account
                                        </a>
                                        <a href="#features" class="w-full flex items-center justify-center px-8 py-3 border border-white/10 text-base font-medium rounded-full text-white bg-white/5 hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition backdrop-blur-sm">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                                <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                    <div class="relative block w-full bg-slate-800/50 rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-6 backdrop-blur-md transform rotate-2 hover:rotate-0 transition duration-500">
                                         <!-- Mockup Content -->
                                        <div class="flex items-center justify-between mb-8">
                                            <div class="h-10 w-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                                                <ion-icon name="card" class="text-xl"></ion-icon>
                                            </div>
                                            <span class="text-sm font-bold text-slate-300 tracking-widest">NOVABANK</span>
                                        </div>
                                        <div class="text-3xl font-bold text-white mb-1">$12,450.00</div>
                                        <div class="text-sm text-slate-500 mb-8">Total Balance</div>
                                        <div class="space-y-4">
                                            <div class="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-white/5 hover:border-white/10 transition">
                                                <div class="flex items-center space-x-4">
                                                    <div class="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                        <ion-icon name="arrow-down"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <div class="text-sm font-medium text-white">Salary Deposit</div>
                                                        <div class="text-xs text-slate-500">Today, 9:00 AM</div>
                                                    </div>
                                                </div>
                                                <div class="text-sm font-bold text-emerald-400">+$2,500.00</div>
                                            </div>
                                            <div class="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-white/5 hover:border-white/10 transition">
                                                <div class="flex items-center space-x-4">
                                                    <div class="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                                                        <ion-icon name="cafe"></ion-icon>
                                                    </div>
                                                    <div>
                                                        <div class="text-sm font-medium text-white">Starbucks</div>
                                                        <div class="text-xs text-slate-500">Yesterday, 8:30 AM</div>
                                                    </div>
                                                </div>
                                                <div class="text-sm font-bold text-white">-$4.50</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Features Section -->
                <div id="features" class="relative py-20 bg-slate-900">
                    <div class="absolute inset-0 bg-slate-800/50 transform skew-y-3 origin-bottom-right"></div>
                    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center mb-16">
                            <h2 class="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                Everything you need to manage your wealth
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
                                Powerful tools to help you save, spend, and invest smarter.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <!-- Feature 1 -->
                            <div class="relative group">
                                 <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                 <div class="relative bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition">
                                     <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
                                     <div class="flex items-center mb-4">
                                         <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg">
                                            <ion-icon name="swap-horizontal-outline" class="text-2xl"></ion-icon>
                                         </div>
                                         <h3 class="ml-4 text-xl font-bold text-white">Fast Transfers</h3>
                                     </div>
                                     <p class="text-slate-400 leading-relaxed">
                                         Send money to anyone, anywhere instantly with zero fees. Our global network ensures your funds arrive in seconds, not days.
                                     </p>
                                 </div>
                            </div>

                            <!-- Feature 2 -->
                            <div class="relative group">
                                 <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                 <div class="relative bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition">
                                     <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                                     <div class="flex items-center mb-4">
                                         <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
                                            <ion-icon name="shield-checkmark-outline" class="text-2xl"></ion-icon>
                                         </div>
                                         <h3 class="ml-4 text-xl font-bold text-white">Secure Banking</h3>
                                     </div>
                                     <p class="text-slate-400 leading-relaxed">
                                         Bank with confidence using our enterprise-grade encryption. Biometric authentication and fraud detection keeping your assets safe 24/7.
                                     </p>
                                 </div>
                            </div>

                             <!-- Feature 3 -->
                            <div class="relative group">
                                 <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                 <div class="relative bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition">
                                     <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
                                     <div class="flex items-center mb-4">
                                         <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                                            <ion-icon name="stats-chart-outline" class="text-2xl"></ion-icon>
                                         </div>
                                         <h3 class="ml-4 text-xl font-bold text-white">Expense Tracking</h3>
                                     </div>
                                     <p class="text-slate-400 leading-relaxed">
                                         Visualize your spending habits with detailed analytics. Set budgets, track categories, and reach your saving goals faster.
                                     </p>
                                 </div>
                            </div>

                             <!-- Feature 4 -->
                            <div class="relative group">
                                 <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                 <div class="relative bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition">
                                     <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
                                     <div class="flex items-center mb-4">
                                         <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
                                            <ion-icon name="phone-portrait-outline" class="text-2xl"></ion-icon>
                                         </div>
                                         <h3 class="ml-4 text-xl font-bold text-white">Mobile First</h3>
                                     </div>
                                     <p class="text-slate-400 leading-relaxed">
                                          Access your account on the go. Our native-feel web app provides a seamless experience across all your devices.
                                     </p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <footer class="bg-slate-900 border-t border-white/10">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h3 class="text-sm font-semibold text-indigo-400 tracking-wider uppercase">Product</h3>
                                <ul class="mt-4 space-y-4">
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Features</a></li>
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Security</a></li>
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Team</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-indigo-400 tracking-wider uppercase">Support</h3>
                                <ul class="mt-4 space-y-4">
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Help Center</a></li>
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Contact Us</a></li>
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Status</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-sm font-semibold text-indigo-400 tracking-wider uppercase">Legal</h3>
                                <ul class="mt-4 space-y-4">
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Privacy</a></li>
                                    <li><a href="#" class="text-base text-slate-400 hover:text-white transition">Terms</a></li>
                                </ul>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <h3 class="text-sm font-semibold text-indigo-400 tracking-wider uppercase">Newsletter</h3>
                                <p class="mt-4 text-base text-slate-400">
                                    The latest news, articles, and resources, sent to your inbox weekly.
                                </p>
                            </div>
                        </div>
                        <div class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                            <p class="text-base text-slate-500">
                                &copy; 2026 NovaBank, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        `;
    }
}
