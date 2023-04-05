// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
//import { collection, getFirestore, addDoc, getDocs, onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6OJiibt1H7db0GoTH7em3CcC_qb7rZ28",
  authDomain: "pagos-e4592.firebaseapp.com",
  projectId: "pagos-e4592",
  storageBucket: "pagos-e4592.appspot.com",
  messagingSenderId: "246023860637",
  appId: "1:246023860637:web:cf875c017c3afb5bdfff74",
  measurementId: "G-Z2WHSCHL5R"
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
          if(doc.val().Caja=="Caja Empresa"){
            html += `
              <table class="table table-striped mt-5">
                  <thead >
                      <tr id="empresa">
                          <td class="text-center">${doc.val().Nombre}</td>
                          <td class="text-center">${doc.val().transaccion}</td>
                          <td class="text-center">${doc.val().Caja}</td>
                          <td class="text-center">ARS ${doc.val().Monto}</td>
                          <td class="text-center">${doc.val().USDT}</td>
                      </tr>
                  </thead>
              </table>    
              `
              contenedodr.innerHTML=html;
            }
            if(doc.val().Caja=="Caja Inmueble"){
              html += `
                <table class="table table-striped mt-5">
                    <thead >
                        <tr id="inmueble">
                            <td class="text-center">${doc.val().Nombre}</td>
                            <td class="text-center">${doc.val().transaccion}</td>
                            <td class="text-center">${doc.val().Caja}</td>
                            <td class="text-center">ARS ${doc.val().Monto}</td>
                            <td class="text-center">${doc.val().USDT}</td>
                        </tr>
                    </thead>
                </table>    
                `
                contenedodr.innerHTML=html;
              }
              if(doc.val().Caja=="Caja País"){
                html += `
                  <table class="table mt-5">
                      <thead >
                          <tr id="pais">
                              <td class="text-center">${doc.val().Nombre}</td>
                              <td class="text-center">${doc.val().transaccion}</td>
                              <td class="text-center">${doc.val().Caja}</td>
                              <td class="text-center">ARS ${doc.val().Monto}</td>
                              <td class="text-center">${doc.val().USDT}</td>
                          </tr>
                      </thead>
                  </table>    
                  `
                  contenedodr.innerHTML=html;
                }

      });
    }).catch((error) => {
      console.error(error);
    });
    
  }