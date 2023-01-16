import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req:NextRequest){
    const verify = req.cookies.get("accessToken");
    const url = req.url;
    console.log(url);
    const nextUrl = req.nextUrl
    
    if(nextUrl.pathname === '/dashboard'){
        // if (req.cookies) {
        //     return NextResponse.rewrite('/dashboard')
        //   } else {
        //     return NextResponse.rewrite('/login')
        //   }
        // if(!verify || verify === "undefined"){
        //     return NextResponse.redirect('http://localhost:3000/login');
        // }
    }

    if(url.endsWith('/products/categories')){
            return NextResponse.redirect('http://localhost:3000/categories');
    }
    return NextResponse.next();
}