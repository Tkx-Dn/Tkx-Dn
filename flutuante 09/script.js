document.getElementById("btnNotif").addEventListener("click", function () {


    const notif = document.createElement("div");
    notif.classList.add("notification");
    notif.textContent = "Esta é uma notificação!";


    const container = document.getElementById("notification-container");
    container.appendChild(notif);


    setTimeout(() => {
        notif.classList.add("show");
    }, 10);


    setTimeout(() => {
        notif.classList.add("hide");


        setTimeout(() => {
            notif.remove();
        }, 400); 
    }, 3000);

});
