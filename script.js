document.addEventListener('DOMContentLoaded', () => {
  // --- Section References ---
  const berandaSection = document.getElementById('beranda-section');
  const galeriSection = document.getElementById('galeri-section');
  const quizSection = document.getElementById('quiz-section');
  const chatbotSection = document.getElementById('chatbot-section');
  const scanSection = document.getElementById('scan-section');

  const allSections = [berandaSection, galeriSection, quizSection, chatbotSection, scanSection];

  // --- Nav Buttons ---
  const btnBeranda = document.getElementById('btn-beranda');
  const btnGaleri = document.getElementById('btn-galeri');
  const btnKuis = document.getElementById('btn-kuis');
  const btnChatbot = document.getElementById('btn-chatbot');
  const btnExplore = document.getElementById('explore-btn');
  const btnScan = document.getElementById('btn-scan');

  function showSection(section) {
    allSections.forEach(s => s.classList.add('hidden'));
    section.classList.remove('hidden');
  }


  // --- Navigasi ---
  btnBeranda?.addEventListener('click', () => showSection(berandaSection));
  btnExplore?.addEventListener('click', () => {
    showSection(galeriSection);
    renderGallery();
  });
  btnGaleri?.addEventListener('click', () => {
    showSection(galeriSection);
    renderGallery();
  });
  btnKuis?.addEventListener('click', () => {
    showSection(quizSection);
    resetQuiz();
  });
  btnScan?.addEventListener('click', () => {
  showSection(scanSection);
});
  btnChatbot?.addEventListener('click', () => showSection(chatbotSection));
});

  // --- Galeri ---
  const motifGallery = document.querySelector('#motif-gallery .motif-list');
  const motifDetail = document.getElementById('motif-detail');
  const backBtn = document.getElementById('back-to-gallery');
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  setupEventListeners();
});

function renderGallery() {
  const motifGallery = document.querySelector(".motif-list");
  if (!motifGallery) {
    console.error("Element .motif-list tidak ditemukan");
    return;
  }
  
  motifGallery.innerHTML = ''; 

  gringsingData.forEach(motif => {
    const item = document.createElement('div');
    item.className = 'motif-card'; // Ubah dari motif-item ke motif-card
    item.setAttribute("data-id", motif.id);

    item.innerHTML = `
      <img src="${motif.Link_Gambar}" alt="${motif.Nama_Motif}">
      <h3>${motif.Nama_Motif}</h3>
      <button class="view-btn" data-id="${motif.id}">Lihat Detail</button>
    `;

    motifGallery.appendChild(item);
  });
}

function setupEventListeners() {
  // Event listener untuk tombol "Lihat Detail" menggunakan event delegation
  const motifGallery = document.querySelector(".motif-list");
  motifGallery?.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-btn')) {
      const motifId = parseInt(e.target.getAttribute('data-id'));
      showDetailModal(motifId);
    }
  });

  // Event listener untuk tombol "Kembali ke Galeri"
  const backBtn = document.getElementById('back-to-gallery');
  backBtn?.addEventListener('click', () => {
    showGallery();
  });
}

function showDetailModal(id) {
  const motif = gringsingData.find(item => item.id === id);
  if (!motif) {
    console.warn("Motif tidak ditemukan:", id);
    return;
  }

  // Isi data detail
  document.getElementById("detail-nama-motif").textContent = motif.Nama_Motif;
  document.getElementById("detail-makna").textContent = motif.Makna;
  document.getElementById("detail-bentuk-visual").textContent = motif.Bentuk_Visual;
  document.getElementById("detail-kegunaan").textContent = motif.Kegunaan;
  document.getElementById("detail-daerah").textContent = motif.Nama_Daerah;
  document.getElementById("detail-jenis-kain").textContent = motif.Jenis_Kain;
  document.getElementById("detail-warna").textContent = motif.Warna_Motif;
  document.getElementById("detail-gambar").src = motif.Link_Gambar;

  // Tampilkan modal detail
  const detailModal = document.getElementById("motif-detail");
  detailModal.classList.remove("hidden");
  
  // Scroll ke atas dan focus
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

function showGallery() {
  // Sembunyikan detail modal
  document.getElementById("motif-detail").classList.add("hidden");
  
  // Restore body scroll
  document.body.style.overflow = 'auto';
}

// Export function untuk debugging
window.showDetailModal = showDetailModal;
  // ===== QUIZ JAVASCRIPT - GANTI KODE JS QUIZ ANDA DENGAN INI =====

// Quiz Data
const quizData = [
  {
    question: "Motif yang digunakan untuk perlindungan spiritual?",
    options: ["Yudha", "Sanan Empeg", "Dingding Ai", "Cemplong"],
    answer: "Dingding Ai"
  },
  {
    question: "Motif yang digunakan sebagai pengikat mabayuh oton?",
    options: ["Sanan Empeg", "Lubeng", "Cemplong", "Gambir"],
    answer: "Sanan Empeg"
  },
  {
    question: "Motif yang bermakna keberanian dan perjuangan?",
    options: ["Yudha", "Talidandan", "Wayang", "Batun Tuwung"],
    answer: "Yudha"
  },
  {
    question: "Motif apakah yang melambangkan harapan baru dan regenerasi?",
    options: ["Isi", "Batun Tuwung", "Gegonggangan", "Cecempaka"],
    answer: "Gegonggangan"
  },
  {
    question: "Motif mana yang menutupi seluruh kain tanpa ruang kosong sebagai pelindung dari roh halus?",
    options: ["Isi", "Pepare", "Wayang Candi", "Cecempaka"],
    answer: "Isi"
  },
  {
    question: "Motif 'Enjekan Siap' memiliki bentuk visual menyerupai apa?",
    options: ["Jejak kaki ayam", "Wayang perempuan", "Cakra", "Bunga cempaka"],
    answer: "Jejak kaki ayam"
  },
  {
    question: "Motif mana yang terinspirasi dari bunga cempaka sebagai lambang kesucian jiwa?",
    options: ["Cecempaka", "Wayang Puteri", "Talidandan", "Cemplong"],
    answer: "Cecempaka"
  }
];

// Variables
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// DOM Elements
const progressContainer = document.getElementById('progress-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizStart = document.getElementById('quiz-start');
const quizSubmit = document.getElementById('quiz-submit');
const quizNext = document.getElementById('quiz-next');

// ===== PARTICLE EFFECTS =====
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 3 + 's';
  particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
  
  // Random colors for particles
  const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d9de0', '#9775fa'];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  document.getElementById('particles').appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 5000);
}

function startParticles() {
  // Create particles periodically
  setInterval(createParticle, 800);
}

function createCelebrationParticles() {
  // Create burst of particles for celebration
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createParticle();
    }, i * 100);
  }
}

// ===== QUIZ FUNCTIONS =====
function updateProgress() {
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressFill.style.width = progress + '%';
  progressText.textContent = `Pertanyaan ${currentQuestion + 1} dari ${quizData.length}`;
}

function showQuizQuestion() {
  const q = quizData[currentQuestion];

  // Reset animasi
  quizQuestion.classList.remove("show");
  quizOptions.classList.remove("show");

  // Force reflow supaya transisi kebaca
  void quizQuestion.offsetWidth;
  void quizOptions.offsetWidth;

  setTimeout(() => {
    // Update question
    quizQuestion.textContent = q.question;
    
    // Clear and populate options
    quizOptions.innerHTML = '';
    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.addEventListener('click', () => selectOption(btn, option));
      quizOptions.appendChild(btn);
    });

    // Tambahkan class show pakai animasi
    requestAnimationFrame(() => {
      quizQuestion.classList.add("show");
      quizOptions.classList.add("show");
    });

    // Update progress
    updateProgress();
  }, 300);

  // Reset button states
  quizSubmit.classList.remove('hidden');
  quizNext.classList.add('hidden');
  quizFeedback.classList.remove('show');
  quizFeedback.textContent = '';
}

function selectOption(button, option) {
  // Remove previous selection
  document.querySelectorAll('#quiz-options button').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Add selection
  button.classList.add('selected');
  selectedOption = option;
}

function showFeedback(isCorrect, correctAnswer) {
  const feedback = document.getElementById('quiz-feedback');
  
  if (isCorrect) {
    feedback.textContent = '🎉 Luar biasa! Jawaban Anda benar!';
    feedback.className = 'correct show';
    createCelebrationParticles();
  } else {
    feedback.textContent = `❌ Waduh, salah nih! Jawaban yang benar: ${correctAnswer}`;
    feedback.className = 'incorrect show';
  }
}

function showResults() {
  const percentage = Math.round((score / quizData.length) * 100);
  let message = '';
  let emoji = '';
  
  if (percentage >= 85) {
    message = 'Luar biasa! Anda adalah ahli motif Gringsing!';
    emoji = '🏆';
  } else if (percentage >= 70) {
    message = 'Bagus sekali! Pengetahuan Anda sangat baik!';
    emoji = '🌟';
  } else if (percentage >= 50) {
    message = 'Lumayan! Masih bisa ditingkatkan lagi!';
    emoji = '👍';
  } else {
    message = 'Semangat! Yuk belajar lagi tentang motif Gringsing!';
    emoji = '💪';
  }

  // Create score display
  const scoreDisplay = document.createElement('div');
  scoreDisplay.className = 'score-display';
  scoreDisplay.innerHTML = `
    <h3>${emoji} ${score}/${quizData.length}</h3>
    <p>${message}</p>
    <p>Skor: ${percentage}%</p>
  `;

  // Replace question with score
  quizQuestion.parentNode.replaceChild(scoreDisplay, quizQuestion);
  quizOptions.innerHTML = '';
  
  // Hide progress and feedback
  progressContainer.classList.add('hidden');
  quizFeedback.classList.remove('show');
  
  // Show restart button
  quizStart.textContent = '🔄 Main Lagi';
  quizStart.classList.remove('hidden');
  
  // Celebration particles
  createCelebrationParticles();
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedOption = null;
  
  // Reset question display
  if (document.querySelector('.score-display')) {
    const scoreDisplay = document.querySelector('.score-display');
    const newQuestion = document.createElement('p');
    newQuestion.id = 'quiz-question';
    newQuestion.className = 'fade-question';
    newQuestion.textContent = '🌟 Selamat datang di kuis motif Gringsing! Siap menguji pengetahuan Anda?';
    scoreDisplay.parentNode.replaceChild(newQuestion, scoreDisplay);
  }
  
  // Clear options and feedback
  quizOptions.innerHTML = '';
  quizFeedback.classList.remove('show');
  quizFeedback.textContent = '';
  
  // Reset buttons
  quizStart.textContent = '🚀 Mulai Kuis';
  quizSubmit.classList.add('hidden');
  quizNext.classList.add('hidden');
  progressContainer.classList.add('hidden');
  
  // Reset progress
  progressFill.style.width = '0%';
  progressText.textContent = '';
}

// ===== EVENT LISTENERS =====
quizStart?.addEventListener('click', () => {
  if (quizStart.textContent.includes('Main Lagi')) {
    resetQuiz();
  }
  
  // Start quiz
  currentQuestion = 0;
  score = 0;
  selectedOption = null;
  
  progressContainer.classList.remove('hidden');
  quizStart.classList.add('hidden');
  quizSubmit.classList.remove('hidden');
  quizFeedback.textContent = '';
  
  showQuizQuestion();
});

quizSubmit?.addEventListener('click', () => {
  if (!selectedOption) {
    alert('🤔 Pilih salah satu jawaban dulu ya!');
    return;
  }
  
  const correct = quizData[currentQuestion].answer;
  const isCorrect = selectedOption === correct;
  
  if (isCorrect) {
    score++;
    document.querySelector('#quiz-options button.selected').classList.add('correct');
  } else {
    document.querySelector('#quiz-options button.selected').classList.add('incorrect');
    // Highlight correct answer
    document.querySelectorAll('#quiz-options button').forEach(btn => {
      if (btn.textContent === correct) {
        btn.classList.add('correct');
      }
    });
  }
  
  // Disable all buttons
  document.querySelectorAll('#quiz-options button').forEach(btn => {
    btn.disabled = true;
  });
  
  showFeedback(isCorrect, correct);
  
  quizSubmit.classList.add('hidden');
  quizNext.classList.remove('hidden');
  
  selectedOption = null;
});

quizNext?.addEventListener('click', () => {
  currentQuestion++;
  
  if (currentQuestion < quizData.length) {
    showQuizQuestion();
  } else {
    showResults();
    quizNext.classList.add('hidden');
  }
});

// ===== INITIALIZATION =====
// Start particle effects when page loads
document.addEventListener('DOMContentLoaded', () => {
  startParticles();
});

// Initialize quiz elements
if (quizQuestion) {
  quizQuestion.classList.add('show');
}
// scan
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    const scanResultContainer = document.getElementById("scan-result");
    scanResultContainer.classList.remove("hidden");

    scanResultContainer.innerHTML = `
      <div class="scan-preview">
        <p class="scan-label">Gambar Anda:</p>
        <img src="${reader.result}" alt="Preview" class="uploaded-image" />
      </div>

      <div class="scan-instruction">
        <h2>Pilih Motif yang Serupa</h2>
        <p>Klik panah untuk melihat semua motif, atau klik motif untuk detail</p>
      </div>

      <div class="motif-slider-wrapper">
        <button id="slider-left" class="slider-btn">←</button>
        <div id="motif-slider" class="motif-slider-track">
          ${gringsingData.map(motif => `
            <div class="motif-slider-card" onclick="showScanDetailModal(${motif.id})" data-id="${motif.id}">
              <img src="${motif.Link_Gambar}" alt="${motif.Nama_Motif}" />
              <p class="motif-name">${motif.Nama_Motif}</p>
            </div>
          `).join("")}
        </div>
        <button id="slider-right" class="slider-btn">→</button>
      </div>
    `;

    // Setup slider event listeners
    setupSliderEvents();
  };

  reader.readAsDataURL(file);
}

function setupSliderEvents() {
  const leftBtn = document.getElementById("slider-left");
  const rightBtn = document.getElementById("slider-right");
  const track = document.getElementById("motif-slider");

  if (leftBtn && rightBtn && track) {
    leftBtn.addEventListener("click", () => {
      track.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      track.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
}

function showScanDetailModal(id) {
  const motif = gringsingData.find(item => item.id === id);
  if (!motif) {
    console.warn("Motif tidak ditemukan:", id);
    return;
  }

  // Isi data detail
  document.getElementById("scan-detail-nama-motif").textContent = motif.Nama_Motif;
  document.getElementById("scan-detail-makna").textContent = motif.Makna;
  document.getElementById("scan-detail-bentuk-visual").textContent = motif.Bentuk_Visual;
  document.getElementById("scan-detail-kegunaan").textContent = motif.Kegunaan;
  document.getElementById("scan-detail-daerah").textContent = motif.Nama_Daerah;
  document.getElementById("scan-detail-jenis-kain").textContent = motif.Jenis_Kain;
  document.getElementById("scan-detail-warna").textContent = motif.Warna_Motif;
  document.getElementById("scan-detail-gambar").src = motif.Link_Gambar;

  // Tampilkan modal detail scan
  const detailModal = document.getElementById("motif-detail-scan");
  detailModal.classList.remove("hidden");
  
  // Scroll ke atas dan prevent body scroll
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.overflow = 'hidden';
}

function closeScanDetail() {
  // Sembunyikan detail modal
  document.getElementById("motif-detail-scan").classList.add("hidden");
  
  // Restore body scroll
  document.body.style.overflow = 'auto';
}

// Setup event listener untuk tombol close scan detail
document.addEventListener("DOMContentLoaded", () => {
  const backToScanBtn = document.getElementById("back-to-scan");
  if (backToScanBtn) {
    backToScanBtn.addEventListener("click", closeScanDetail);
  }
});

// Export functions untuk debugging
window.showScanDetailModal = showScanDetailModal;
window.handleFileUpload = handleFileUpload;
  // --- Chatbot ---
  document.addEventListener('DOMContentLoaded', function() {
    const chatbotSection = document.getElementById('chatbot-section');
    
    if (chatbotSection) {
        // Smooth hover effect
        chatbotSection.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        chatbotSection.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Subtle parallax effect untuk ornamen
        chatbotSection.addEventListener('mousemove', function(e) {
            const ornaments = this.querySelectorAll('.chatbot-ornament');
            const rect = this.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / rect.width;
            const mouseY = (e.clientY - rect.top) / rect.height;
            
            ornaments.forEach((ornament, index) => {
                const speed = (index + 1) * 0.3;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                
                ornament.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
});

// --- Gringsing Interaktif: buka-tutup card ---
function toggleContent(cardElement) {
  cardElement.classList.toggle('active');
}
