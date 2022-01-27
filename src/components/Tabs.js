import React, { useState } from 'react';
import '../styles/tabs.css';

export default function Tabs() {

    const [tabIndex, setTabIndex] = useState(1);

    const handleTabs = (tab) => {
        setTabIndex(tab)
    }

    return (
        <section className="tabs-section --100vh">
            <div className="container">
                <div className="tabs-heading --text-center">
                    <h2 className="--line"> More About Us</h2>
                    <p className="--text-sm" >Click the tab button to learn more.</p>
                </div>
            </div>

            <div className="tabs --flex-start --bg-light">
                <div className="tabs-title">
                    <button onClick={() => handleTabs(1)} className={tabIndex === 1 ? "tab active-tab" : "tab"}>Who We Are</button>
                    <button onClick={() => handleTabs(2)} className={tabIndex === 2 ? "tab active-tab" : "tab"}>What We Do</button>
                    <button onClick={() => handleTabs(3)} className={tabIndex === 3 ? "tab active-tab" : "tab"}>Get In Touch</button>
                </div>
                <div className="tabs-content">
                    <article className={tabIndex === 1 ? "active-content" : "content"}>
                        <h4>Who We Are...</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur laborum illum repudiandae excepturi recusandae, tempora, porro consequatur, reiciendis ratione voluptates repellendus alias hic molestias unde magnam odit nam provident!</p>
                    </article>
                    <article className={tabIndex === 2 ? "active-content" : "content"}>
                        <h4>Who We Do...</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur laborum illum repudiandae excepturi recusandae, tempora, porro consequatur, reiciendis ratione voluptates repellendus alias hic molestias unde magnam odit nam provident!</p>
                    </article>
                    <article className={tabIndex === 3 ? "active-content" : "content"}>
                        <h4>Get in Touch...</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur laborum illum repudiandae excepturi recusandae, tempora, porro consequatur, reiciendis ratione voluptates repellendus alias hic molestias unde magnam odit nam provident!</p>
                    </article>
                </div>
            </div>
        </section>
    )
}
