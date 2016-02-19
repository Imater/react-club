import { Store } from 'flummox';

const tree = [
    {
        id: 1,
        title: 'first',
        childs: [
            {
                id: 2,
                title: 'firstChild',
                childs: [
                    {
                        id: 4,
                        title: 'fourth',
                        childs: [],
                    },
                    {
                        id: 5,
                        title: 'fifth',
                        childs: [],
                    },
                ],
            },
            {
                id: 3,
                title: 'secondChild',
                childs: [],
            },
        ]
    },
    {
        id: 4,
        title: 'fourth',
        childs: [
            {
                id: 4,
                title: 'fourth',
                childs: [],
            },
            {
                id: 5,
                title: 'fifth',
                childs: [],
            },
                ],
            },
    {
        id: 5,
        title: 'fifth',
        childs: [],
    },
];

export default class TreeStore extends Store {
    
    constructor(flux) {
        super();

        this.state = {
            trees: tree,
        };
    }
}
