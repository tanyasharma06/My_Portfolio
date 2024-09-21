// Footer.js
import React from "react";
import Navbar from "./Navbar";
export default function Footer() {
    return (
        <section className="p-5 bg-emerald-200 flex justify-center  ">
            <Navbar/>
            <p className="font-bold">
                ©Copyright 2024. All rights are reserved by Tanya Sharma
            </p>
        </section>
    );
}
