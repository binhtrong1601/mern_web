import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../header/header.jsx";
import HeaderBanner from "../banner/banner.jsx";
import Footer from "../footer/footer.jsx";

// sections for this page
import Buttons from "./buttons.jsx";
import Labels from "./labels.jsx";
import PagePagination from "./pagination.jsx";
import Images from "./images.jsx";
import Breadcrumbs from "./breadcrumbs.jsx";
import Cards from "./cards.jsx";
import Dropdowns from "./dropdowns.jsx";
import PageForm from "./form.jsx";
import PageTable from "./table.jsx";
import Notification from "./notification.jsx";
import TooltipPopover from "./tooltip-popover.jsx";
import Typography from "./typography.jsx";
import JsComponents from "./js-components.jsx";
import CallToAction from "../call-to-action/CallToAction.jsx"
import ItemProduct from "../ItemProduct/ItemProduct.jsx";


const Components = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <ItemProduct/>
                    <Buttons />
                    <Labels />
                    <PagePagination />
                    <Images />
                    <Breadcrumbs />
                    <Cards />
                    <Dropdowns />
                    <PageForm />
                    <PageTable />
                    <Notification />
                    <TooltipPopover />
                    <Typography />
                    <JsComponents />
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
