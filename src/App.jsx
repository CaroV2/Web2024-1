import React from "react"
import "./App.css"
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";

export default function App() {
    return(
        <>
        <Header />
        <Body/>
        <Footer/>
        </>
    )
}