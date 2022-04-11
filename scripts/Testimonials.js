let users=[
    {
        id:1,
        Name:'Mark',
        Review:'This service is bad.',
        Rate:1
    },
    {
        id:2,
        Name:'John',
        Review:'It is okay.',
        Rate:3
    },
    {
        id:3,
        Name:'Adam Shady',
        Review:'This service helped me with my bussiness.',
        Rate:5
    },
    {
        id:4,
        Name:'Mohamed',
        Review:'Thank you for recomminding this.',
        Rate:5
    },
    {
        id:5,
        Name:'Ali',
        Review:'ammm, not good not bad.',
        Rate:2
    },
    {
        id:6,
        Name:'Tyler',
        Review:'good.',
        Rate:4
    }
]

function displayRev(e){
    if(e.target.id){
        let div = document.getElementsByClassName(`${e.target.id}`)[0];
        div.innerHTML = users[e.target.id-1].Name;
        div.style.width = '20%';
        div.style.padding = '10px';
        let reviewPar = document.createElement('p');
        div.appendChild(reviewPar);
        reviewPar.setAttribute('id','reviewPar');
        reviewPar.innerHTML =  users[e.target.id-1].Review;
        let divrate = document.getElementsByClassName(`${e.target.id}`)[0];
        console.log(divrate)
        for(let i =0 ; i<users[e.target.id-1].Rate ; i++){
            let RatePar = document.createElement('img');
            divrate.appendChild(RatePar);
            RatePar.src='../assets/Vector.png'
            RatePar.setAttribute('width','10%');

        }
    }
}
