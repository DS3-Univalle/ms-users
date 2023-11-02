# Cabinture 

Authenticacion service

## Initialization 
1. Download and install [Node 18.12.1](https://nodejs.org/download/release/v18.12.1/)
2. Clone this repository 
3. Install development dependencies
  `npm install` 

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```