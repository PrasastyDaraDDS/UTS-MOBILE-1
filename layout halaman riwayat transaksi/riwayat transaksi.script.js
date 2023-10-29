// Simulasi data riwayat transaksi (contoh)
const transactions = [
    { date: '2023-10-25', description: 'Pembelian makanan', amount: 50.00 },
    { date: '2023-10-24', description: 'Pengisian saldo', amount: 100.00 },
    // Tambahkan transaksi lainnya di sini
];

const transactionHistory = document.getElementById('transaction-history');

// Fungsi untuk menampilkan riwayat transaksi
function displayTransactionHistory() {
    transactionHistory.innerHTML = ''; // Kosongkan isi div

    transactions.forEach((transaction) => {
        const transactionEntry = document.createElement('div');
        transactionEntry.innerHTML = `<p>Tanggal: ${transaction.date}</p>
                                      <p>Deskripsi: ${transaction.description}</p>
                                      <p>Jumlah: ${transaction.amount}</p>`;
        transactionEntry.classList.add('transaction-entry');
        transactionHistory.appendChild(transactionEntry);
    });
}

// Panggil fungsi untuk menampilkan riwayat transaksi
displayTransactionHistory();
