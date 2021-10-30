let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "kamuuu^^";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/_aryagilang/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai kamuuu!',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Aku tau ko kamu lagi sibuk banget`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Lagi pusing banget, cape banget`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `dunia jahat yaaa sama kamu? :(`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,      
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `gaada yang bisa ngertiin kamu yaa?`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,             
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `kamu muak sama hidup kamu?`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,                        
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `its okey if u feel tired, itu semua udh bagian dari kehidupan.`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,         
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `sabar ya!^^ berjuang dikit lagi okeey.`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,    
         }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `reminder that is gets better and everything gonna be okeyy^^`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,    
         }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `kamu hebat im so pround of you.`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false, 
         }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `sehat dan happy terus ya, banyakin senyum, senyuman kamuu itu bawa energi positif buat orang lain✨`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,                                 
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus yaaaa kamu :)').then((result) => {
                  Swal.fire(
                    'Jangan keseringan begadang!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan telat makan!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Aku dukung kamu terus ko').then((result) => {
                        Swal.fire({
                          title: 'Oh iya aku mau nanya',
                          text: 'Ada sesuatu yang lagi kamu pingin ga?',
                          showDenyButton: true,
                          confirmButtonText: `Adaaa`,
                          denyButtonText: `Ga ada ko`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Mau apa?',
                              input: 'text',
                              inputPlaceholder: 'ex: Seblacc, boba, or etc',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu donggg'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okeyy', 'Nanti aku kabulin kemauan kamu yaa', 'success').then((result) => {
                                Swal.fire("See ya^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Oh okedeh kalo ga ada').then((result) => {
                              Swal.fire("See ya^^").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
