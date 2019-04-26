const MOCK = {
    "statusCode": 200,
    "body": {
        "data": [
            {
                "id": "0011",
                "name": "Bath Mat",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/BathMat.jpg",
                "description": "This rug has special technology to dry quickly and makes for a great rug in the restroom or kitchen",
                "colors": [
                    "red",
                    "green",
                    "purple",
                    "olive"
                ],
                "type": "rug",
                "deliverable": true,
                "dimensions": {
                    "length": 24,
                    "width": 52
                },
                "cost": 19.99,
                "stock": 21
            },
            {
                "id": "0040",
                "name": "Non-Rolling Chair",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/Non-RollingChair.jpg",
                "description": "If you dislike moving while sitting then this chair is for you. Stays right where you put it",
                "colors": [
                    "white",
                    "black",
                    "green",
                    "yellow"
                ],
                "type": "chair",
                "deliverable": true,
                "cost": 57.99,
                "stock": 17
            },
            {
                "id": "0005",
                "name": "Sectional End-Piece",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/SectionalEnd-Piece.jpg",
                "description": "The end-cap to a modular sectional couch.  Keeps the middle pieces together.",
                "colors": [
                    "white",
                    "black",
                    "green",
                    "yellow"
                ],
                "type": "sofa",
                "deliverable": true,
                "cost": 152.31,
                "stock": 17
            },
            {
                "id": "0007",
                "name": "Leather Couch",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/LeatherCouch.jpg",
                "description": "A premium leather couch. Stays cool in the summer and even cooler in the winter.",
                "colors": [
                    "tan",
                    "brown",
                    "black"
                ],
                "type": "sofa",
                "deliverable": true,
                "cost": 329.41,
                "stock": 0
            },
            {
                "id": "0009",
                "name": "Bunk Couch",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/BunkCouch.jpg",
                "description": "When you have more friends than space in your apartment, the bunk couch lets all the folks enjoy the big game comfortably",
                "colors": [
                    "tan",
                    "brown",
                    "black"
                ],
                "type": "sofa",
                "deliverable": true,
                "cost": 521.74,
                "stock": 2
            },
            {
                "id": "0008",
                "name": "Plush Couch",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/PlushCouch.jpg",
                "description": "Plush couches feel like you are sitting on a cloud.",
                "colors": [
                    "green",
                    "red",
                    "grey"
                ],
                "type": "sofa",
                "deliverable": false,
                "cost": 439.41,
                "stock": 7
            },
            {
                "id": "0011",
                "name": "Shag Rug",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/ShagRug.jpg",
                "description": "Popularized in the 70's, these bad-boys have made a comeback. Spruce up your floor with a rug",
                "colors": [
                    "tan",
                    "brown",
                    "black",
                    "red",
                    "green",
                    "purple",
                    "olive"
                ],
                "type": "rug",
                "deliverable": true,
                "dimensions": {
                    "length": 48,
                    "width": 120
                },
                "cost": 220.89,
                "stock": 10
            },
            {
                "id": "0001",
                "name": "Round Table",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/RoundTable.jpg",
                "description": "This round table looks great in any modern setting. Its the safest table for babies",
                "colors": [
                    "white",
                    "black"
                ],
                "type": "table",
                "deliverable": false,
                "cost": 149.99,
                "stock": 13
            },
            {
                "id": "0011",
                "name": "Fur Rug",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/FurRug.jpg",
                "description": "Made from faux-fur, this long-ply rug feels great between your toes",
                "colors": [
                    "tan",
                    "brown"
                ],
                "type": "rug",
                "deliverable": true,
                "dimensions": {
                    "length": 36,
                    "width": 78
                },
                "cost": 521.49,
                "stock": 4
            },
            {
                "id": "0004",
                "name": "Rolling Chair",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/RollingChair.jpg",
                "description": "If you need to get around while sitting around then this chair is for you. Drift from table to table, room to room with ease.",
                "colors": [
                    "white",
                    "black",
                    "green",
                    "yellow"
                ],
                "type": "chair",
                "deliverable": true,
                "cost": 57.99,
                "stock": 17
            },
            {
                "id": "0003",
                "name": "Modern Chair",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/ModernChair.jpg",
                "description": "This elegant chair really lets people know you graduated from a great school",
                "colors": [
                    "white",
                    "black",
                    "green",
                    "yellow"
                ],
                "type": "chair",
                "deliverable": true,
                "cost": 59.99,
                "stock": 25
            },
            {
                "id": "0002",
                "name": "Square Table",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/table.jpg",
                "description": "For those who live on the edge. This tables makes a point in any room.",
                "colors": [
                    "white",
                    "black"
                ],
                "type": "table",
                "deliverable": true,
                "cost": 159.99,
                "stock": 4
            },
            {
                "id": "0006",
                "name": "Sectional Middle-Piece",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/SectionalMiddlePiece.jpg",
                "description": "Infinitly combinable sectional mid-peice. You can arrange and reconfigure these sofa pieces to fit any room",
                "colors": [
                    "white",
                    "black",
                    "green",
                    "yellow"
                ],
                "type": "sofa",
                "deliverable": true,
                "cost": 139.41,
                "stock": 12
            },
            {
                "id": "0010",
                "name": "Long Couch",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/LongCouch.jpg",
                "description": "This couch is sooooo loooong",
                "colors": [
                    "tan",
                    "brown",
                    "black",
                    "red"
                ],
                "type": "sofa",
                "deliverable": true,
                "cost": 1220.89,
                "stock": 1
            },
            {
                "id": "00100",
                "name": "Regular Sofa",
                "imageUrl": "https://s3-us-west-2.amazonaws.com/code-challenge-furniture-images/Furniture/sofa.jpg",
                "description": "This is just a regular old sofa. Like you would find in any old living room. Nothing special here. Just a regular old sofa",
                "colors": [
                    "tan"
                ],
                "type": "sofa",
                "deliverable": true,
                "cost": 567.89,
                "stock": 100
            }
        ],
        "paging": {
            "total": 15,
            "returned": 15,
            "offset": 0,
            "limit": 100
        }
    },
    "devDependencies": {
        "html-webpack-plugin": "^2.29.0",
        "react-hot-loader": "^3.0.0-beta.7"
    }
}
