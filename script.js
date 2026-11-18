document.addEventListener('DOMContentLoaded', () => {
// 1. FITUR BERPINDAH HALAMAN SAAT MENU SIDEBAR DIKLIK
    const navItems = document.querySelectorAll('.nav-item');
    const pageContents = document.querySelectorAll('.page-content');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            
            navItems.forEach(nav => nav.classList.remove('active'));
            // Tambahkan kelas aktif pada menu yang diklik
            item.classList.add('active');

            
            const targetPageId = 'page-' + item.getAttribute('data-page');

            
            pageContents.forEach(page => page.classList.remove('active'));

            
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });

  
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        
       
        const cardItems = document.querySelectorAll('.card-item');
        cardItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(keyword) ? 'block' : 'none';
        });

        
        const footerItems = document.querySelectorAll('.footer-item');
        footerItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(keyword) ? 'flex' : 'none';
        });
    });

    
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.addEventListener('mouseenter', () => bar.style.opacity = '0.7');
        bar.addEventListener('mouseleave', () => bar.style.opacity = '1');
    });

    const btnSignOut = document.getElementById('btnSignOut');
    if (btnSignOut) {
        btnSignOut.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Apakah Anda yakin ingin Sign Out?')) {
                alert('Anda telah keluar dari aplikasi.');
            }
        });
    }

});