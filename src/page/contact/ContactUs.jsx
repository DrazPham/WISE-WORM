import BreadCrumb from "components/common/Breadcrumb";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import TwoColumnFaq from "./components/TwoColumnFaq";
function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
