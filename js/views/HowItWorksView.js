import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("How It Works - NovaBank");
    }

    async getHtml() {
        return `
            <!-- Navigation -->
            <nav class="sticky top-0 z-50 glass-dark border-b border-white/10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <a href="/" class="flex items-center space-x-2" data-link>
                                <div class="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                    <ion-icon name="wallet-outline" class="text-white text-xl"></ion-icon>
                                </div>
                                <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">NovaBank</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="/" class="text-slate-300 hover:text-white font-medium transition duration-300" data-link>Home</a>
                            <a href="/how-it-works" class="text-white font-medium transition duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-400 after:to-cyan-500" data-link>How it Works</a>
                            <a href="/testimonials" class="text-slate-300 hover:text-white font-medium transition duration-300" data-link>Testimonials</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="/login" class="text-slate-300 hover:text-white font-medium transition duration-300" data-link>Log In</a>
                            <a href="/register" class="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white rounded-full font-medium transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-0.5" data-link>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="relative min-h-screen bg-slate-900 overflow-hidden text-white selection:bg-emerald-500/30">
                <!-- Background Gradients -->
                <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
                    <div class="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 4s;"></div>
                </div>

                <!-- Hero Section -->
                <div class="relative z-10 pt-20 pb-32">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-gradient-x">
                                Mastering Your Finances
                            </span>
                            <br />
                            <span class="text-white text-4xl md:text-6xl mt-2 block">The NovaBank Ecosystem</span>
                        </h1>
                        <p class="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed">
                            Welcome to a comprehensive guide on navigating the NovaBank platform. We've engineered a seamless financial experience that blends cutting-edge security with intuitive design. Dive deep into how our systems work to empower your economic freedom.
                        </p>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-24">
                    
                    <!-- Section 1: The Foundation -->
                    <div class="relative group">
                        <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-slate-800/50 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-8 md:p-12 hover:bg-slate-800/70 transition duration-500">
                            <div class="flex flex-col md:flex-row gap-12 items-start">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-3xl text-white shadow-xl shadow-emerald-500/20">
                                        <ion-icon name="finger-print-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h2 class="text-3xl font-bold text-white mb-6">1. Identity & Security Architecture</h2>
                                    <div class="space-y-6 text-slate-300 leading-relaxed">
                                        <p>
                                            At the core of NovaBank lies our proprietary Identity Verification System (IVS). When you first sign up, you're not just creating an account; you're establishing a secure digital identity vault. Our process begins with a multi-layered encryption protocol that secures your personal data the moment it enters our system.
                                        </p>
                                        <p>
                                            We utilize AES-256 bit encryption for data at rest and TLS 1.3 for data in transit. But we go further. Our biometric authentication integration allows you to use fingerprint or facial recognition on supported devices, creating a passwordless entry point that is significantly harder to compromise than traditional credentials.
                                        </p>
                                        <ul class="space-y-3 mt-4">
                                            <li class="flex items-center space-x-3">
                                                <ion-icon name="checkmark-circle" class="text-emerald-400 text-xl"></ion-icon>
                                                <span>Zero-knowledge proofs for password verification</span>
                                            </li>
                                            <li class="flex items-center space-x-3">
                                                <ion-icon name="checkmark-circle" class="text-emerald-400 text-xl"></ion-icon>
                                                <span>Real-time anomaly detection using machine learning</span>
                                            </li>
                                            <li class="flex items-center space-x-3">
                                                <ion-icon name="checkmark-circle" class="text-emerald-400 text-xl"></ion-icon>
                                                <span>Device fingerprinting to prevent unauthorized access</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section 2: The Transaction Engine -->
                    <div class="relative group">
                        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-slate-800/50 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-8 md:p-12 hover:bg-slate-800/70 transition duration-500">
                            <div class="flex flex-col md:flex-row-reverse gap-12 items-start">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl text-white shadow-xl shadow-blue-500/20">
                                        <ion-icon name="sync-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h2 class="text-3xl font-bold text-white mb-6">2. The Real-Time Transaction Engine</h2>
                                    <div class="space-y-6 text-slate-300 leading-relaxed">
                                        <p>
                                            Moving money should be as fluid as sending a text message. Our Real-Time Transaction Engine (RTTE) is built on an event-driven microservices architecture. This means that when you initiate a transfer, dozens of independent services work in parallel to validate, route, and confirm your transaction in milliseconds.
                                        </p>
                                        <p>
                                            Most traditional banks rely on batch processing, which is why transfers often take days. NovaBank bypasses legacy networks where possible, utilizing direct peer-to-peer relationships and modern clearing houses to ensure your funds settle instantly. Whether you're paying a friend for dinner or settling a business invoice across the globe, the experience is uniform and instantaneous.
                                        </p>
                                        <div class="bg-slate-900/50 rounded-xl p-6 border border-white/5 mt-6">
                                            <h4 class="text-lg font-semibold text-blue-400 mb-2">Technical Insight</h4>
                                            <p class="text-sm text-slate-400">
                                                Our ledger is immutable. Every transaction is cryptographically linked to the previous one, creating an unbreakable chain of custody for your funds. This prevents "double-spending" attacks and ensures your balance is always mathematically periodic.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Smart Wallets -->
                    <div class="relative group">
                        <div class="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-slate-800/50 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-8 md:p-12 hover:bg-slate-800/70 transition duration-500">
                            <div class="flex flex-col md:flex-row gap-12 items-start">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-3xl text-white shadow-xl shadow-orange-500/20">
                                        <ion-icon name="wallet-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h2 class="text-3xl font-bold text-white mb-6">3. Smart Wallets & Automated Savings</h2>
                                    <div class="space-y-6 text-slate-300 leading-relaxed">
                                        <p>
                                            Your NovaBank account isn't just a bucket for money; it's a Smart Wallet. We allow you to create sub-accounts instantly, which we call "Pockets". Pockets can be used for specific savings goals, like a vacation, a new car, or an emergency fund.
                                        </p>
                                        <p>
                                            The magic happens with our Automation Rules. You can configure your Smart Wallet to automatically divert a percentage of every incoming deposit into specific Pockets. Or, use our "Round Up" feature, which rounds every debit card purchase to the nearest dollar and deposits the difference into your savings. It's painless saving that accumulates rapidly over time.
                                        </p>
                                        <p>
                                            Furthermore, our predictive algorithms analyze your spending habits to suggest safe-to-spend limits. This "available to spend" metric is dynamic, adjusting based on your upcoming recurring bills (like rent or detailed subscriptions) which our system automatically identifies and sets aside funds for.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <!-- Section 4: Global Access -->
                     <div class="relative group">
                        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-slate-800/50 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-8 md:p-12 hover:bg-slate-800/70 transition duration-500">
                            <div class="flex flex-col md:flex-row-reverse gap-12 items-start">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-3xl text-white shadow-xl shadow-indigo-500/20">
                                        <ion-icon name="globe-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h2 class="text-3xl font-bold text-white mb-6">4. Global Access Without Borders</h2>
                                    <div class="space-y-6 text-slate-300 leading-relaxed">
                                        <p>
                                            In an increasingly connected world, your money shouldn't be landlocked. NovaBank provides true borderless banking. Our multi-currency support allows you to hold, exchange, and send over 30 different currencies directly from your dashboard.
                                        </p>
                                        <p>
                                            We utilize the interbank exchange rate—the real rate that banks trade at—and charge a transparent, minimal fee (typically 0.5%) for conversions. This is a fraction of what traditional banks charge with their hidden markups.
                                        </p>
                                        <p>
                                            When traveling, use your NovaBank physical or virtual card anywhere Visa is accepted. The card automatically detects the local currency and pulls from the appropriate balance. If you don't hold that currency, it auto-converts at the moment of transaction with the best available rate, ensuring you never have to worry about forex complexities again.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Call to Action -->
                <div class="relative z-10 text-center pb-20">
                    <h2 class="text-3xl font-bold text-white mb-8">Ready to experience the future?</h2>
                    <a href="/register" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white rounded-full font-bold text-lg transition duration-300 shadow-xl shadow-cyan-500/30 transform hover:-translate-y-1 hover:scale-105" data-link>
                        Create Your Free Account
                        <ion-icon name="arrow-forward" class="ml-2"></ion-icon>
                    </a>
                </div>

                <!-- Footer (Simple version for this page) -->
                <footer class="relative z-10 border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
                    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
                        <p>&copy; 2026 NovaBank, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        `;
    }
}
