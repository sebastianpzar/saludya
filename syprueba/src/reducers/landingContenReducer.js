const contentArray = 
[
    {id: 0, layout: 3, title: "Tu salud y la de tu familia no deberian esperar.", text: "SaludYa proporciona la mejor calidad en medicina con un solo click.", img: "https://images.pexels.com/photos/698878/pexels-photo-698878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 1, layout: 1, title: "Facil y rapido.", text: "Accede a toda tu informacion personal desde cualquier parte.", img: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 2, layout: 2, title: "Todos los servicios", text: "Agenda citas, recibe resultados de examenes, habla con un especialista, todo con un click.", img: "https://images.pexels.com/photos/2265482/pexels-photo-2265482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 3, layout: 1, title: "Cuida de los que te necesitan.", text: "Servicios rapidos y a precios accesibles para toda la familia.", img: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 4, layout: 2, title: "Comienza ya un mejor servicio de salud, y recibe 2 meses gratis.", tex: "", img: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    
];


export default (state = contentArray, action) => {
    switch(action.type){
        case 'ADD_LANDING_CONTENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

