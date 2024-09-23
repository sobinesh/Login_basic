let data={Name:"",email:"",password:""}

async function GET() {
    let endpoint = 'Data.json';
    const request = await fetch(endpoint, { method: "GET" });
    const response = await request.json();
    console.log(response)
    }

async function POST() {
    let endpoint = 'Data.json'; 
    const request = await fetch(endpoint, { 
    method: "POST", 
    body: JSON.stringify(data) 
    });
    
    const response = await request.json();
    return(response)
    
    }
   