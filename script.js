// Sélection des éléments de navigation
const homeButtons = document.querySelectorAll(".accueil");
const historiquesBtn = document.getElementById("historiques");
const historiquesFoot = document.getElementById("historiques-foot");
const resultatsBtn = document.getElementById("resultats");
const resultatsFoot = document.getElementById("resultats-foot");
const photosBtn = document.getElementById("photos");
const photosFoot = document.getElementById("photos-foot");
const audiosBtn = document.getElementById("audios");
const audiosFoot = document.getElementById("audios-foot");
const videosBtn = document.getElementById("videos");
const videosFoot = document.getElementById("videos-foot");
const matchsBtn = document.getElementById("matchs");
const matchsFoot = document.getElementById("matchs-foot");
const devenirMembreBtn = document.getElementById("membres");

// Sélection des blocs de contenu
const historique = document.getElementById("historique");
const propos = document.getElementById("propos");
const imagesASA = document.getElementById("imagesASA");
const resultat = document.getElementById("resultat");
const photo = document.getElementById("photo");
const audio = document.getElementById("audio");
const video = document.getElementById("video");
const match = document.getElementById("match");
const membre = document.getElementById("membre");

function masquerTout() {
  if (historique) historique.style.display = "none";
  if (resultat) resultat.style.display = "none";
  if (photo) photo.style.display = "none";
  if (audio) audio.style.display = "none";
  if (video) video.style.display = "none";
  if (match) match.style.display = "none";
  if (membre) membre.style.display = "none";
  if (propos) propos.style.display = "none";
  if (imagesASA) imagesASA.style.display = "none";
}

// Fonction Accueil (actualise et remonte en haut de page)
function gererAccueil(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  location.reload();
}

// Écouteurs pour Accueil (Haut et Flèche du Bas)
homeButtons.forEach(function (btn) {
  btn.addEventListener("click", gererAccueil);
});

// Historique
function afficherHistorique(e) {
  e.preventDefault();
  masquerTout();
  if (historique) historique.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
if (historiquesBtn)
  historiquesBtn.addEventListener("click", afficherHistorique);
if (historiquesFoot)
  historiquesFoot.addEventListener("click", afficherHistorique);

// Résultats
function afficherResultats(e) {
  e.preventDefault();
  masquerTout();
  if (resultat) resultat.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
if (resultatsBtn) resultatsBtn.addEventListener("click", afficherResultats);
if (resultatsFoot)
  resultatsFoot.append = resultatsFoot.addEventListener(
    "click",
    afficherResultats,
  );

// Photos
function afficherPhotos(e) {
  e.preventDefault();
  masquerTout();
  if (photo) photo.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
if (photosBtn) photosBtn.addEventListener("click", afficherPhotos);
if (photosFoot) photosFoot.addEventListener("click", afficherPhotos);

// Audios
function afficherAudios(e) {
  e.preventDefault();
  masquerTout();
  if (audio) audio.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
if (audiosBtn) audiosBtn.addEventListener("click", afficherAudios);
if (audiosFoot) audiosFoot.addEventListener("click", afficherAudios);

// Vidéos
function afficherVideos(e) {
  e.preventDefault();
  masquerTout();
  if (video) video.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
if (videosBtn) videosBtn.addEventListener("click", afficherVideos);
if (videosFoot) videosFoot.addEventListener("click", afficherVideos);

// Matchs
function afficherMatchs(e) {
  e.preventDefault();
  masquerTout();
  if (match) match.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
if (matchsBtn) matchsBtn.addEventListener("click", afficherMatchs);
if (matchsFoot) matchsFoot.addEventListener("click", afficherMatchs);

// Devenir Membre
if (devenirMembreBtn) {
  devenirMembreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    masquerTout();
    if (membre) membre.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Fonctions interactives pour les Résultats (Likes, Dislikes et Commentaires)
window.incrementerLike = function (button) {
  const countSpan = button.querySelector(".like-count");
  countSpan.textContent = parseInt(countSpan.textContent) + 1;
};

window.incrementerDislike = function (button) {
  const countSpan = button.querySelector(".dislike-count");
  countSpan.textContent = parseInt(countSpan.textContent) + 1;
};

window.ajouterCommentaire = function (button) {
  const input = button.previousElementSibling;
  const texteCommentaire = input.value.trim();
  if (texteCommentaire !== "") {
    const resultItem = button.closest(".result-item");
    const commentsList = resultItem.querySelector(".comments-list");

    // Si c'était le message par défaut, on le vide
    if (commentsList.textContent.includes("Aucun commentaire")) {
      commentsList.textContent = "";
    }

    const nouveauP = document.createElement("pstyle");
    nouveauP.style.margin = "5px 0";
    nouveauP.innerHTML = `💬 <em>${texteCommentaire}</em>`;
    commentsList.appendChild(nouveauP);

    input.value = "";
  }
};
