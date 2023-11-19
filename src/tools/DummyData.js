let requests = [
    {
        "name": "hello",
        "data": {
            "url": "http://localhost",
            "protocol": "http",
            "host": "localhost",
            "port": "9999",
            "path": "/",
            "method": "get",
            "headers": [
                {
                    "key": "Content-Type",
                    "value": "application/json"
                }
            ],
            "body": {
                "dummyField": "dummyValue"
            }
        }
    },
    {
        "name": "canonical",
        "data": {
            "url": "http://localhost",
            "protocol": "http",
            "host": "localhost",
            "port": "9999",
            "path": "/canonical",
            "method": "post",
            "headers": [
                {
                    "key": "Content-Type",
                    "value": "application/json"
                }
            ],
            "body": {
                "keyExample": "valueExample"
            }
        }
    }
]
const request = {
    "name": "hello",
    "data": {
        "url": "http://localhost",
        "protocol": "http",
        "host": "localhost",
        "port": "9999",
        "path": "/",
        "method": "get",
        "headers": [
            {
                "key": "Content-Type",
                "value": "application/json"
            }
        ],
        "body": {
            "dummyField": "dummyValue"
        }
    }
}
requests = []
const header = {
    "key": "Content-Type",
    "value": "application/json"
}
export { request, requests, header }