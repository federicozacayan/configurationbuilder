import React from 'react'
const placeholder = `{
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
          "name": "canonical"
      },
      {
          "type": "request",
          "name": "hello"
      },
      {
          "type": "mapping",
          "name": "masterAgreementNumber"
      }
  ]
}`
export default function Body() {
  return (
    <div className='container'>
      <h1>Body</h1>
      <div className="row">
        <div className="col-sm-6">
        <div className="form-floating">
          <textarea className="form-control" placeholder={placeholder} id="floatingTextarea2" style={{ height: '70vh' }} defaultValue={placeholder} />
          <label htmlFor="floatingTextarea2">Json</label>
        </div>
      </div>
      </div>
    </div>
  )
}
