// ========================================
// FIREBASE INTEGRATION PLACEHOLDER
// ========================================

/*
    This file is ready for Firebase integration.
    
    STEPS TO INTEGRATE:
    
    1. ADD FIREBASE IMPORTS at the top:
       import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
       import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
    
    2. ADD YOUR FIREBASE CONFIG:
       const firebaseConfig = {
           apiKey: "AIzaSyBWmTBhmAas8LB6FBSRf2f4yGArygXbvL0",
           authDomain: "digital-lab-stock-regist-c053a.firebaseapp.com",
           projectId: "digital-lab-stock-regist-c053a",
           storageBucket: "digital-lab-stock-regist-c053a.firebasestorage.app",
           messagingSenderId: "647267239813",
           appId: "1:647267239813:web:c094448da45190dcb4a6ec"
       };
    
    3. INITIALIZE FIREBASE:
       const app = initializeApp(firebaseConfig);
       const db = getFirestore(app);
    
    4. UNCOMMENT THE FUNCTION BELOW and customize as needed
    
    5. UNCOMMENT THE EVENT LISTENER at the bottom
    
    6. In index.html, uncomment the <script> tag that loads this file
*/


// ========================================
// FUNCTION TO LOAD EQUIPMENT DATA
// ========================================

/*
async function loadEquipmentData() {
    
    // Get references to HTML elements
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const tableBody = document.getElementById('equipmentTableBody');
    const refreshTimeSpan = document.getElementById('refreshTime');
    
    try {
        // Show loading, hide error
        loadingDiv.style.display = 'block';
        errorDiv.style.display = 'none';
        
        // Get the 'equipments' collection from Firestore
        const equipmentsCollection = collection(db, 'equipments');
        
        // Fetch all documents
        const querySnapshot = await getDocs(equipmentsCollection);
        
        // Clear existing table rows
        tableBody.innerHTML = '';
        
        // Check if we have data
        if (querySnapshot.empty) {
            tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px; color: #7f8c8d;">No equipment data available</td></tr>';
            loadingDiv.style.display = 'none';
            return;
        }
        
        // Loop through each document and create rows
        querySnapshot.forEach((doc) => {
            const equipment = doc.data();
            
            // Create row
            const row = document.createElement('tr');
            
            // Equipment Name
            const nameCell = document.createElement('td');
            nameCell.textContent = equipment.name || 'N/A';
            row.appendChild(nameCell);
            
            // Lab
            const labCell = document.createElement('td');
            labCell.textContent = equipment.lab || 'N/A';
            row.appendChild(labCell);
            
            // Quantity
            const quantityCell = document.createElement('td');
            quantityCell.textContent = equipment.quantity !== undefined ? equipment.quantity : 'N/A';
            quantityCell.style.textAlign = 'center';
            row.appendChild(quantityCell);
            
            // Condition (with color coding)
            const conditionCell = document.createElement('td');
            conditionCell.textContent = equipment.condition || 'N/A';
            
            // Add color based on condition
            const conditionLower = (equipment.condition || '').toLowerCase();
            if (conditionLower === 'good' || conditionLower === 'excellent') {
                conditionCell.className = 'condition-good';
            } else if (conditionLower === 'fair' || conditionLower === 'working') {
                conditionCell.className = 'condition-fair';
            } else if (conditionLower === 'poor' || conditionLower === 'damaged') {
                conditionCell.className = 'condition-poor';
            }
            row.appendChild(conditionCell);
            
            // Last Updated
            const lastUpdatedCell = document.createElement('td');
            lastUpdatedCell.textContent = equipment.lastUpdated || 'N/A';
            row.appendChild(lastUpdatedCell);
            
            // Add row to table
            tableBody.appendChild(row);
        });
        
        // Hide loading
        loadingDiv.style.display = 'none';
        
        // Update refresh time
        const now = new Date();
        refreshTimeSpan.textContent = now.toLocaleString();
        
    } catch (error) {
        console.error('Error loading equipment data:', error);
        
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Error loading equipment data. Please refresh the page.';
    }
}
*/


// ========================================
// RUN WHEN PAGE LOADS
// ========================================

/*
window.addEventListener('DOMContentLoaded', () => {
    loadEquipmentData();
});
*/


// ========================================
// OPTIONAL: AUTO-REFRESH
// ========================================

// Uncomment to refresh data every 5 minutes
/*
setInterval(() => {
    loadEquipmentData();
}, 300000); // 5 minutes
*/