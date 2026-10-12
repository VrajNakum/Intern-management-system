/**
 * Form Validation Utilities
 */
const Validation = {
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    isNonEmpty(text) {
        return text && text.trim().length > 0;
    }
};