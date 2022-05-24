// selectors
const aboutVideo = document.querySelector(".about_video")
const lightbox = document.querySelector(".lightbox")
const lightbox_content = document.querySelector(".lightbox_content")

aboutVideo.addEventListener("click", (e) =>{
    lightbox.classList.add("lightbox_show");
});
lightbox.addEventListener("click", (e) =>{;
    lightbox.classList.remove("lightbox_show");
});
lightbox_content.addEventListener("click", (e) =>{;
    e.stopImmediatePropagation();
});


// Notification API


( () =>{
    // Check if browser support notifications
    if (!("Notification" in window) ) alart("Notification API not support")

    // get access to notifications api
    if ( Notification.permission === 'granted') showNotification()
    else
        Notification.requestPermission(permission => {
            if (permission === 'granted') {
                showNotification();
            }else{
                alert("Notification permission denied")
            }
        })

})();
function showNotification() {
    const notifications = new Notification("RESTAURANT" , { 
        body : "Wellcome To The RESTAURANT Site",
        icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eo_circle_light-blue_white_letter-r.svg/1024px-Eo_circle_light-blue_white_letter-r.svg.png"
    })
}





// selectors
const notification_btn = document.querySelector(".notification_btn")
notification_btn.addEventListener("click", showBookNotification)

function showBookNotification() {
    const notifications = new Notification("RESTAURANT" , { 
        body : `"Congratulations" You Book a Table`,
        icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eo_circle_light-blue_white_letter-r.svg/1024px-Eo_circle_light-blue_white_letter-r.svg.png"
    })
}


// nav bar
// selectors
const bar = document.querySelector(".bars")
const close = document.querySelector(".close")
const navadd = document.querySelector(".head_ul_s_close")



bar.addEventListener("click",(e) =>{
    navadd.classList.add("head-ul-s")
})

close.addEventListener("click",(e) =>{
    navadd.classList.remove("head-ul-s")
})