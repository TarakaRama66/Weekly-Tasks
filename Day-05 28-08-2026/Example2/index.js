const members=[
    {
        id:1,name:"Tarak",plan:"Premium",fee:5000,trainer:{name:"Siddu"}
    },
    {
        id:2,name:"ram",plan:"Basic",fee:2000
    },
    {
        id:3,name:"Tilak",plan:"Premium",fee:5000
    }
];
// unique Plans
const plans=[...new Set(
    members.map(member=>member.plan)
)];
console.log(plans);

// Members Lookup
const memberMap=new Map(members.map(
    ({id,name})=>[id,name]
));
console.log(memberMap);

// Total 
const Total=members.reduce((sum,{fee})=>sum+fee,0);
console.log(Total);

//Display Members
members.forEach(({name,plan,fee,trainer})=>{
    const trainerName=trainer?.name??"Trainer Not Assigned to this person";
    console.log(`member:${name}
        plan:${plan}
        Fee:${fee}
        Trainer:${trainerName}
    `);
});

// Rest Operator
function calculateDiscount(discount,...fees){
    return fees.map(fee=>fee-(fee*discount)/100);
}
console.log(calculateDiscount(10,5000,2000,5000));