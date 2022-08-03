const express = require('express')
const app = express()
const cors = require('cors') //allows requests from external clients
app.use(cors())
const PORT = 8000

/*
for handling query strings
using insteadhttps://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
*/
// const url = require('url');
// const querystring = require('querystring');

const food = {
    "chicken": {
        "internalTempF": 140,
        "types": {
            "full": {
                "size": "small",
                "count": 1,
                "cookTempF": 180,
                "cookTimeMinutes": 20,
                "notes": ""
            },
            "breast": {
                "size": "medium",
                "count": 4,
                "cookTempF": 180,
                "cookTimeMinutes": 12,
                "notes": ""
            }
        },
    },
    "pork": {
        "internalTempF": 140,
        "types": {
            "bacon": {
                "size": "medium",
                "count": 6,
                "cookTempF": 180,
                "cookTimeMinutes": 12
            },
            "belly": {
                "size": "small",
                "count": 1,
                "cookTempF": 180,
                "cookTimeMinutes": 20
            }
        },
        "beef": {
            "internalTempF": 140,
            "types": {
                "breast": {
                    "size": "medium",
                    "count": 4,
                    "cookTempF": 180,
                    "cookTimeMinutes": 12
                },
                "full": {
                    "size": "small",
                    "count": 1,
                    "cookTempF": 180,
                    "cookTimeMinutes": 20
                }
            },
        },
        "unknown": {
            "internalTempF": 0,
            "types": {
                "unknown": {
                    "size": "unknown",
                    "count": 0,
                    "cookTempF": 0,
                    "cookTimeMinutes": 0
                }
            },
        }
    }
}

app.get("/", (request, response) => {
    console.log("sending you to index.html")
    response.sendFile(`${__dirname}/index.html`)
})

app.get("/api/:category/:type", (request, response) => {
    const category = (request.params.category).toLowerCase()
    const type = (request.params.type).toLowerCase()
    console.log(`searching for Category: ${category}, Type: ${type}`)

    //testing
    // jsonString = JSON.stringify(food, null, 2)
    // console.log(`searching trhough: ${jsonString}`)


    if (food[category].types[type]) {
        response.json(food[category].types[type])
        console.log(food[category].types[type])
    } else {
        response.json(food['unknown'].types['unknown'])
        console.log(food['unknown'].types['unknown'])
    }
})

app.get("/lookup", (request, response) => {
    // let rawUrl = request.originalUrl;
    // const url = request.originalUrl
    // const searchParams = new URLSearchParams(url);
    // const category = searchParams.get("category")
    // const type = searchParams.get("type")
    const category = request.query.category
    const type = request.query.type
    console.log(`Found queries: ${category} and ${type}`)
    // console.log(request)

    // const category = (request.params.category).toLowerCase()
    // const type = (request.params.type).toLowerCase()
    // console.log(`searching for Category: ${category}, Type: ${type}`)

    //testing
    // jsonString = JSON.stringify(food, null, 2)
    // console.log(`searching trhough: ${jsonString}`)

    if (food[category].types[type]) {
        response.json(food[category].types[type])
        console.log(food[category].types[type])
    } else {
        response.json(food['unknown'].types['unknown'])
        console.log(food['unknown'].types['unknown'])
    }
})

app.get("/api", (request, response) => {
    response.json(food)
})

app.listen(process.env.PORT || PORT, () => { //process.env.PORT allows you to use heroku's port number
    console.log(`listening on port ${PORT}`)
    console.log(`search api using pattern: /api/chicken/breast (replace with category/type, like api/pork/bacon)`)
})

// if getting error that 8000 is used: npx kill-port 8000