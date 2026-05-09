const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3 , video4];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

// 1. معالجة إرسال الفورم ومنع الـ Refresh
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault(); // بيمنع الصفحة إنها تعمل Reload
        sendToWhatsapp();
    });
}

// 2. ميزة الانتقال للحقل التالي عند الضغط على Enter
const inputs = whatsappForm.querySelectorAll('input, textarea');
inputs.forEach((input, index) => {
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        }
    });
});

// 3. دالة الإرسال المصلحة
function sendToWhatsapp() {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let message = document.getElementById('userMessage').value;

    // الرقم لازم يكون بدون + وبدون أصفار زيادة في الأول للينك wa.me
    let phoneNumber = "201117024184"; 

    let finalMessage = `السلام عليكم،
أنا: ${name}
إيميلي: ${email}
الرسالة: ${message}`;

    // اللينك الصحيح (تم حذف التكرار)
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(finalMessage);

    window.open(url, '_blank').focus();
}