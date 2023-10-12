import { NextResponse } from "next/server";
import stripe from "stripe";
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY!,{
    typescript:true,
    appVersion:"2023-08-16"
})
export async function POST(request:any){
    const data:any=await request.json();
    const amount=data.amount;
    try{
        const paymentIntext=await stripe.paymentIntents.create({
            amount:Number(amount)*100,
            currency:'USD'
        })
        return NextResponse.json(paymentIntext.client_secret,{status:200})
    }
    catch(error:any){
        return new NextResponse(error,{
            status: 400,
        });
    }
}