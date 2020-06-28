'use strict';

let boardJSON = `{
    "startPath": "Old Testament",
    "startSpot": 0,
    "paths": [
        {
            "name": "Old Testament",
            "count": 60,
            "isCircular": true,
            "bidirectional": false,
            "bridges": [
                {
                    "fromSpot": 0,
                    "toPath": "Church History North",
                    "toSpot": 0
                },
                {
                    "fromSpot": 15,
                    "toPath": "Church History East",
                    "toSpot": 0
                },
                {
                    "fromSpot": 30,
                    "toPath": "Church History South",
                    "toSpot": 0
                },
                {
                    "fromSpot": 45,
                    "toPath": "Church History West",
                    "toSpot": 0
                }
            ]
        },
        {
            "name": "New Testament",
            "count": 20,
            "isCircular": true,
            "bidirectional": false,
            "bridges": [
                {
                    "fromSpot": 0,
                    "toPath": "Church History North",
                    "toSpot": 1
                },
                {
                    "fromSpot": 5,
                    "toPath": "Church History East",
                    "toSpot": 1
                },
                {
                    "fromSpot": 10,
                    "toPath": "Church History South",
                    "toSpot": 1
                },
                {
                    "fromSpot": 15,
                    "toPath": "Church History West",
                    "toSpot": 1
                }
            ]
        },
        {
            "name": "Church History North",
            "count": 2,
            "isCircular": false,
            "bidirectional": true,
            "bridges": [
                {
                    "fromSpot": 0,
                    "toPath": "Old Testament",
                    "toSpot": 0
                },
                {
                    "fromSpot": 1,
                    "toPath": "New Testament",
                    "toSpot": 0
                }
            ]
        },
        {
            "name": "Church History East",
            "count": 2,
            "isCircular": false,
            "bidirectional": true,
            "bridges": [
                {
                    "fromSpot": 0,
                    "toPath": "Old Testament",
                    "toSpot": 15
                },
                {
                    "fromSpot": 1,
                    "toPath": "New Testament",
                    "toSpot": 5
                }
            ]
        },
        {
            "name": "Church History South",
            "count": 2,
            "isCircular": false,
            "bidirectional": true,
            "bridges": [
                {
                    "fromSpot": 0,
                    "toPath": "Old Testament",
                    "toSpot": 30
                },
                {
                    "fromSpot": 1,
                    "toPath": "New Testament",
                    "toSpot": 10
                }
            ]
        },
        {
            "name": "Church History West",
            "count": 2,
            "isCircular": false,
            "bidirectional": true,
            "bridges": [
                {
                    "fromSpot": 0,
                    "toPath": "Old Testament",
                    "toSpot": 45
                },
                {
                    "fromSpot": 1,
                    "toPath": "New Testament",
                    "toSpot": 15
                }
            ]
        }
    ]
}`;
