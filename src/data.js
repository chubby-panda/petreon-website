export const AllPets = [
    {
        "id": 2,
        "title": "Poppy needs a kidney",
        "pet_name": "Poppy",
        "image": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
        "description": "Poppy is in dire need of a new kidney. Please help her today.",
        "med_treatment": "kidney transplant",
        "date_created": "2020-09-04T13:31:36.453287Z",
        "goal": 12000,
        "pledged_amount": 0,
        "goal_reached": false,
        "active": true,
        "owner": "admin",
        "pet_category": "cat"
    },
    {
        "id": 1,
        "title": "Bob needs a wheelchair",
        "pet_name": "Bob",
        "image": "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg",
        "description": "Bob had both his back legs amputated and needs wheels to get around. Please make an old pup's dreams come true.",
        "med_treatment": "Wheelchair",
        "date_created": "2020-09-04T00:47:32.725429Z",
        "goal": 2000,
        "pledged_amount": 100,
        "goal_reached": false,
        "active": true,
        "owner": "admin",
        "pet_category": "dog"
    }
];

export const OnePet = {
    "id": 1,
    "title": "Bob needs a wheelchair",
    "pet_name": "Bob",
    "image": "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg",
    "description": "Bob had both his back legs amputated and needs wheels to get around. Please make an old pup's dreams come true.",
    "med_treatment": "Wheelchair",
    "date_created": "2020-09-04T00:47:32.725429Z",
    "goal": 2000,
    "pledged_amount": 100,
    "goal_reached": false,
    "active": true,
    "owner": "admin",
    "pet_category": "dog",
    "pledges": [
        {
            "id": 1,
            "pet": 1,
            "amount": 100,
            "anonymous": false,
            "supporter": "sophie"
        },
        {
            "id": 2,
            "pet": 1,
            "amount": 200,
            "anonymous": false,
            "supporter": "ben"
        },
        {
            "id": 3,
            "pet": 1,
            "amount": 120,
            "anonymous": false,
            "supporter": "cat"
        }
    ]
}