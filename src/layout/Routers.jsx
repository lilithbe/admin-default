import React from 'react'

import Dashboard from './../devComponents/Dashboard';
import ButtonDemo from './../devComponents/ButtonDemo';
import ChartDemo from './../devComponents/ChartDemo';
import Documentation from './../devComponents/Documentation';
import FileDemo from './../devComponents/FileDemo';
import FloatLabelDemo from './../devComponents/FloatLabelDemo';
import FormLayoutDemo from './../devComponents/FormLayoutDemo';
import InputDemo from './../devComponents/InputDemo';
import ListDemo from './../devComponents/ListDemo';
import MenuDemo from './../devComponents/MenuDemo';
import MessagesDemo from './../devComponents/MessagesDemo';
import MiscDemo from './../devComponents/MiscDemo';
import OverlayDemo from './../devComponents/OverlayDemo';
import MediaDemo from './../devComponents/MediaDemo';
import PanelDemo from './../devComponents/PanelDemo';
import TableDemo from './../devComponents/TableDemo';
import TreeDemo from './../devComponents/TreeDemo';
import InvalidStateDemo from './../devComponents/InvalidStateDemo';
import BlocksDemo from './../devComponents/BlocksDemo';
import IconsDemo from './../devComponents/IconsDemo';

import Crud from './../devComponents/Crud';
import EmptyPage from './../devComponents/EmptyPage';
import TimelineDemo from './../devComponents/TimelineDemo';
import { Route } from 'react-router-dom';
const Routers = ({layoutColorMode,location}) => {
  return (
    <> 
    <Route path="/post-admin/" exact render={() => <Dashboard colorMode={layoutColorMode} location={location} />} />
    <Route path="/post-admin/formlayout" component={FormLayoutDemo} />
    <Route path="/post-admin/input" component={InputDemo} />
    <Route path="/post-admin/floatlabel" component={FloatLabelDemo} />
    <Route path="/post-admin/invalidstate" component={InvalidStateDemo} />
    <Route path="/post-admin/button" component={ButtonDemo} />
    <Route path="/post-admin/table" component={TableDemo} />
    <Route path="/post-admin/list" component={ListDemo} />
    <Route path="/post-admin/tree" component={TreeDemo} />
    <Route path="/post-admin/panel" component={PanelDemo} />
    <Route path="/post-admin/overlay" component={OverlayDemo} />
    <Route path="/post-admin/media" component={MediaDemo} />
    <Route path="/post-admin/menu" component={MenuDemo} />
    <Route path="/post-admin/messages" component={MessagesDemo} />
    <Route path="/post-admin/blocks" component={BlocksDemo} />
    <Route path="/post-admin/icons" component={IconsDemo} />
    <Route path="/post-admin/file" component={FileDemo} />
    <Route path="/post-admin/chart" render={() => <ChartDemo colorMode={layoutColorMode} location={location} />} />
    <Route path="/post-admin/misc" component={MiscDemo} />
    <Route path="/post-admin/timeline" component={TimelineDemo} />
    <Route path="/post-admin/crud" component={Crud} />
    <Route path="/post-admin/empty" component={EmptyPage} />
    <Route path="/post-admin/documentation" component={Documentation} />

    </>
  )
}

export default Routers