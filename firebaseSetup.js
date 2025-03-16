// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeGTjdxiphy0SkpsawM_lyhYMjL2CRfDg",
    authDomain: "f1visitorstracking.firebaseapp.com",
    projectId: "f1visitorstracking",
    storageBucket: "f1visitorstracking.appspot.com",
    messagingSenderId: "356567032802",
    appId: "1:356567032802:web:80849a6885374f5ca68fbb"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to Store Visitor Data
async function storeVisitorData() {
    try {
        const userAgent = navigator.userAgent;
        const visitTime = new Date().toISOString();
        
        let ipAddress = "Unknown IP"; // Default IP if API fails

        try {
            // Fetch public IP with a timeout (5 seconds)
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 5000); 
            
            const ipResponse = await fetch('https://api64.ipify.org?format=json', { signal: controller.signal });
            clearTimeout(timeout);

            const ipData = await ipResponse.json();
            ipAddress = ipData.ip;
        } catch (error) {
            console.warn("Failed to fetch IP:", error);
        }

        // Store visitor data in Firestore
        await addDoc(collection(db, "visitors"), {
            ip: ipAddress,
            userAgent: userAgent,
            timestamp: visitTime
        });

        console.log("Visitor data stored successfully!");
    } catch (error) {
        console.error("Error storing visitor data:", error);
    }
}

// Call function when page loads
storeVisitorData();
