export const Utils = {
    // Format currency to USD
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    },

    // Format date
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    },

    // Simple delay for simulating network requests
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // Generate random ID
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
};
