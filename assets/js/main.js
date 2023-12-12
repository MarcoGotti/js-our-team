
//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './assets/img/angela-caroll-chief-editor.jpg',
    } ,
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './assets/img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
];
console.log(team);



// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //BONUS 1: Trasformare la stringa foto in una immagine effettiva
    //member.foto = 'https://picsum.photos/300/200';     
}


//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

/* const containerEl = document.querySelector('.container');

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
} */


//BONUS 2: Organizzare i singoli membri in card/schede

const rowEl = document.querySelector('.row');

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const colCardEl = generateColMarkUp(member);
    rowEl.insertAdjacentHTML("beforeend", colCardEl);
}

function generateColMarkUp(employee) { 
    const memberName = employee.nome; //trying different things
    //template Literam 
    const colMarkUp = ` 
        <div class="col">
            <div class="card">
                <img src="${employee.foto}" class="card-img-top" alt="...">
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title">${memberName}</h5>
                    <p class="card-text text-light-emphasis fw-bolder">${employee.ruolo}</p>
                </div>
            </div>
        </div>
        `
        return colMarkUp   
}