/**
 * Assessment Scoring Logic
 */
function renderAssessments() {
    const assessments = Storage.get('assessments_data');
    const container = document.getElementById('assessmentList');
    if(!container) return;
    
    container.innerHTML = assessments.map(a => `
        <div class="p-3 bg-slate-900 rounded my-2 flex justify-between">
            <span>Score: ${a.score}/100</span>
            <span class="text-slate-400">${a.date}</span>
        </div>
    `).join('');
}
document.addEventListener('DOMContentLoaded', renderAssessments);