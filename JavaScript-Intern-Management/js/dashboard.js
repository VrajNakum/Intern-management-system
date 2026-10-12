/**
 * Dashboard Overview Stats Calculation Engine
 */
function loadDashboardStats() {
    const interns = Storage.get('interns_data', []);
    const tasks = Storage.get('tasks_data', []);
    const assessments = Storage.get('assessments_data', []);

    document.getElementById('statTotalInterns').textContent = interns.length;
    document.getElementById('statAvgAttendance').textContent = '94%';
    
    const avgScore = assessments.length ? Math.round(assessments.reduce((a,b) => a + b.score, 0) / assessments.length) : 88;
    document.getElementById('statAvgScore').textContent = `${avgScore} / 100`;
    document.getElementById('statActiveTasks').textContent = tasks.length;
}
document.addEventListener('DOMContentLoaded', loadDashboardStats);