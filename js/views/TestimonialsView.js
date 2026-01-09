import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Testimonials - NovaBank");
    }

    async getHtml() {
        // Generating some placeholder avatars to avoid broken images, using UI Avatars
        const getAvatar = (name) => `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;

        return `
            <!-- Navigation -->
            <nav class="sticky top-0 z-50 glass-dark border-b border-white/10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <a href="/" class="flex items-center space-x-2" data-link>
                                <div class="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/20">
                                    <ion-icon name="wallet-outline" class="text-white text-xl"></ion-icon>
                                </div>
                                <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">NovaBank</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="/" class="text-slate-300 hover:text-white font-medium transition duration-300" data-link>Home</a>
                            <a href="/how-it-works" class="text-slate-300 hover:text-white font-medium transition duration-300 relative" data-link>How it Works</a>
                            <a href="/testimonials" class="text-white font-medium transition duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-rose-500" data-link>Testimonials</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <a href="/login" class="text-slate-300 hover:text-white font-medium transition duration-300" data-link>Log In</a>
                            <a href="/register" class="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white rounded-full font-medium transition duration-300 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transform hover:-translate-y-0.5" data-link>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="relative min-h-screen bg-slate-900 overflow-hidden text-white selection:bg-pink-500/30">
                <!-- Background Gradients -->
                <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div class="absolute top-[-20%] right-[0%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
                    <div class="absolute top-[30%] left-[40%] w-[20%] h-[20%] bg-purple-600/10 rounded-full blur-[80px] animate-pulse-slow" style="animation-delay: 4s;"></div>
                </div>

                <!-- Hero Section -->
                <div class="relative z-10 pt-20 pb-20">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                            <span class="text-pink-400 text-sm font-semibold tracking-wide uppercase">Community Voices</span>
                        </div>
                        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                            Trusted by Millions
                            <br />
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-red-500">
                                Stories of Success
                            </span>
                        </h1>
                        <p class="mt-6 max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed">
                            Don't just take our word for it. Read through the experiences of entrepreneurs, families, and individuals who have transformed their financial lives with NovaBank. We are proud to be the catalyst for their financial freedom.
                        </p>
                    </div>
                </div>

                <!-- Testimonials Grid -->
                <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <!-- Testimonial 1 -->
                        <div class="card-gradient p-8 rounded-3xl border border-white/5 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/60 transition duration-500 group">
                            <div class="flex items-center space-x-1 mb-6">
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                            </div>
                            <p class="text-slate-300 mb-8 leading-relaxed italic">
                                "I used to be terrified of checking my bank account. The hidden fees, the confusing interfaces—it was a nightmare. NovaBank changed everything. The 'Pockets' feature allowed me to visualize my savings for my wedding in a way I never thought possible. I literally watched my dream wedding fund grow penny by penny, round-up by round-up. It's not just a bank app; it's a financial therapist."
                            </p>
                            <div class="flex items-center space-x-4">
                                <img src="${getAvatar('Sarah+Jenkins')}" alt="Sarah Jenkins" class="w-12 h-12 rounded-full ring-2 ring-pink-500/50">
                                <div>
                                    <h4 class="text-white font-bold group-hover:text-pink-400 transition">Sarah Jenkins</h4>
                                    <p class="text-sm text-slate-500">Graphic Designer, New York</p>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div class="card-gradient p-8 rounded-3xl border border-white/5 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/60 transition duration-500 group">
                            <div class="flex items-center space-x-1 mb-6">
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                            </div>
                            <p class="text-slate-300 mb-8 leading-relaxed italic">
                                "As a small business owner, international payments were the bane of my existence. Swift fees were eating into my margins. NovaBank's cross-border payments are a revelation. I pay my suppliers in China and Vietnam instantly, with fees so low they are negligible. The real-time tracking means I never have to awkwardly explain to a supplier that 'the check is in the mail'."
                            </p>
                            <div class="flex items-center space-x-4">
                                <img src="${getAvatar('Michael+Chen')}" alt="Michael Chen" class="w-12 h-12 rounded-full ring-2 ring-pink-500/50">
                                <div>
                                    <h4 class="text-white font-bold group-hover:text-pink-400 transition">Michael Chen</h4>
                                    <p class="text-sm text-slate-500">E-commerce Founder, Seattle</p>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 3 -->
                        <div class="card-gradient p-8 rounded-3xl border border-white/5 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/60 transition duration-500 group">
                            <div class="flex items-center space-x-1 mb-6">
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star-half" class="text-yellow-400 text-lg"></ion-icon>
                            </div>
                            <p class="text-slate-300 mb-8 leading-relaxed italic">
                                "The security features are what sold me. After my identity was compromised with a previous bank, I was paranoid. NovaBank's biometric login and instant transaction notifications give me peace of mind. I know exactly what's happening with my money the second it happens. If there's an unauthorized attempt, the app locks down instantly. It feels like having a personal security guard."
                            </p>
                            <div class="flex items-center space-x-4">
                                <img src="${getAvatar('Elena+Rodriguez')}" alt="Elena Rodriguez" class="w-12 h-12 rounded-full ring-2 ring-pink-500/50">
                                <div>
                                    <h4 class="text-white font-bold group-hover:text-pink-400 transition">Elena Rodriguez</h4>
                                    <p class="text-sm text-slate-500">Cybersecurity Analyst, Austin</p>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 4 (Long) -->
                        <div class="card-gradient p-8 rounded-3xl border border-white/5 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/60 transition duration-500 group lg:col-span-2">
                             <div class="flex items-center space-x-1 mb-6">
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                            </div>
                            <p class="text-slate-300 mb-8 leading-relaxed italic">
                                "I've been banking for over 40 years, and I've seen it all. The shift from physical branches to digital was hard for me. Most apps felt cold and impersonal, or just plain confusing. NovaBank is different. It's intuitive. The interface is beautiful, yes—those gradients are lovely—but more importantly, it makes sense. Everything is where you expect it to be. 
                                <br><br>
                                Last month, I had an issue with a double charge. In the old days, I'd be on hold for an hour. With NovaBank, I used the in-app chat and had it resolved in 3 minutes by a human, not a bot. That level of service is rare. It combines the speed of technology with the empathy of old-school banking. I've moved my entire retirement portfolio over to their managed investment platform because I trust the ecosystem they've built. It's simply superior in every way."
                            </p>
                            <div class="flex items-center space-x-4">
                                <img src="${getAvatar('Robert+Fox')}" alt="Robert Fox" class="w-12 h-12 rounded-full ring-2 ring-pink-500/50">
                                <div>
                                    <h4 class="text-white font-bold group-hover:text-pink-400 transition">Robert Fox</h4>
                                    <p class="text-sm text-slate-500">Retired Architect, Chicago</p>
                                </div>
                            </div>
                        </div>

                         <!-- Testimonial 5 -->
                         <div class="card-gradient p-8 rounded-3xl border border-white/5 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/60 transition duration-500 group">
                            <div class="flex items-center space-x-1 mb-6">
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                                <ion-icon name="star" class="text-yellow-400 text-lg"></ion-icon>
                            </div>
                            <p class="text-slate-300 mb-8 leading-relaxed italic">
                                "The integration with crypto wallets is seamless. I can move from fiat to stablecoins instantly. It's the bridge to Web3 I was looking for."
                            </p>
                            <div class="flex items-center space-x-4">
                                <img src="${getAvatar('David+Kim')}" alt="David Kim" class="w-12 h-12 rounded-full ring-2 ring-pink-500/50">
                                <div>
                                    <h4 class="text-white font-bold group-hover:text-pink-400 transition">David Kim</h4>
                                    <p class="text-sm text-slate-500">Blockchain Developer, SF</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Footer -->
                <footer class="relative z-10 border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 filter hover:brightness-110 transition">
                         <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                             <div>
                                 <h3 class="text-sm font-semibold text-pink-400 tracking-wider uppercase">Company</h3>
                                 <ul class="mt-4 space-y-4 text-slate-400">
                                     <li><a href="#" class="hover:text-white transition">About</a></li>
                                     <li><a href="#" class="hover:text-white transition">Careers</a></li>
                                 </ul>
                             </div>
                              <div>
                                 <h3 class="text-sm font-semibold text-pink-400 tracking-wider uppercase">Resources</h3>
                                 <ul class="mt-4 space-y-4 text-slate-400">
                                     <li><a href="#" class="hover:text-white transition">Blog</a></li>
                                     <li><a href="#" class="hover:text-white transition">Press</a></li>
                                 </ul>
                             </div>
                         </div>
                        <div class="border-t border-white/10 pt-8 text-center text-slate-500">
                            <p>&copy; 2026 NovaBank, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        `;
    }
}
