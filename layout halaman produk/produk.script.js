// Fungsi untuk menangani klik tombol beli
function handleBuyButtonClick(event) {
    const productId = event.target.getAttribute('data-product-id');
    // Di sini Anda dapat melakukan apa pun yang diperlukan, misalnya mengirim permintaan pembelian ke server atau menampilkan pesan konfirmasi.
    alert(`Anda telah membeli produk dengan ID ${productId}`);
}

// Menemukan semua tombol beli
const buyButtons = document.querySelectorAll('.buy-button');

// Mendaftarkan penanganan klik untuk setiap tombol beli
buyButtons.forEach(button => {
    button.addEventListener('click', handleBuyButtonClick);
});