import React, {useEffect, useState} from 'react';
import Company from "./components/company/Company";
import {requestAPI} from "./utils/utils";
import Header from "./components/header/Header";
import {CompanyDBType} from "../../common/types";
import style from './App.module.scss'
import Search from "./components/search/Search";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
    const [companies, setCompanies] = useState<(CompanyDBType & { id: number })[]>([])
    const [displayedCompanies, setDisplayedCompanies] = useState<(CompanyDBType & { id: number })[]>([])
    const [searchPhrase, setSearchPhrase] = useState('')
    const [filterServices, setFilterServices] = useState<string[]>([])

    useEffect(() => {
        requestAPI('/companies').then(companiesArray => {
            setCompanies(companiesArray)
            setDisplayedCompanies(companiesArray)
        })
    }, [])
    useEffect(() => {
        const regEx = new RegExp(searchPhrase, 'i')
        const searchedCompanies = companies.filter(company => company.name.match(regEx))
        const filteredCompanies = searchedCompanies.filter(company => filterServices.every(elem => company.services.includes(elem)))
        setDisplayedCompanies(filteredCompanies)
    }, [searchPhrase, filterServices, companies])
    return (
        <div className="App">
            <Header/>
            <main className={style.main}>
                {!companies.length && "Loading..."}
                <Search setSearchPhrase={setSearchPhrase}/>
                <Dropdown setFilterServices={setFilterServices} filterServices={filterServices}/>

                <section className={style.list}>
                    {displayedCompanies.length !== 0 && displayedCompanies.map(({id, name, logo, services, country}) =>
                        <Company key={id} name={name} logo={logo} services={services} country={country}/>
                    )}
                </section>

            </main>
        </div>
    );
}

export default App;
