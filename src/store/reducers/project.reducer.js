const initState = {
    projects: [
        {id: '1', title: 'First title', content: 'First Content'},
        {id: '2', title: 'Second title', content: 'Second Content'},
        {id: '3', title: 'Third title', content: 'Third Content'},
        {id: '4', title: 'Fourth title', content: 'Fourth Content'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
    }
    return state;
};

export default projectReducer;