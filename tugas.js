document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah halaman untuk reload

  // Ambil data formulir
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Token bot Telegram dan chat ID
  const token = '7793927120:AAG42NY2JC_LFf0oXM_Nbk7Tv7K2MBOidmA';  // Ganti dengan token bot Anda
  const chatId = '-4761466267';             // Ganti dengan chat ID Anda

  // Pesan yang akan dikirim ke bot
  const text = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;

  // Cek jika ada file
  const file = formData.get('file');
  if (file) {
      // Jika ada file, kirim file tersebut ke bot
      const formDataWithFile = new FormData();
      formDataWithFile.append('chat_id', chatId);
      formDataWithFile.append('document', file);
      formDataWithFile.append('caption', text);

      fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
          method: 'POST',
          body: formDataWithFile
      })
      .then(response => response.json())
      .then(data => {
          document.getElementById('responseMessage').style.display = 'block';
          document.getElementById('responseMessage').innerText = 'Pesan dan file berhasil dikirim!';
      })
      .catch(error => {
          console.error('Terjadi kesalahan:', error);
          document.getElementById('responseMessage').style.display = 'block';
          document.getElementById('responseMessage').innerText = 'Terjadi kesalahan. Coba lagi.';
      });
  } else {
      // Jika tidak ada file, hanya kirim pesan
      fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
          .then(response => response.json())
          .then(data => {
              document.getElementById('responseMessage').style.display = 'block';
              document.getElementById('responseMessage').innerText = 'Pesan berhasil dikirim!';
          })
          .catch(error => {
              console.error('Terjadi kesalahan:', error);
              document.getElementById('responseMessage').style.display = 'block';
              document.getElementById('responseMessage').innerText = 'Terjadi kesalahan. Coba lagi.';
          });
  }
});
