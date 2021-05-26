// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDw4sHWyPhkEGhniDh9S-zDyNljJE2ZAFc",
    authDomain: "nonrox-2.firebaseapp.com",
    databaseURL: "https://nonrox-2-default-rtdb.firebaseio.com",
    projectId: "nonrox-2",
    storageBucket: "nonrox-2.appspot.com",
    messagingSenderId: "944147559503",
    appId: "1:944147559503:web:e7528bb29d90068e0f263a",
    measurementId: "G-09QGQXK7P5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging()

  // subscribe
  function subscribe(){
        Notification.requestPermission().then(permission=>{
          console.log(permission)
          if(permission == "granted"){
              messaging.getToken({vapidKey:"BGedTpHFyrb9VdM1g75QfRYo2-qyZZ7SEQDmoIBoWmRAlEcGz5UZVSrPq-HtCSnl3oeyLzkk27WFxUY6qIugVYs"}).then(currentToken=>{
                  console.log(currentToken)
                  document.getElementById('showToken').innerHTML = currentToken

              })
          }
        }).catch(e=>{
            console.log(e)
        })
  }

  messaging.onMessage(res=>{
      console.log(res)
  })

  // send Notofication
  function sendNotification(){
      // Get data
      const token = document.getElementById('usertoken').value 
      const title = document.getElementById('title').value
      const msg = document.getElementById('msg').value

      let body = {
          to: token,
          notification:{
              title: title,
              body: msg,
              icon:'icon.png',
              click_action:"https://vrijraj.xyz/"
          }
      }
      console.log(body)

      const options = {
          method: "POST",
          headers: new Headers({
            Authorization:"key=AAAA29OUdE8:APA91bFN-aVpkmBzDonib3vggRvBUwSukqFLMMZaXjYeNuf_wJLbmNXLxqthxAhu2GTrWj_ov1TedZtJz33kgDhyyRpopN8vlmwSMkrlnyw1SD-GxflbQ0o6zhsGNQB8FZAXgc6Wj0eE",
            "Content-Type":"application/json"
          }),
          body:JSON.stringify(body)
      }

      fetch("https://fcm.googleapis.com/fcm/send", options).then(res=>res.json()).then(data=>{
            console.log(data)
      }).catch(e=>console.log(e))

  }
