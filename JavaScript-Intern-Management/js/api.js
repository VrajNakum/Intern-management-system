/**
 * API Data Initialization Engine
 */
const API = {
    async initializeData() {
        if (!localStorage.getItem('interns_data')) {
            try {
                const response = await fetch('data/sample-data.json');
                const data = await response.json();
                Storage.set('interns_data', data.interns || []);
                Storage.set('attendance_data', data.attendance || []);
                Storage.set('assessments_data', data.assessments || []);
                Storage.set('tasks_data', data.tasks || []);
            } catch(e) {
                console.warn('Sample data fetch failed, fallback initialized.');
            }
        }
    }
};