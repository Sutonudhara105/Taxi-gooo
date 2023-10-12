import { NextResponse } from "next/server";
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request:any) {

    const {searchParams}=new URL(request.url);

    const searchText=searchParams.get('q');

    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=8&session_token=f8606ab0-23ee-4cf0-ab93-5140a90f1705&country=IT,DE,US,ES,IN'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })

    const searchResult=await res.json();
    return NextResponse.json(searchResult)
    
}