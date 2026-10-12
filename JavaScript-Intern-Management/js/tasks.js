/**
 * Task Allocation Manager
 */
function renderTasks() {
    const tasks = Storage.get('tasks_data');
    const container = document.getElementById('taskList');
    if(!container) return;

    container.innerHTML = tasks.map(t => `
        <div class="bg-slate-800 border border-slate-700 p-4 rounded-xl">
            <h4 class="font-bold text-white">${t.title}</h4>
            <p class="text-xs text-slate-400 mt-1">Status: ${t.status}</p>
        </div>
    `).join('');
}
document.addEventListener('DOMContentLoaded', renderTasks);