// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
//import { collection, getFirestore, addDoc, getDocs, onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOlkR26ROtL9isCuvIgqOrCbo4ifhNeJA",
  authDomain: "crud-543f2.firebaseapp.com",
  projectId: "crud-543f2",
  storageBucket: "crud-543f2.appspot.com",
  messagingSenderId: "31213581685",
  appId: "1:31213581685:web:6cd86650cb0d90381e0f3c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase();

export const getPagos = () =>{
    const contenedodr = document.getElementById("lista")
    let html = '';

    const dbRef = ref(db);
    
    get(child(dbRef, `Pagos/`)).then((snapshot) => {
      snapshot.forEach(doc => {
          console.log(doc.val());
            html += `
              <table class="table table-striped mt-5">
                  <thead >
                      <tr>
                          <td id="vclaro" class="text-center">${doc.val().Nombre}</td>
                          <td id="voscuro" class="text-center">${doc.val().transaccion}</td>
                          <td id="vclaro" class="text-center">${doc.val().Caja}</td>
                          <td id="voscuro"class="text-center">ARS ${doc.val().Monto}</td>
                          <td id="vclaro" class="text-center">${doc.val().USDT}</td>
                      </tr>
                  </thead>
              </table>    
              `
              contenedodr.innerHTML=html;
      });
    }).catch((error) => {
      console.error(error);
    });
    
  }