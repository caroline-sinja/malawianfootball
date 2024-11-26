
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";  
        import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";  
        
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
       
        const firebaseConfig = {
          apiKey: "AIzaSyD3wZ3ZkgQcASIqpbE6C03eshCmNAPmBV4",
          authDomain: "malawi-football-2024-ddc16.firebaseapp.com",
          projectId: "malawi-football-2024-ddc16",
          storageBucket: "malawi-football-2024-ddc16.firebasestorage.app",
          messagingSenderId: "107249929156",
          appId: "1:107249929156:web:3df03cd1ec7d128d497291",
          measurementId: "G-E2HGPYVCY3"
        };
        
       
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);
        const db = getFirestore(app);
      
      export {auth, db};