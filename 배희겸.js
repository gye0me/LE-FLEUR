function showCoupon() {
  document.getElementById('couponModal').style.display = 'block';
}
function closeCoupon() {
  document.getElementById('couponModal').style.display = 'none';
}

const flowerMessages = [
  "ROSE  - 사랑과 열정",
  "TULIP  - 명예와 애정",
  "CARNATION  - 감사의 마음",
  "SUNFLOWER  - 존경과 숭배",
  "FREESIA  - 순수한 시작"
];
function showRandomFlower() {
  const random = flowerMessages[Math.floor(Math.random() * flowerMessages.length)];
  document.getElementById('flowerMessage').innerText = random;
  document.getElementById('flowerModal').style.display = 'block';
}
function closeFlower() {
  document.getElementById('flowerModal').style.display = 'none';
}

window.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal') || e.target.id === 'signupModal') {
    e.target.style.display = 'none';
  }
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeCoupon();
    closeFlower();
    closeSignup();
    closeLogin();
  }
});

const fadeIns = document.querySelectorAll('.fade-in');
function checkFadeIns() {
  fadeIns.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkFadeIns);
window.addEventListener('load', checkFadeIns);

document.getElementById('darkModeToggle').onclick = function () {
  document.body.classList.toggle('dark');
};

for (let i = 0; i < 10; i++) {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDelay = `${Math.random() * 5}s`;
  document.body.appendChild(petal);
}

function openSignup() {
  document.getElementById('signupModal').style.display = 'block';
}
function closeSignup() {
  document.getElementById('signupModal').style.display = 'none';
}

function openLogin() {
  document.getElementById('loginModal').style.display = 'block';
}
function closeLogin() {
  document.getElementById('loginModal').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('로그인 시도 중...');
  closeLogin();
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("회원가입이 완료되었습니다!");
  closeSignup();
});
