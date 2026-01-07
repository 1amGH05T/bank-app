import { Utils } from './utils.js';

class Store {
    constructor() {
        this.state = {
            currentUser: JSON.parse(localStorage.getItem('novabank_user')) || null,
            users: JSON.parse(localStorage.getItem('novabank_users')) || [], // Mock database of users
        };
    }

    // Initialize with some mock data if empty
    init() {
        if (this.state.users.length === 0) {
            this.seedData();
        }
    }

    seedData() {
        const mockUser = {
            id: 'user_123',
            name: 'Alex Johnson',
            email: 'alex@example.com',
            password: 'password123', // In a real app, this would be hashed
            balance: 5432.10,
            accountNumber: 'NB-78901234',
            transactions: [
                { id: 'tx_1', type: 'credit', amount: 2500.00, description: 'Salary Deposit', date: new Date(Date.now() - 86400000 * 2).toISOString(), status: 'completed' },
                { id: 'tx_2', type: 'debit', amount: 45.99, description: 'Grocery Store', date: new Date(Date.now() - 86400000 * 1).toISOString(), status: 'completed' },
                { id: 'tx_3', type: 'debit', amount: 120.00, description: 'Electric Bill', date: new Date(Date.now() - 3600000 * 5).toISOString(), status: 'completed' }
            ]
        };
        this.state.users.push(mockUser);
        this.saveUsers();
    }

    saveUsers() {
        localStorage.setItem('novabank_users', JSON.stringify(this.state.users));
    }

    saveCurrentUser() {
        localStorage.setItem('novabank_user', JSON.stringify(this.state.currentUser));
    }

    // Auth Actions
    async login(email, password) {
        await Utils.delay(800); // Simulate network delay
        const user = this.state.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.state.currentUser = user;
            this.saveCurrentUser();
            return { success: true };
        }
        return { success: false, message: 'Invalid credentials' };
    }

    async register(name, email, password) {
        await Utils.delay(1000);
        if (this.state.users.find(u => u.email === email)) {
            return { success: false, message: 'Email already exists' };
        }

        const newUser = {
            id: Utils.generateId(),
            name,
            email,
            password,
            balance: 1000.00, // Sign up bonus
            accountNumber: `NB-${Math.floor(10000000 + Math.random() * 90000000)}`,
            transactions: [
                { id: Utils.generateId(), type: 'credit', amount: 1000.00, description: 'Welcome Bonus', date: new Date().toISOString(), status: 'completed' }
            ]
        };

        this.state.users.push(newUser);
        this.saveUsers();
        this.state.currentUser = newUser;
        this.saveCurrentUser();
        return { success: true };
    }

    logout() {
        this.state.currentUser = null;
        localStorage.removeItem('novabank_user');
    }

    isAuthenticated() {
        return !!this.state.currentUser;
    }

    getCurrentUser() {
        // Refresh from local storage to get latest state
        return JSON.parse(localStorage.getItem('novabank_user'));
    }

    // Transaction Actions
    async transfer(recipientEmail, amount) {
        await Utils.delay(1000);
        amount = parseFloat(amount);

        // Reload current user to ensure balance is up to date
        const currentUser = this.state.users.find(u => u.id === this.state.currentUser.id);

        if (currentUser.balance < amount) {
            return { success: false, message: 'Insufficient funds' };
        }

        const recipient = this.state.users.find(u => u.email === recipientEmail);
        if (!recipient) {
            return { success: false, message: 'Recipient not found' };
        }

        if (recipient.id === currentUser.id) {
            return { success: false, message: 'Cannot transfer to yourself' };
        }

        // Perform Transfer
        currentUser.balance -= amount;
        currentUser.transactions.unshift({
            id: Utils.generateId(),
            type: 'debit',
            amount: amount,
            description: `Transfer to ${recipient.name}`,
            date: new Date().toISOString(),
            status: 'completed'
        });

        recipient.balance += amount;
        recipient.transactions.unshift({
            id: Utils.generateId(),
            type: 'credit',
            amount: amount,
            description: `Transfer from ${currentUser.name}`,
            date: new Date().toISOString(),
            status: 'completed'
        });

        this.saveUsers();

        // Update session
        this.state.currentUser = currentUser;
        this.saveCurrentUser();

        return { success: true };
    }
}

export const appStore = new Store();
