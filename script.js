const navbarNav = document.querySelector('.navbar-nav');
 // Ketika tombol hamburger-menu diklik, lakukan toggle class 'active' pada navbar-var
 document.querySelector('#hamburger-menu').onclick = () =>  {
     navbarNav.classList.toggle('active');
 };

 //Klick di luar sidebar menghilangkan navbar//
 const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


document.querySelectorAll('.Kemampuann-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h4').innerText;
        const description = card.getAttribute('data-description');
        document.getElementById('popup-title').innerText = title;
        document.getElementById('popup-description').innerText = description;
        document.getElementById('popup').style.display = 'block';
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}



  document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".name", {
      strings: ["This is my string!"],
    }).go();
  });

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    const horizontalScroll = document.querySelector('.horizontal-scroll');
    const skillss = document.querySelector('.skillss');

    horizontalScroll.addEventListener('scroll', () => {
        skillss.classList.add('shrink');
        
        // Menambahkan timeout untuk menghapus kelas shrink setelah scrolling berhenti
        clearTimeout(horizontalScroll.scrollTimeout);
        horizontalScroll.scrollTimeout = setTimeout(() => {
            skillss.classList.remove('shrink');
        }, 150); // Durasi dalam milidetik, disesuaikan sesuai kebutuhan
    });

 
            const itemRect = item.getBoundingClientRect();
            const horizontalScrollRect = horizontalScroll.getBoundingClientRect();

            if (itemRect.right < horizontalScrollRect.left || itemRect.left > horizontalScrollRect.right) {
                // Elemen berada di luar tampilan scroll
                item.classList.add('hidden');
            } else {
                // Elemen berada di dalam tampilan scroll
                item.classList.remove('hidden');
            }
            horizontalScroll.addEventListener('scroll', () => {
                const scrollPosition = horizontalScroll.scrollLeft;
        
                images.forEach((img, index) => {
                    const rotation = scrollPosition / 10; // Ubah 10 ke nilai yang diinginkan untuk kecepatan rotasi
                    img.style.transform = `scale(0.95) rotate(${rotation}deg)`;
                });
            });

            function sendMail() {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "mfarihinmushawwir10@gmail.com", // Ganti dengan email Anda
                    Password: "Farihin7", // Ganti dengan password Anda (lebih baik menggunakan cara yang lebih aman)
                    To: 'muhfarihinmushawwir10@gmail.com', // Ganti dengan email tujuan
                    From: document.getElementById("email").value,
                    Subject: "New Contact Form Enquiry",
                    Body: "Nama: " + document.getElementById("nama").value
                        + "<br> Email: " + document.getElementById("email").value
                        + "<br> No Handphone: " + document.getElementById("NoHandphone").value
                }).then(
                    message => alert("Message Sent Successfully")
                ).catch(
                    error => alert("Error in sending: " + error)
                );
            }
            