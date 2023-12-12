/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.



BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    } ,
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member.nome);  
}

//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

const containerEl = document.querySelector('.container');

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const memberNameEl = document.createElement('div');
    memberNameEl.className = 'col-4';
    memberNameEl.innerHTML = (member.nome);
    containerEl.append(memberNameEl);
    const memberRoleEl = document.createElement('div');
    memberRoleEl.className = 'col-4';
    memberRoleEl.innerHTML = (member.ruolo);
    containerEl.append(memberRoleEl);
    const memberPicEl = document.createElement('div');
    memberPicEl.className = 'col-4';
    memberPicEl.innerHTML = (member.foto);
    containerEl.append(memberPicEl);
    console.log(typeof(member.foto));
    
}