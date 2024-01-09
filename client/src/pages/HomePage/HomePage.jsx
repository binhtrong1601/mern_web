import ItemProduct from "../../components/ItemProduct/ItemProduct";
import HeaderBanner from "../../components/banner/banner";
import CallToAction from "../../components/call-to-action/CallToAction";
import Breadcrumbs from "../../components/sections/breadcrumbs";
import Buttons from "../../components/sections/buttons";
import Cards from "../../components/sections/cards";
import Dropdowns from "../../components/sections/dropdowns";
import PageForm from "../../components/sections/form";
import Images from "../../components/sections/images";
import JsComponents from "../../components/sections/js-components";
import Labels from "../../components/sections/labels";
import PagePagination from "../../components/sections/pagination";
import PageTable from "../../components/sections/table";
import TooltipPopover from "../../components/sections/tooltip-popover";
import Typography from "../../components/sections/typography";
import Notification from "../../components/sections/notification";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <HeaderBanner />
      <ItemProduct />
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
  );
};

// HomePage.propTypes = {
//     classes: PropTypes.object
// };

export default HomePage;
