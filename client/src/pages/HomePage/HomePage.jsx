import ItemProduct from "../../components/ItemProduct/ItemProduct";
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
import * as ProductService from "../../services/ProductServices";
import useSWR from "swr";
import { useState } from "react";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import styles from "./Hompage.scss";
import { Col, Row } from "reactstrap";

const HomePage = () => {
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct();
    return res;
  };

  const { data, error, isLoading } = useSWR("products", fetchProductAll);
  if (!data && !error) {
    return <LoadingComponent></LoadingComponent>;
  }
  if (error) {
    return <div>errorr</div>;
  }

  const allProducts = data.data;
  console.log(allProducts);

  return (
    <div className="home-page">
      <div className="categories-header" style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>
        <h3 style={{color:"#5b5d62"}}>JUST IN</h3>
      </div>
      <Row md="4" sm="2" xs="1" className="list-product">
        {allProducts.map((items) => (
          <Col key={items.id}>
            <ItemProduct image={items.image} name={items.name} rating={items.rating} price={items.price} discount={items.discount} selled={items.selled} maxLength={50} />
          </Col>
        ))}
      </Row>
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
