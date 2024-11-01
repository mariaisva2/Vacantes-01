
import MyHeader from "@/components/ui/molecules/header/header";
import NavBar from "@/components/ui/oirganismo/navbar/navbar";
import React from "react";
import { CompanyService } from '@/services/company.services';
import { VacantsService } from '@/services/vacantes.services ';

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    const companies = await CompanyService.findAll();
    const vacants = await VacantsService.findAll();

    return (
        <div className="layout">
            <MyHeader />
            <NavBar companies={companies} vacants={vacants} />
            {children}
        </div>
    );
}
