    const parent = React.createElement(
        'div',
        {id:"parent"},[
            React.createElement('div',{id:"child"},
            [React.createElement('h1',{},'I am a h1 chind for parent'),
            React.createElement('h1',{},'I am a h chind for parent')]),
            React.createElement('div',{id:"child2"},
            [React.createElement('h1',{},'I am a h1 chind for parent'),
            React.createElement('h1',{},'I am a h chind for parent')])
        ]
       
    )
    
    
    
    
    // const heading =  React.createElement(
    //     "h1",
    //     {id:"heading"},
    //     "Hellow world from React!"
    //     );
    // console.log(heading);   
    const maindiv=  document.getElementById('root');
    const root= ReactDOM.createRoot(maindiv);
    // root.render(heading);
    root.render(parent);