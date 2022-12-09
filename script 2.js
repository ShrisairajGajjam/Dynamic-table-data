let data = [{
    name: "ramesh",
    roll: 2516,
    enroll: 9739173,
    marks: 68,

},
{
    name: "sarthak",
    roll: 2503,
    enroll: 24343529,
    marks: 00,

},
]

for(i=0;i<data.length;i++)
{
    let tr=document.createElement('tr');
    let tbody=document.getElementsByTagName('tbody');
    tbody[0].appendChild(tr);
    for(j=0;j<5;j++)
    {
        let td=document.createElement('td');
        tr.appendChild(td);
    }
    
}

let tbody=document.querySelector("tbody");
console.log(tbody);
let tr = tbody.querySelectorAll("tr");
console.log(tr);
for(i=0;i<data.length;i++)
{
    let td=tr[i].querySelectorAll('td');    
    let name = document.createTextNode(data[i].name);
    let roll = document.createTextNode(data[i].roll);
    let enroll = document.createTextNode(data[i].enroll);
    let marks = document.createTextNode(data[i].marks);
    let sr = document.createTextNode(i+1);
    td[0].appendChild(sr);
    td[1].appendChild(name);
    td[2].appendChild(roll);
    td[3].appendChild(enroll);
    td[4].appendChild(marks);    
}
