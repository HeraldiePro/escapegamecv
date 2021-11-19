//Acceuil
const acceuilTitle = `Bienvenu`
const acceuilDescription = `
Vous pouvez dès à présent découvrir mon cursus professionnel 
par le biais des différentes énigmes qu’il vous faudra résoudre. 

Sur-ce amusez-vous bien `;

const acceuilButton = `COMMENCEZ LE PARCOURS`;

//AcceuilEnd

//Etape1 
const etape1Title = `Employés polyvalent en restauration rapide`;

const etape1Description = `Comme beaucoup de jeunes actifs je commençais par 
travailler en restauration rapide, je dois bien admettre que ce domaine professionnel, bien que 
très éloigné de mes valeurs, fut au final une expérience intéressante.
 Elle m'a permis de développer mon contact clientèle en travaillant en caisse.`;

const etape1Enigme = `Arthur et Mathilde souhaitent commander deux menus méga sunday 
ainsi qu'un cheeseburger chacun. Ils règlent ensemble et dispose d'une carte étudiant. Qu'elle somme devront -ils régler ?`
const etape1Indice = `pour calculer facilement une réduction de 10 % diviser par dix 
le résultat initial ou bien d'aller sur le site du service public 
afin de faire une simulation de calcul `

//EndEtape1

//Etape2
const etape2Title = `Animation enfant`;

const etape2Description = `Suite à une reconversion professionnelle je décidais ensuite de m'orienter vers l'animation 
jeune public, pour ce faire j'ai fait le parcours classique du BAFA et directement après son acquisition j'ai pu commencer à travailler 
pour une association sur les temps de périscolaire. J'avais d'ailleurs déjà à cœur de masteriser et d'initier mon public à différents 
jeux de société et/ou de stratégie.`;

const etape2Enigme = `Déchiffrez le rébus suivant`


const etape2Indice = `le personnage dessiné est russe. Pour le plateau il s'agit célèbre jeux de stratégie coréen.`
//EndEtape2


//Etape3
const etape3Title = `Animation village vacances`;

const etape3DescriptionParaph1 = `De fil en aiguille j'ai souhaité expérimenter l'animation dans des structures différentes avec des 
publics plus variés. J'ai donc eu la chance de travailler en saison pour un village vacances 
quatre étoiles situé sur la côte d'azur du nom très rigolo de Toursitra.`;

const etape3DescriptionParaph2 = `Au cours de cette expérience j'ai eu l'occasion de mettre à profit mes compétences théâtrales 
en montant sur scène (et parfois même de faire du travestie hihi), d'apprendre des rudiments de prestidigitation, d'improviser un jeu de piste avec 
pour élément principal une bobine de laine et aussi d'apprendre des chorégraphies (pour mon plus grand plaisir) pour des animations avec les enfants 
qui avaient lieu cinq jours sur sept (le principe de mini si vous connaissez).`

const etape3Enigme = `Veuillez trouver parmi la liste ci-dessous et en vous aidant du texte ci-dessus l'intrus dans cette liste d'activités`


const etape3Indice = `vous remarquerez que je n'ai pas animé de tournoi de foot`
//EndEtape3


//Etape4
const etape4Title = `Formation ATL et stage en Escape Game`;

const etape4Description = `Afin de me perfectionner j'ai choisi de participer à une formation à l’AFPA de tours nord en tant 
qu'animateur en tourisme et loisir. Et c'est par ce biais que j'ai découvert l'univers des Escape Game j'ai donc procédé à un stage 
de trois mois en entreprise, stage qui a été rémunéré grâce à mon implication durant une période de forte affluences.`;

const etape4Enigme = `Trouver les deux mots (un par ligne) afin d'obtenir le code secret`


const etape4Indice = `Il s'agit d'un code en morse`
//EndEtape4

//Etape5
const etape5Title = `Extra pour 221 b`;

const etape5Description = `C'est très récemment que j'ai découvert le milieu de l'Escape Game urbain itinérant. Par le biais d'un emploi en CDD 
de trois mois pour une entreprise dijonnaise qui proposait comme service l’installation dans les centres-villes un grand jeu éphémère 
(un mélange entre un Cluedo géant et une chasse au trésor avec en plus des pack énigmes sous forme d'atelier) sur une thématique propre à une célèbre 
licence concernant l'histoire d'un jeune sorcier prophétique dotée d'une cicatrice sur le front.`;

const etape5Enigme = `En usant de l'extrait et des chiffres entre parenthèse constituez un mot de cinq lettres.`


const etape5Indice = `les chiffres entre parenthèse donnent des coordonnées : la première L… le onzième M… la première L...`
//EndEtape5


//Remerciments
const remercimentsDescription = `
Je vous remercie d'avoir poursuivi la lecture de mon cv, je tenais à proposer un concept 
qui se voulait un tantinet original et interactif. Bien sûr que ce soit en terme de conception 
et d'animation il ne s'agit là que d'un exemple de mes compétences. J'aime travailler sur l'élaboration 
de nouvelles méthodes ou « gadget » propre au milieu des escapes et je serais ravi de mettre à profit mes capacités à votre service.

Veillez trouvez ci-dessous un lien de téléchargement pour mon véritable curriculum vitae où vous trouverez mes contacts. 
Je reste à votre disposition pour plus d’information et vous souhaite une bonne journée ou une bonne soirée. 

Ludiquement 

`
const remercimentsButton = `Télécharger le CV`
//EndRemerciments






//Export for dev a ne pas toucher
export const AcceuilText = {
    "title": acceuilTitle,
    "description": acceuilDescription,
    "button": acceuilButton
}

export const Etape1Text = {
    "title": etape1Title,
    "description": etape1Description,
    "enigme": etape1Enigme,
    "indice": etape1Indice
}

export const Etape2Text = {
    "title": etape2Title,
    "description": etape2Description,
    "enigme": etape2Enigme,
    "indice": etape2Indice
}

export const Etape3Text = {
    "title": etape3Title,
    "descriptionParaph1": etape3DescriptionParaph1,
    "descriptionParaph2": etape3DescriptionParaph2,
    "enigme": etape3Enigme,
    "indice": etape3Indice
}

export const Etape4Text = {
    "title": etape4Title,
    "description": etape4Description,
    "enigme": etape4Enigme,
    "indice": etape4Indice
}

export const Etape5Text = {
    "title": etape5Title,
    "description": etape5Description,
    "enigme": etape5Enigme,
    "indice": etape5Indice
}

export const Remerciments = {
    "description": remercimentsDescription,
    "button": remercimentsButton
}


