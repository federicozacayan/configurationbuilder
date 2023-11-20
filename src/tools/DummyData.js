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
        "body": "{}"
    }
}
requests = []
const header = {
    "key": "Content-Type",
    "value": "application/json"
}
let body = `{
    "requests": [
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
                "body": "{}"
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
                "body": "{}"
            }
        }
    ],
    "mappings": [
        {
            "name": "masterAgreementNumber",
            "params":{ 
                "objects": {
                    "source": "hello",
                    "target": "canonical"
                },
                "expressions": [
                    {
                        "source": "$.store.book[1].title",
                        "target": "$.masterAgreementNumber"
                    },
                    {
                        "source": "$.store.book[1].title",
                        "target": "$.billGroups"
                    },
                    {
                        "source": "$.store.book[1].title",
                        "target": "$.carrier"
                    }
                ]
            }
        }
    ],
    "actions": [
        {
            "type": "request",
            "name": "canonical",
            "description": "This is a description 1"
        },
        {
            "type": "request",
            "name": "hello",
            "description": "This is a description 2"
        },
        {
            "type": "mapping",
            "name": "masterAgreementNumber",
            "description": "This is a description 3"
        }
    ]
  }`
body =  `{
    "dummyField": "dummyValue"
  }`
  const step = {
    "type": "",
    "name": "",
    "description": "[Description of the step]"
  }
export { request, requests, header, body, step }