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
    },
    {
        "id": 3,
        "title": "Halp! Joey's lost his spring.",
        "pet_name": "Joey",
        "image": "https://cdn.pixabay.com/photo/2019/07/04/12/05/kangaroo-4316456_960_720.jpg",
        "description": "Joey the baby kangaroo hasn't jumped in over a month, and needs his knees repaired. Donate today!",
        "med_treatment": "Knee surgery",
        "date_created": "2020-09-18T00:47:32.725429Z",
        "goal": 4500,
        "pledged_amount": 0,
        "goal_reached": false,
        "active": true,
        "owner": "admin",
        "pet_category": "other"
    },
    {
        "id": 4,
        "title": "Pete the turtle has cracked his shell.",
        "pet_name": "Pete",
        "image": "https://cdn.pixabay.com/photo/2016/02/16/06/44/turtle-1202692_960_720.jpg",
        "description": "It would be shellfish not to help this wonderful pet, Pete. Be a star(fish) and click that pledge button.",
        "med_treatment": "Shell repair",
        "date_created": "2020-09-16T00:47:32.725429Z",
        "goal": 1200,
        "pledged_amount": 0,
        "goal_reached": false,
        "active": true,
        "owner": "admin",
        "pet_category": "other"
    },
    {
        "id": 5,
        "title": "Former lab rat needs a replacement tail",
        "pet_name": "Boris",
        "image": "https://cdn.pixabay.com/photo/2018/07/12/20/24/rat-3534317_960_720.jpg",
        "description": "We rescued Boris from a lab two weeks ago and now we want to replace the tail that he lost during his time there.",
        "med_treatment": "Tail replacement",
        "date_created": "2020-09-19T00:47:32.725429Z",
        "goal": 500,
        "pledged_amount": 0,
        "goal_reached": false,
        "active": true,
        "owner": "admin",
        "pet_category": "rodent"
    },
    {
        "id": 6,
        "title": "Frodo the basset has allergies.",
        "pet_name": "Frodo",
        "image": "https://cdn.pixabay.com/photo/2014/05/16/16/33/basset-hound-345645_960_720.jpg",
        "description": "Frodo the basset hound lives to sniff, but has recently developed hayfever. Help an old dog get back to doing what he does best",
        "med_treatment": "Hayfever vaccine",
        "date_created": "2020-09-18T00:47:32.725429Z",
        "goal": 200,
        "pledged_amount": 0,
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