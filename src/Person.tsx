import {useState} from 'react'
interface Props {
    name:string;
    email:string;
    age:number;
    isMarried:boolean;
    friends:string[];
    country:Country;
}
export enum Country {
    India = "India",
    Russia="Russia"
}
export const Person =(props:Props)=>{
    const[name,setname]=useState<string>("");
return (
    <div>
    <h1>Name:{props.name}</h1>
    <h1>Email:{props.email}</h1>
    <h1>Age:{props.age}</h1>
    <h1>This person {props.isMarried ? "is":"is not"} Married</h1>
    {props.friends.map((friend:string)=>(
        <h1>{friend}</h1>
    ))}
    <h1>Country:{props.country}</h1>
    </div>
   
);
};