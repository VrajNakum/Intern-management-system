/**
 * Main Application Bootstrapper
 */
document.addEventListener('DOMContentLoaded', async () => {
    await API.initializeData();
    console.log('InternTrack Pro App Initialized.');
});