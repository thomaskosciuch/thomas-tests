const axios = require("axios")

async function test() {
    const partnerID = '1'
    const mandate='Balanced'
    const strategy='Good'
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjRJT1NlWFpHbXpzU296dWpjTWR4UXJvNmc3dyJ9.eyJhdWQiOiJhOGY0ZDY0ZS0yYzllLTQ4MGQtYTU0Ni05NmQ3NGVmM2RhZTAiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMjdlZDlhOTktODUwZS00YjI0LWIxMWYtYWVhMTAzMjhlYmY1L3YyLjAiLCJpYXQiOjE2NjEzNTM5OTEsIm5iZiI6MTY2MTM1Mzk5MSwiZXhwIjoxNjYxMzU3ODkxLCJuYW1lIjoiR2FnYW4gU2luZ2giLCJub25jZSI6IjJhNjZhODEwLTE0YzItNGY1My1iMWQwLWQ1ZjAwMzhjYTM2NiIsIm9pZCI6ImJiNjRjNTk4LWZlOTEtNDg4MS1iMDIxLTk2YzdjZmExMjBhZSIsInByZWZlcnJlZF91c2VybmFtZSI6ImdhZ2FuQHF3ZWFsdGguY29tIiwicmgiOiIwLkFWSUFtWnJ0Snc2RkpFdXhINjZoQXlqcjlVN1c5S2llTEExSXBVYVcxMDd6MnVCU0FPSS4iLCJzdWIiOiJsZDVEWFp2SzNZZnJMN2lXQko1TjdKWDFOeWN1TnVkVHF6N05aOVE4T3VNIiwidGlkIjoiMjdlZDlhOTktODUwZS00YjI0LWIxMWYtYWVhMTAzMjhlYmY1IiwidXRpIjoicFNvQVhLODRYa2VYSzVIYURWT0RBQSIsInZlciI6IjIuMCJ9.AjbaW456rcunkMMHtov4upuN1FRrUQdjCUP5CBUAgFpdKPU1eQPj_UdxmrP7kl0VXFhLvq2g1uG_h44O8LGTaG0Ayswu9pMNabslvW8KcJ5uJ-6-ncWvMPoM5UXGZjGcgBtVNbq41BoCr-P0u7WaBk186FqRjo-vWSC4fCz7LyRDBVM4OSMFJ6ZAbcKI__VgETXVVvjFZ4wlYh0zPJLDsdvTfpcQSY3vZg6XxXKF1ysSkb2K7hsCYBuQufj26dDUoKF2eKhsAWh2ko3zyQsB5j75WeqjvUewiCeLY96RZxD2CU92jTQmOOGODXFUc7626QCskRX7tJqdj3LSSCPmtA'
    headers = {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            common: {
                "Accept": "application/json, text/plain, */*"
              },
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "get": {},

    }
    headers = {
        "common": {
          "Accept": "application/json, text/plain, */*"
        },
        "delete": {},
        "get": {},
        "head": {},
        "post": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "put": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "patch": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjRJT1NlWFpHbXpzU296dWpjTWR4UXJvNmc3dyJ9.eyJhdWQiOiJhOGY0ZDY0ZS0yYzllLTQ4MGQtYTU0Ni05NmQ3NGVmM2RhZTAiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMjdlZDlhOTktODUwZS00YjI0LWIxMWYtYWVhMTAzMjhlYmY1L3YyLjAiLCJpYXQiOjE2NjEzNTM5OTEsIm5iZiI6MTY2MTM1Mzk5MSwiZXhwIjoxNjYxMzU3ODkxLCJuYW1lIjoiR2FnYW4gU2luZ2giLCJub25jZSI6IjJhNjZhODEwLTE0YzItNGY1My1iMWQwLWQ1ZjAwMzhjYTM2NiIsIm9pZCI6ImJiNjRjNTk4LWZlOTEtNDg4MS1iMDIxLTk2YzdjZmExMjBhZSIsInByZWZlcnJlZF91c2VybmFtZSI6ImdhZ2FuQHF3ZWFsdGguY29tIiwicmgiOiIwLkFWSUFtWnJ0Snc2RkpFdXhINjZoQXlqcjlVN1c5S2llTEExSXBVYVcxMDd6MnVCU0FPSS4iLCJzdWIiOiJsZDVEWFp2SzNZZnJMN2lXQko1TjdKWDFOeWN1TnVkVHF6N05aOVE4T3VNIiwidGlkIjoiMjdlZDlhOTktODUwZS00YjI0LWIxMWYtYWVhMTAzMjhlYmY1IiwidXRpIjoicFNvQVhLODRYa2VYSzVIYURWT0RBQSIsInZlciI6IjIuMCJ9.AjbaW456rcunkMMHtov4upuN1FRrUQdjCUP5CBUAgFpdKPU1eQPj_UdxmrP7kl0VXFhLvq2g1uG_h44O8LGTaG0Ayswu9pMNabslvW8KcJ5uJ-6-ncWvMPoM5UXGZjGcgBtVNbq41BoCr-P0u7WaBk186FqRjo-vWSC4fCz7LyRDBVM4OSMFJ6ZAbcKI__VgETXVVvjFZ4wlYh0zPJLDsdvTfpcQSY3vZg6XxXKF1ysSkb2K7hsCYBuQufj26dDUoKF2eKhsAWh2ko3zyQsB5j75WeqjvUewiCeLY96RZxD2CU92jTQmOOGODXFUc7626QCskRX7tJqdj3LSSCPmtA"
      }

    const a = await axios.options('http://10.0.0.17:8002/v1/financialModels/portfolio', {params: {partnerID, mandate, strategy}, headers})
    console.log(a.status)
    console.log(a.data.data['1']['Balanced'])
}

test()