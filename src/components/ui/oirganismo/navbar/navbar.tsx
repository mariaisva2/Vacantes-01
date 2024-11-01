"use client";

import React, { useState } from 'react';
import NavBarButtons from '@/components/ui/molecules/NavBarButtons/NavBarButtons';
import SearchBar from '@/components/ui/molecules/search/search';
import HeroSection from '../hero/hero';
import Card from '@/components/ui/oirganismo/card/card';
import './NavBar.scss';
import { ICompany } from '@/models/compani.models';
import { IVacants } from '@/models/vacantes.models ';

type NavBarProps = {
    companies: ICompany[];
    vacants: IVacants[];
};

const NavBar: React.FC<NavBarProps> = ({ companies, vacants }) => {
    const [activeTab, setActiveTab] = useState<'vacantes' | 'companias'>('vacantes');

    return (
        <>
            <header className="navbar">
                <div className="navbar__left">
                    <div className="navbar__buttons-container">
                        <NavBarButtons activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </div>
                <div className="navbar__search">
                    <SearchBar />
                </div>
            </header>
            <div>
                <HeroSection activeTab={activeTab} />
            <Card activeTab={activeTab} companies={companies} vacants={vacants} />
            </div>
        </>
    );
};

export default NavBar;
