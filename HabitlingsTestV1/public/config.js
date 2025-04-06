// // Import the functions you need from the SDKs you need
// // Import Firebase modules
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase as usual


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAU0gZHjc3nXWJxYR9bB_pmN_x8Bs4ewA",
  authDomain: "habitlingstesterv1.firebaseapp.com",
  projectId: "habitlingstesterv1",
  storageBucket: "habitlingstesterv1.firebasestorage.app",
  messagingSenderId: "1025910282495",
  appId: "1:1025910282495:web:71a6bdbad76541e691d4ca",
  measurementId: "G-MY0P6SYTXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




// Firebase configuration (replace with your Firebase project credentials)


// Initialize Firebase
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

// DOM Elements
const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const projectForm = document.getElementById("projectForm");
const projectsContainer = document.getElementById("projectsContainer");



// Sign in with Google
signInButton.addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User signed in:", result.user);
        signInButton.style.display = "none";
        signOutButton.style.display = "block";
        loadProjects(result.user.uid);
    } catch (error) {
        console.error("Sign-in error:", error);
    }
});

// Sign out function
signOutButton.addEventListener("click", async () => {
    try {
        await signOut(auth);
        console.log("User signed out");
        signInButton.style.display = "block";
        signOutButton.style.display = "none";
        projectsContainer.innerHTML = ""; // Clear projects on sign out
    } catch (error) {
        console.error("Sign-out error:", error);
    }
});

// Form Submission (Save project)
projectForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
        alert("Please sign in first.");
        return;
    }

    // Get input values
    const projectName = document.getElementById("projectName").value;
    const description = document.getElementById("description").value;
    const duration = document.getElementById("duration").value;

    // Save project to Firestore
    try {
        await addDoc(collection(db, "projects"), {
            userId: user.uid,
            projectName,
            description,
            duration
        });
        console.log("Project added!");
        projectForm.reset();
        loadProjects(user.uid);
    } catch (error) {
        console.error("Error adding project:", error);
    }
});

// Load projects for the signed-in user
async function loadProjects(userId) {
    projectsContainer.innerHTML = ""; // Clear previous projects

    const q = query(collection(db, "projects"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const project = doc.data();
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${project.projectName}</h3>
            <p>${project.description}</p>
            <p><strong>Duration:</strong> ${project.duration}</p>
        `;
        projectsContainer.appendChild(card);
    });
}
