import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

export default function middleware(req:NextRequest){
    const verify = req.cookies.get("accessToken");
    const url = req.url;
    console.log(url);
    
    if(url.includes('/dashboard')){
        if(!verify || verify === "undefined"){
            return NextResponse.redirect('http://localhost:3000/login');
        }
    }
    return NextResponse.next();
}