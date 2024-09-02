import BreadCrumb from "components/common/Breadcrumb";
import ContactInfo from "./components/ContactInfo";
import TwoColumnFaq from "./components/TwoColumnFaq";
function ContactUs() {
	return (
		<>
			<BreadCrumb title="Liên hệ" />
			<ContactInfo />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
