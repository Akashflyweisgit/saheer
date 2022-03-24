/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./AdminPanel/components/Login/Login";
import { useEffect } from "react";
import MainDashBord from "./AdminPanel/components/Dashbord/MainHome";
import VendorsHome from "./AdminPanel/components/Vendors/VendorsHome";
import AllUsers from "./AdminPanel/components/Users/AllUsers";
import AdminNotification from "./AdminPanel/components/Notifications/AdminNotification";
import AdminProfileUpdate from "./AdminPanel/components/Profile/AdminProfile";
import ViewCategories from "./AdminPanel/components/Categories/ViewCategories";
import AddCategories from "./AdminPanel/components/Categories/AddCategories";
import AddSubCategories from "./AdminPanel/components/Categories/AddSubCategories";
import ViewSubCategories from "./AdminPanel/components/Categories/ViewSubCategories";
import Reports from "./AdminPanel/components/Reports/Reports";
import TrermsAndCondition from "./Pages/TermsAndCondition/TrermsAndCondition";
import Privacypolicy from "./Pages/PrivacyPolicy/Privacypolicy";
import ServicesHome from "./AdminPanel/components/Services/ServicesHome";
// ===============vendor==================
import Logins from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import ProductList from "./Components/ProductList/ProductList";
import MainHome from "./Components/Dashbord/MainHome";
import AddProduct from "./Components/AddProduct/AddProduct";
import AllProducts from "./Components/AllProducts/AllProducts";
import OrderHome from "./Components/Order/OrderHome";
import Categories from "./Components/categories/Categories";
import AllUser from "./Components/Users/AllUsers";
import OrderDetails from "./Components/Order/OrderDetails";
import DailyRequest from "./Pages/DailyRequiet/DailyRequest";
import NewUsersHome from "./Pages/NewUsers/NewUsersHome";
import DeliveryHome from "./Pages/DeliveryPartner/DeliveryHome";
import EditProduct from "./Pages/Edit Product/EditProduct";
// import TrermsAndCondition from "./Pages/TermsAndCondition/TrermsAndCondition";
// import Privacypolicy from "./Pages/PrivacyPolicy/Privacypolicy";
import ProductsDetails from "./Pages/ProductDetailsmanageSystem/ProductsDetails";
import BannersHome from "./Pages/Banners/BannersHome";
import SubCategories from "./Pages/SubCategories/SubCategories";
import DeliverItemDaily from "./Pages/DeliverItemsdaily/DeliverItemDaily";
import PaymentGateWay from "./Pages/PaymentGateway/PaymentGateWay";
import Statistics from "./Pages/Statistics/Statistics";
import ProfileUpdate from "./Pages/ProfileUpdate/ProfileUpdate";
import History from "./Pages/History/History";
import Subscription from "./Pages/Subscription/Subscription";
import TotalDeliveriesHome from "./Pages/Deliveries/TotalDeliveriesHome";
import Complain from "./Pages/Complaine/Complain";
import Report from "./Pages/Reports/Reports";
import CommissionList from "./Pages/CommissionList/CommissionList";

// ====delevery-Panel=====
import DPDashboard from "../src/DeliveryPanel/DPdashbord/DPDashBord";
import DPLogin from "./DeliveryPanel/LogIn/DPLogin";
import VendorHistory from "./DeliveryPanel/History/VendorHistory";
import VendorAccountSetting from "./DeliveryPanel/Accountsetting/VendorAccountSetting";
import VendorDailyRequest from "./DeliveryPanel/DailyRequest/DailyRequest";
import VendorDeliverItemDaily from "./DeliveryPanel/DeliveritemsdailyDP/VebdorDeliveryItemsDaily";
import VendorNotification from "./DeliveryPanel/Notification/VendorNotification";
import EnterPassword from "./DeliveryPanel/ForgetPassword/NewPassword";
import ForgotPassword from "./DeliveryPanel/ForgetPassword/ForgotPassword";
import OPTpage from "./DeliveryPanel/ForgetPassword/OTPpage";
import DPSignUp from "./DeliveryPanel/SignUP/DPSignUp";
import VendorPanelLogin from "./VendorPanel/VndorLogin/VendorPanelLogin";
import Payout from "./VendorPanel/Payout/Payout";
import ViewPayOut from "./VendorPanel/Payout/ViewPayOut";
import RatingAndReviw from "./VendorPanel/Rating and Reviews/RatingAndReviw";
import Review from "./VendorPanel/Rating and Reviews/Review";
import AddToCart from "./VendorPanel/AddtoCarts/AddToCart";
import ViewCustomerProduct from "./VendorPanel/AddtoCarts/ViewCustomerProduct";
import WorkDoneUpdte from "./DeliveryPanel/UpdateTheWorkDone/WorkDoneUpdte";
import Confirmation from "./DeliveryPanel/Confirmations/Confirmation";
import CustomerManagement from "./DeliveryPanel/CustomermanagementSystem/CustomerManagement";
import EditCustomer from "./DeliveryPanel/CustomermanagementSystem/EditCustomer";
import ConfirmCompleted from "./DeliveryPanel/ConfirmComplete/ConfirmCompleted";
import AddCategoriesServices from "./DeliveryPanel/AddCategories/AddCategories";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        {/* <-----------------Admin-Panel------------------>  */}
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<MainDashBord />} />
        <Route path="/vendor" element={<VendorsHome />} />
        <Route path="/uers" element={<AllUsers />} />
        <Route path="/admin-notificatin" element={<AdminNotification />} />
        <Route path="/admin-profile" element={<AdminProfileUpdate />} />
        <Route path="/categories" element={<ViewCategories />} />
        {/* <Route path="/add-categories" element={<AddCategories />} /> */}
        <Route path="/view-subcategories" element={<ViewSubCategories />} />
        {/* <Route path="/add-subcategories" element={<AddSubCategories />} /> */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/terms-conditions" element={<TrermsAndCondition />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/services" element={<ServicesHome />} />
        {/* <----------------------vendor-Panel-------------------> */}

        <Route path="/admin-login" element={<VendorPanelLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<MainHome />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/all-product" element={<AllProducts />} />
        <Route path="/all-order" element={<OrderHome />} />
        <Route path="/categorie" element={<Categories />} />
        <Route path="/users" element={<AllUser />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/daily-request" element={<DailyRequest />} />
        <Route path="/newuser" element={<NewUsersHome />} />
        <Route path="/delivery-partner" element={<DeliveryHome />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/terms-conditions" element={<TrermsAndCondition />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/productsDetails" element={<ProductsDetails />} />
        <Route path="/banners" element={<BannersHome />} />
        <Route path="/subcategories" element={<SubCategories />} />
        <Route path="/dailyItemsDelivery" element={<DeliverItemDaily />} />
        <Route path="/payment-getway" element={<PaymentGateWay />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/userprofile" element={<ProfileUpdate />} />
        <Route path="/history" element={<History />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/delivery" element={<TotalDeliveriesHome />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/report" element={<Report />} />
        <Route path="/commissins" element={<CommissionList />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/viewPayOut" element={<ViewPayOut />} />
        <Route path="/review-and-rating" element={<RatingAndReviw />} />
        <Route path="/review" element={<Review />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/singleuserCart" element={<ViewCustomerProduct />} />

        {/* <------------------Employe-Pnel---------------------->   */}

        <Route path="/vendorLogin" element={<DPLogin />} />
        <Route path="/vendordasbord" element={<DPDashboard />} />
        <Route path="/vendor-history" element={<VendorHistory />} />
        <Route
          path="/vendor-accountsetting"
          element={<VendorAccountSetting />}
        />
        <Route path="/vendor-dailyrequest" element={<VendorDailyRequest />} />
        <Route
          path="/vendor-daily-delivery"
          element={<VendorDeliverItemDaily />}
        />
        <Route path="/update-done-work" element={<WorkDoneUpdte />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/completed-tasks" element={<ConfirmCompleted />} />
        <Route path="/customer-edit" element={<EditCustomer />} />
        <Route path="/vendor-notification" element={<VendorNotification />} />
        <Route
          path="/services-categories"
          element={<AddCategoriesServices />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword" element={<EnterPassword />} />
        <Route path="/otp" element={<OPTpage />} />
        <Route path="/vendor-register" element={<DPSignUp />} />
      </Routes>
    </>
  );
}

export default App;
