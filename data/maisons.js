const maisons = [
    // Maisons permanentes

    {
        id:1,
        maison: "Adeline André",
        category: "permanente",
        artistic_director : "Adeline André",
        country: "France"
    },
    {
        id:2,
        maison: "Alexandre Vauthier",
        category: "permanente",
        artistic_director : "Alexandre Vauthier",
        country: "France"
    },
    {
        id:3,
        maison: "Alexis Mabille",
        category: "permanente",
        artistic_director : "Alexis Mabille",
        country: "France"
    },
    {
        id:4,
        maison: "Bouchra Jarrar",
        category: "permanente",
        artistic_director : "Bouchra Jarrar",
        country: "France"
    },
    {
        id:5,
        maison: "Chanel",
        category: "permanente",
        artistic_director : "Virginie Viard",
        country: "France"
    },
    {
        id:6,
        maison: "Christian Dior",
        category: "permanente",
        artistic_director : "Maria Grazia Chuiri",
        country: "France"
    },
    {
        id:7,
        maison: "Franck Sorbier",
        category: "permanente",
        artistic_director : "Franck Sorbier",
        country: "France"
    },
    {
        id:8,
        maison: "Giambattista Valli",
        category: "permanente",
        artistic_director : "Giambattista Valli",
    },
    {
        id:9,
        maison: "Givenchy",
        category: "permanente",
        artistic_director : "Matthiew Williams",
        country: "France"
    },
    {
        id:10,
        maison: "Jean Paul Gaultier",
        category: "permanente",
        artistic_director : "Julien Dossena",
        country: "France"

    },
    {
        id:11,
        maison: "Julien Fournié",
        category: "permanente",
        artistic_director : "Julien Fournié",
        country: "France"
    },
    {
        id:12,
        maison: "Maison Martin Margiela",
        category: "permanente",
        artistic_director : "John Galliano",
        country: "France"
    },
    {
        id:13,
        maison: "Maurizio Galante",
        category: "permanente",
        artistic_director : "Maurizio Galante",
        country:"Italie"
    },
    {
        id:14,
        maison: "Rabih Kayrouz",
        category: "permanente",
        artistic_director : "Rabih Kayrouz",
        country:"France"
    },
    {
        id:15,
        maison: "Schiaparelli",
        category: "permanente",
        artistic_director : "Daniel Roseberry",
        country:"France"
    },
    {
        id:16,
        maison: "Stéphane Rolland",
        category: "permanente",
        artistic_director : "Stéphane Rolland",
        country: "France"
    },

    // maisons correspondantes
    {
        id:17,
        maison: "Versace",
        category: "correspondante",
        artistic_director : "Anthony Vaccarello",
        country:"Italie"
    },
    {
        id:18,
        maison: "Azzedine Alaïa",
        category: "correspondante",
        artistic_director : "Pieter Mulier",
        country: "Tunisie/France"
    },
    {
        id:19,
        maison: "Elie Saab",
        category: "correspondante",
        artistic_director : "Elie Saab",
        country: "Liban"

    },
    {
        id:20,
        maison: "Fendi",
        category: "correspondante",
        artistic_director : "Kim Jones",
        country:"Italie"
    },
    {
        id:21,
        maison: "Giorgio Armani privé",
        category: "correspondante",
        artistic_director : "Giorgio Armani",
        country:"Italie"
    },
    {
        id:22,
        maison: "Iris Van Herpen",
        category: "correspondante",
        artistic_director : "Iris Van Herpen",
        country:"Pays-Bas"
    },
    {
        id:23,
        maison: "Ulyana Sergeenko",
        category: "correspondante",
        artistic_director : "Ulyana Sergeenko",
        country:"Russie"
    },
    {
        id:24,
        maison: "Valentino",
        category: "correspondante",
        artistic_director : "Pierpaolo Piccioli",
        country:"Italie"
    },

    {
        id:25,
        maison: "Viktor & Rolf",
        category: "correspondante",
        artistic_director : "Victor Horsting & Rolf Snoeron",
        country:"Pays-Bas"
    },

    //maison invitées
    {
        id:26,
        maison: "Aelis",
        category:"invitée",
        artistic_director : "Sofia Crociani",
        country:"Italie"
    },
    {
        id:27,
        maison: "Christophe Josse",
        category:"invitée",
        artistic_director : "Christophe Josse",
        country:"France"
    },
    {
        id:28,
        maison: "Gaurav Gupta",
        category:"invitée",
        artistic_director : "Gaurav Gupta",
        country:"Inde"
    },
    {
        id:29,
        maison: "Georges Hobeika",
        category:"invitée",
        artistic_director : "Georges Hobeika & Jad Hobeika",
        country:"Liban"
    },
    {
        id:30,
        maison: "Imane Ayissi",
        category:"invitée",
        artistic_director : "Imane Ayissi",
        country:"Cameroun/France"
    },
    {
        id:31,
        maison: "Juana Martin",
        category:"invitée",
        artistic_director : "Juana Martin",
        country:"Espagne"
    },
    {
        id:32,
        maison: "Julie de Libran",
        category:"invitée",
        artistic_director : "Julie de Libran",
        country:"France"
    },
    {
        id:33,
        maison: "Maison Sara Chraibi",
        category:"invitée",
        artistic_director : "Amira Azzouzi",
        country:"Maroc"
    },
    {
        id:34,
        maison: "Rahul Mishra",
        category:"invitée",
        artistic_director : "Rahul Mishra",
        country:"Inde"
    },
    {
        id:35,
        maison: "Robert Wun",
        category:"invitée",
        artistic_director : "Robert Wun",
        country:"Angleterre"
    },
    {
        id:36,
        maison: "RVDK Ronald Van Der Kemp",
        category:"invitée",
        artistic_director : "Ronald Van Der Kemp",
        country:"Pays-Bas"
    },
    {
        id:37,
        maison: "Yuima Nakazato",
        category:"invitée",
        artistic_director : "Yuima Nakazato",
        country:"Japon"
    },
    {
        id:38,
        maison: "Zuhair Murad",
        category:"invitée",
        artistic_director : "Zuhair Murad",
        country:"Liban"
    },
]

module.exports = maisons;