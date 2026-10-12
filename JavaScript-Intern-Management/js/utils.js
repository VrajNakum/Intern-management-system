/**
 * Utility Helper Functions
 */
const Utils = {
    formatDate(dateString) {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    },
    
    calculatePercentage(value, total) {
        if (!total || total === 0) return 0;
        return Math.round((value / total) * 100);
    },

    generateId() {
        return 'id_' + Math.random().toString(36).substr(2, 9);
    }
};