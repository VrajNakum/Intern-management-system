/**
 * Attendance Tracking Logic
 */
function renderAttendanceList() {
    const interns = Storage.get('interns_data');
    const container = document.getElementById('attendanceList');
    if (!container) return;

    container.innerHTML = interns.map(i => `
        <div class="flex justify-between items-center bg-slate-900 p-3 rounded-lg border border-slate-700/50">
            <span class="font-medium text-slate-200">${i.name}</span>
            <div class="flex gap-2">
                <button class="px-3 py-1 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded text-xs">Present</button>
                <button class="px-3 py-1 bg-rose-600/20 text-rose-400 border border-rose-500/30 rounded text-xs">Absent</button>
            </div>
        </div>
    `).join('');
}
document.addEventListener('DOMContentLoaded', renderAttendanceList);