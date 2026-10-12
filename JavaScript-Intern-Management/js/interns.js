/**
 * Intern Directory Operations
 */
function renderInternsTable() {
    const interns = Storage.get('interns_data');
    const tbody = document.getElementById('internsTableBody');
    if (!tbody) return;

    tbody.innerHTML = interns.map(i => `
        <tr class="hover:bg-slate-700/30">
            <td class="py-3 px-4 font-medium text-white">${i.name}</td>
            <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${i.track}</span></td>
            <td class="py-3 px-4">${i.mentor}</td>
            <td class="py-3 px-4">${Utils.formatDate(i.startDate)}</td>
            <td class="py-3 px-4 text-center">
                <button class="text-slate-400 hover:text-white"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </td>
        </tr>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderInternsTable);