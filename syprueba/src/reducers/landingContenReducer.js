const contentArray = 
[
    {id: 0, title: "Unlimited movies, TV shows, and more.", text: "Watch anywhere. Cancel anytime.", img: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 1, title: "Enjoy on your TV.", text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", img: "https://images.pexels.com/photos/2265482/pexels-photo-2265482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 2, title: "Download your shows to watch on the go.", text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", img: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 3, title: "Watch everywhere.", tex: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", img: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 4, title: "Start watching now for free, without signing up.", text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", img: "https://images.pexels.com/photos/207496/pexels-photo-207496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
];


export default (state = contentArray, action) => {
    switch(action.type){
        case 'ADD_LANDING_CONTENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

