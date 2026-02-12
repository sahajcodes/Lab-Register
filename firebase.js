import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 👇 Yahan apna config paste karo
const firebaseConfig = {
  apiKey: "AIzaSyBWmTBhmAas8LB6FBSRf2f4yGArygXbvL0",
  authDomain: "digital-lab-stock-regist-c053a.firebaseapp.com",
  projectId: "digital-lab-stock-regist-c053a",
  storageBucket: "digital-lab-stock-regist-c053a.firebasestorage.app",
  messagingSenderId: "647267239813",
  appId: "1:647267239813:web:c094448da45190dcb4a6ec"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app);

// Collection reference
const stockCollection = collection(db, "stock");

// Data add function
window.addItemToDB = async function(lab, item, quantity, remarks) {
    await addDoc(stockCollection, {
        lab,
        item,
        quantity,
        remarks
    });
};

// Data load function
window.loadStock = async function() {

    const snapshot = await getDocs(stockCollection);
    const tableBody = document.querySelector("tbody");

    tableBody.innerHTML = "";

    snapshot.forEach(doc => {
        const data = doc.data();

        tableBody.innerHTML += `
            <tr>
                <td>${data.lab}</td>
                <td>${data.item}</td>
                <td>${data.quantity}</td>
                <td>${data.remarks}</td>
            </tr>
        `;
    });
};
window.filterTable && window.filterTable();

// Auto load on start
loadStock();
window.loginAdmin = function(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("successPopup").style.display = "flex";

setTimeout(() => {
  document.getElementById("successPopup").style.display = "none";
}, 2000);

      document.body.classList.add("admin-mode");
      document.getElementById("loginModal").style.display = "none";
    })
    .catch(() => {
      alert("Wrong Email or Password ❌");
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.body.classList.add("admin-mode");
  } else {
    document.body.classList.remove("admin-mode");
  }
});
