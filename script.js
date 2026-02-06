// ======================
// DONNÉES
// ======================
const compliments = [
    "Tu mérites tout le bonheur du monde !",
    "Ta présence rend les journées plus belles.",
    "Tu es une personne incroyable.",
    "Le monde est meilleur avec toi dedans.",
    "N'oublie pas à quel point tu es spécial(e).",
    "Ton sourire illumine ma journée.",
    "Tu es la meilleure chose qui me soit arrivée.",
    "Je suis reconnaissant(e) de t'avoir dans ma vie.",
    "Tu inspires le meilleur chez les autres.",
    "Ton cœur est aussi beau que ton sourire.",
    "Chaque moment avec toi est un cadeau.",
    "Avec toi, chaque jour est une Saint-Valentin."
];

const messagesPredifinis = [
    "En cette Saint-Valentin, je te souhaite beaucoup d'amour, de joie et de douceur.",
    "Tu es une personne extraordinaire et tu comptes énormément pour moi.",
    "Aujourd’hui et tous les jours, je pense à toi avec tendresse.",
    "Merci d’être toi. Joyeuse Saint-Valentin ❤️",
    "Avec toi, l’amour est simple et sincère."
];

const themes = {
    'theme-1': { primary: '#e84393', background: "linear-gradient(135deg, #ffafbd, #ffc3a0)" },
    'theme-2': { primary: '#0984e3', background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)" },
    'theme-3': { primary: '#e17055', background: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    'theme-4': { primary: '#00b894', background: "linear-gradient(135deg, #84fab0, #8fd3f4)" },
    'theme-5': { primary: '#6c5ce7', background: "linear-gradient(135deg, #d4fc79, #96e6a1)" },
    'theme-6': { primary: '#fd79a8', background: "linear-gradient(135deg, #fad0c4, #ffd1ff)" }
};

let currentTheme = 'theme-1';

// ======================
// DOM READY
// ======================
document.addEventListener('DOMContentLoaded', () => {

    const genererBtn = document.getElementById('genererBtn');
    const exempleBtn = document.getElementById('exempleBtn');
    const destinataireInput = document.getElementById('destinataire');
    const expediteurInput = document.getElementById('expediteur');
    const messageInput = document.getElementById('message');
    const addCompliment = document.getElementById('addCompliment');
    const addHeartAnim = document.getElementById('addHeartAnimation');

    const cardDestinataire = document.getElementById('cardDestinataire');
    const cardExpediteur = document.getElementById('cardExpediteur');
    const cardMessage = document.getElementById('cardMessage');
    const complimentContainer = document.getElementById('complimentContainer');
    const complimentText = document.getElementById('complimentText');
    const cardHeart = document.getElementById('cardHeart');
    const valentineCard = document.getElementById('valentineCard');
    const shareOptions = document.getElementById('shareOptions');

    shareOptions.classList.add('hidden');

    // ======================
    // FONCTIONS UTILITAIRES
    // ======================
    const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

    function applyTheme() {
        const theme = themes[currentTheme];
        valentineCard.style.border = `5px solid ${theme.primary}`;
        valentineCard.style.background = `url('k.jpg') center/cover no-repeat, ${theme.background}`;
        valentineCard.querySelector('.card-title').style.color = theme.primary;
        cardHeart.querySelector('i').style.color = theme.primary;
    }

    function updateCard() {
        cardDestinataire.textContent = destinataireInput.value || "Mon amour";
        cardExpediteur.textContent = expediteurInput.value || "Quelqu’un qui t’aime";
        cardMessage.textContent = messageInput.value || randomItem(messagesPredifinis);

        if (addCompliment.checked) {
            complimentText.textContent = randomItem(compliments);
            complimentContainer.classList.remove('hidden');
        } else {
            complimentContainer.classList.add('hidden');
        }

        cardHeart.style.animation = addHeartAnim.checked ? 'heartbeat 1.5s infinite' : 'none';
        applyTheme();
    }

    // ======================
    // CAPTURE ET TÉLÉCHARGEMENT
    // ======================
    function downloadCardAsJPG() {
        html2canvas(valentineCard, { scale: 2, useCORS: true })
            .then(canvas => {
                const a = document.createElement('a');
                const name = destinataireInput.value || "mon_amour";
                a.download = `carte_saint_valentin_${name.replace(/\s+/g,'_')}.jpg`;
                a.href = canvas.toDataURL('image/jpeg', 0.95);
                a.click();
            });
    }

    function askToShare() {
        setTimeout(() => {
            if (confirm("💖 Carte générée !\n\nSouhaites-tu la partager maintenant ?")) {
                shareOptions.classList.remove('hidden');
                shareOptions.scrollIntoView({ behavior: 'smooth' });
            }
        }, 400);
    }

    // ======================
    // CONFETTIS CŒUR
    // ======================
    function confetti() {
        for (let i = 0; i < 40; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-20px';
            heart.style.fontSize = `${Math.random()*24+12}px`;
            heart.style.opacity = Math.random();
            heart.style.transform = `rotate(${Math.random()*360}deg)`;
            heart.style.animation = `fall ${Math.random()*2+2}s linear`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    }

    // ======================
    // ÉVÉNEMENTS
    // ======================
    genererBtn.addEventListener('click', () => {
        updateCard();
        confetti();
        setTimeout(() => {
            downloadCardAsJPG();
            askToShare();
        }, 300);
    });

    exempleBtn.addEventListener('click', () => {
        destinataireInput.value = "Mon amour";
        expediteurInput.value = "Moi";
        messageInput.value = randomItem(messagesPredifinis);
        updateCard();
    });

    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            currentTheme = opt.dataset.theme;
            applyTheme();
        });
    });

    updateCard();
});