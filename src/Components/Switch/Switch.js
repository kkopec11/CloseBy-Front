import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import User from '../../Components/Profiles/User/User';
import CompanyWorker from '../../Components/Profiles/CompanyWorker/CompanyWorker';
import CompanyAdmin from '../../Components/Profiles/CompanyAdmin/CompAdmin';
import RegCompAdmin from '../../Components/Profiles/CompanyAdmin/Register/RegisterAdmin';
import CompanyAdminList from '../Profiles/CompanyAdmin/List/All/AdminsList';
import UsersList from '../../Components/Profiles/User/List/UsersList';
import CompanyWorkerList from '../../Components/Profiles/CompanyWorker/List/All/WorkersList';
import RegCompWorker from '../../Components/Profiles/CompanyWorker/Register/RegisterWorker';
import NewPassword from '../../Components/Auth/NewPassword/NewPassword';
import CompanyList from '../../Components/Profiles/Company/List/CompanyList';
import RegCompany from '../../Components/Profiles/Company/Register/RegisterCompany';
import UserDetails from '../../Components/Profiles/User/Details/UserDetails';
import CompAdminDetails from '../../Components/Profiles/CompanyAdmin/Details/AdminDetails';
import CompanyDetails from '../../Components/Profiles/Company/Details/CompanyDetails';
import CompWorkerDetails from '../../Components/Profiles/CompanyWorker/Details/WorkerDetails';
import Main from '../../Components/Main/Main';
import RegEvent from '../../Components/Profiles/Event/Register/RegisterEvent';
import EventList from '../Profiles/Event/List/All/EventList';
import EventDetailsEdit from '../../Components/Profiles/Event/Details/Edit/EventDetailsEdit';
import EventDetailsView from '../../Components/Profiles/Event/Details/View/EventDetailsView';
import { Register } from '../../Components/Profiles/User/Register/RegisterUser'
import { ResetPassword } from '../../Components/Auth/ResetPassword/ResetPassword'
import Profile from '../../Components/Profiles/Profile'
import Home from '../../Pages/home';
import About from '../../Pages/about';
import Contact from '../../Pages/contact';
import Events from '../../Components/Profiles/Event/Events';
import Login from '../../Components/Auth/Login/Login';
import WorkersListCompanyFiltered from '../../Components/Profiles/CompanyWorker/List/CompanyFiltered/WorkersListCompanyFiltered';
import AdminsListCompanyFiltered from '../Profiles/CompanyAdmin/List/CompanyFiltered/AdminsListCompanyFiltered';
import EventListCompanyFiltered from '../Profiles/Event/List/CompanyFiltered/EventListCompanyFiltered';

const SwitchComponent = () => {

    return (
        <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/about" exact component={About} />
            <Route exact path="/contact" exact component={Contact} />
            <Route exact path="/events" exact component={Events} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/user" component={User} />
            <Route exact path="/compWork" component={CompanyWorker} />
            <Route exact path="/compAdmin" component={CompanyAdmin} />
            <Route exact path="/registerCompAdmin" component={RegCompAdmin} />
            <Route exact path="/compAdminList" component={CompanyAdminList} />
            <Route exact path="/usersList" component={UsersList} />
            <Route exact path="/compWorkerList" component={CompanyWorkerList} />\
            <Route exact path="/registerCompWorker" component={RegCompWorker} />
            <Route exact path="/password-reset/:token" component={NewPassword} />
            <Route exact path="/companyList" component={CompanyList} />
            <Route exact path="/registerCompany" component={RegCompany} />
            <Route exact path="/userDetails" component={UserDetails} />
            <Route exact path="/compAdminDetails" component={CompAdminDetails} />
            <Route exact path="/companyDetails" component={CompanyDetails} />
            <Route exact path="/compWorkerDetails" component={CompWorkerDetails} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/registerEvent" component={RegEvent} />
            <Route exact path="/eventList" component={EventList} />
            <Route exact path="/eventDetailsEdit" component={EventDetailsEdit} />
            <Route exact path="/eventDetailsView" component={EventDetailsView} />
            <Route exact path="/workerListCompanyFilter" component={WorkersListCompanyFiltered} />
            <Route exact path="/adminListCompanyFilter" component={AdminsListCompanyFiltered} />
            <Route exact path="/eventListCompanyFilter" component={EventListCompanyFiltered} />

        </Switch>
    );
};
export default SwitchComponent;