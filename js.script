// Liste de compliments pour la Saint-Valentin
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
    "Tu rends le monde plus doux et plus gentil.",
    "Ton amour est la plus belle des mélodies.",
    "Tu es mon rayon de soleil même les jours de pluie.",
    "Avec toi, chaque jour est une Saint-Valentin."
];

// Messages prédéfinis
const messagesPredifinis = [
    "En cette Saint-Valentin, je te souhaite beaucoup d'amour, de joie et de douceur. Que cette journée soit remplie de petits bonheurs !",
    "Pour la Saint-Valentin, je veux te dire à quel point tu comptes pour moi. Tu es une personne extraordinaire qui mérite tout le bonheur du monde.",
    "La Saint-Valentin est l'occasion parfaite pour te dire merci. Merci d'être toi, merci pour ta gentillesse et ton amour. Je t'apprécie énormément.",
    "Aujourd'hui et tous les jours, je pense à toi avec tendresse. Joyeuse Saint-Valentin à une personne vraiment spéciale !",
    "L'amour ne se mesure pas aux cadeaux mais aux petits attentions. En cette Saint-Valentin, je t'envoie tout mon amour et ma gratitude."
];

// Thèmes avec leurs couleurs
const themes = {
    'theme-1': { 
        primary: '#e84393', 
        secondary: '#fd79a8',
        gradient: 'linear-gradient(135deg, #ffafbd, #ffc3a0)'
    },
    'theme-2': { 
        primary: '#0984e3', 
        secondary: '#74b9ff',
        gradient: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)'
    },
    'theme-3': { 
        primary: '#e17055', 
        secondary: '#fab1a0',
        gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)'
    },
    'theme-4': { 
        primary: '#00b894', 
        secondary: '#55efc4',
        gradient: 'linear-gradient(135deg, #84fab0, #8fd3f4)'
    },
    'theme-5': { 
        primary: '#a29bfe', 
        secondary: '#6c5ce7',
        gradient: 'linear-gradient(135deg, #d4fc79, #96e6a1)'
    },
    'theme-6': { 
        primary: '#fd79a8', 
        secondary: '#ffeaa7',
        gradient: 'linear-gradient(135deg, #fad0c4, #ffd1ff)'
    }
};

// Variables globales
let currentTheme = 'theme-1';

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des éléments DOM
    const genererBtn = document.getElementById('genererBtn');
    const exempleBtn = document.getElementById('exempleBtn');
    const enregistrerBtn = document.getElementById('enregistrerBtn');
    const destinataireInput = document.getElementById('destinataire');
    const expediteurInput = document.getElementById('expediteur');
    const messageInput = document.getElementById('message');
    const addComplimentCheckbox = document.getElementById('addCompliment');
    const addHeartAnimationCheckbox = document.getElementById('addHeartAnimation');
    const cardDestinataire = document.getElementById('cardDestinataire');
    const cardExpediteur = document.getElementById('cardExpediteur');
    const cardMessage = document.getElementById('cardMessage');
    const complimentContainer = document.getElementById('complimentContainer');
    const complimentText = document.getElementById('complimentText');
    const cardHeart = document.getElementById('cardHeart');
    const valentineCard = document.getElementById('valentineCard');
    const shareOptions = document.getElementById('shareOptions');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    // Gestion des boutons de partage
    const shareTwitterBtn = document.getElementById('shareTwitter');
    const shareWhatsAppBtn = document.getElementById('shareWhatsApp');
    const copyLinkBtn = document.getElementById('copyLink');
    
    // Sélection du thème
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Retirer la classe selected de toutes les options
            themeOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Ajouter la classe selected à l'option cliquée
            this.classList.add('selected');
            
            // Mettre à jour le thème courant
            currentTheme = this.getAttribute('data-theme');
            
            // Appliquer le thème à la carte
            applyThemeToCard();
        });
    });
    
    // Appliquer un thème à la carte
    function applyThemeToCard() {
        const theme = themes[currentTheme];
        valentineCard.style.border = `5px solid ${theme.primary}`;
        
        // Mettre à jour les couleurs des éléments
        const cardTitle = document.querySelector('.card-title');
        const cardToSpan = document.querySelector('.card-to span');
        const cardFromSpan = document.querySelector('.card-from span');
        const cardHeartIcon = document.querySelector('.card-heart i');
        
        if (cardTitle) cardTitle.style.color = theme.primary;
        if (cardToSpan) cardToSpan.style.color = theme.primary;
        if (cardFromSpan) cardFromSpan.style.color = theme.primary;
        if (cardHeartIcon) cardHeartIcon.style.color = theme.primary;
        
        // Mettre à jour le dégradé de fond si nécessaire
        // valentineCard.style.background = theme.gradient;
    }
    
    // Générer un compliment aléatoire
    function getRandomCompliment() {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        return compliments[randomIndex];
    }
    
    // Générer un message prédéfini aléatoire
    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messagesPredifinis.length);
        return messagesPredifinis[randomIndex];
    }
    
    // Mettre à jour la carte
    function updateCard() {
        // Récupérer les valeurs des champs
        const destinataire = destinataireInput.value || "[Destinataire]";
        const expediteur = expediteurInput.value || "[Votre nom]";
        const message = messageInput.value || getRandomMessage();
        
        // Mettre à jour les éléments de la carte
        cardDestinataire.textContent = destinataire;
        cardExpediteur.textContent = expediteur;
        cardMessage.textContent = message;
        
        // Gérer le compliment
        if (addComplimentCheckbox.checked) {
            const compliment = getRandomCompliment();
            complimentText.textContent = compliment;
            complimentContainer.classList.remove('hidden');
        } else {
            complimentContainer.classList.add('hidden');
        }
        
        // Gérer l'animation du cœur
        if (addHeartAnimationCheckbox.checked) {
            cardHeart.style.animation = 'heartbeat 1.5s infinite';
        } else {
            cardHeart.style.animation = 'none';
        }
        
        // Appliquer le thème
        applyThemeToCard();
        
        // Afficher les options de partage
        shareOptions.classList.remove('hidden');
    }
    
    // Remplir avec un exemple
    function fillExample() {
        destinataireInput.value = "Ma chère Amélie";
        expediteurInput.value = "Thomas";
        messageInput.value = getRandomMessage();
        
        // Mettre à jour la carte
        updateCard();
    }
    
    // Enregistrer la carte
    function saveCard() {
        // Récupérer les données de la carte
        const destinataire = destinataireInput.value || "Destinataire";
        const expediteur = expediteurInput.value || "Expéditeur";
        const message = cardMessage.textContent;
        const compliment = addComplimentCheckbox.checked ? complimentText.textContent : null;
        
        // Créer le contenu du fichier
        let fileContent = `CARTE DE SAINT-VALENTIN\n`;
        fileContent += `========================\n\n`;
        fileContent += `Pour : ${destinataire}\n\n`;
        fileContent += `Message :\n${message}\n\n`;
        
        if (compliment) {
            fileContent += `Compliment : ${compliment}\n\n`;
        }
        
        fileContent += `De la part de : ${expediteur}\n\n`;
        fileContent += `Créée le : ${new Date().toLocaleDateString('fr-FR')}\n`;
        fileContent += `Avec le Générateur de Cartes de Saint-Valentin ❤️`;
        
        // Créer un blob et un lien de téléchargement
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `carte_saint_valentin_${destinataire.replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Afficher une notification
        alert(`Carte enregistrée sous le nom : ${a.download}`);
    }
    
    // Partager sur Twitter
    function shareOnTwitter() {
        const destinataire = destinataireInput.value || "quelqu'un de spécial";
        const message = `J'ai créé une carte de Saint-Valentin pour ${destinataire} avec le Générateur de Cartes ! ❤️ #SaintValentin #Amour`;
        const url = encodeURIComponent(window.location.href);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${url}`;
        window.open(twitterUrl, '_blank');
    }
    
    // Partager sur WhatsApp
    function shareOnWhatsApp() {
        const destinataire = destinataireInput.value || "quelqu'un de spécial";
        const message = `J'ai créé une carte de Saint-Valentin pour ${destinataire} avec le Générateur de Cartes ! ❤️ Consulte-la ici : ${window.location.href}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Copier le lien de partage
    function copyShareLink() {
        const link = window.location.href;
        navigator.clipboard.writeText(link)
            .then(() => {
                // Changer temporairement le texte du bouton
                const originalText = copyLinkBtn.innerHTML;
                copyLinkBtn.innerHTML = '<i class="fas fa-check"></i> Lien copié !';
                copyLinkBtn.style.background = '#00b894';
                copyLinkBtn.style.color = 'white';
                
                setTimeout(() => {
                    copyLinkBtn.innerHTML = originalText;
                    copyLinkBtn.style.background = '';
                    copyLinkBtn.style.color = '';
                }, 2000);
            })
            .catch(err => {
                console.error('Erreur lors de la copie : ', err);
                alert('Impossible de copier le lien. Veuillez le copier manuellement : ' + link);
            });
    }
    
    // Événements
    genererBtn.addEventListener('click', updateCard);
    exempleBtn.addEventListener('click', fillExample);
    enregistrerBtn.addEventListener('click', saveCard);
    shareTwitterBtn.addEventListener('click', shareOnTwitter);
    shareWhatsAppBtn.addEventListener('click', shareOnWhatsApp);
    copyLinkBtn.addEventListener('click', copyShareLink);
    
    // Mettre à jour la carte lorsque les champs changent
    destinataireInput.addEventListener('input', updateCard);
    expediteurInput.addEventListener('input', updateCard);
    messageInput.addEventListener('input', updateCard);
    addComplimentCheckbox.addEventListener('change', updateCard);
    addHeartAnimationCheckbox.addEventListener('change', updateCard);
    
    // Initialiser avec un exemple
    fillExample();
    
    // Ajouter un effet de confettis pour la Saint-Valentin
    function createConfetti() {
        const confettiCount = 50;
        const container = document.querySelector('.container');
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.innerHTML = '<i class="fas fa-heart"></i>';
            confetti.style.position = 'fixed';
            confetti.style.color = ['#e84393', '#fd79a8', '#a29bfe', '#00b894'][Math.floor(Math.random() * 4)];
            confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-50px';
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            container.appendChild(confetti);
            
            // Animation
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
            });
            
            // Supprimer après l'animation
            animation.onfinish = () => confetti.remove();
        }
    }
    
    // Lancer des confettis lors de la génération d'une carte
    genererBtn.addEventListener('click', function() {
        setTimeout(createConfetti, 300);
    });
    
    // Lancer des confettis au chargement de la page
    setTimeout(createConfetti, 1000);
});