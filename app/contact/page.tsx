import { configData } from "@/assets/configData";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/atoms/PageHeader";
import PageSubHeader from "@/components/atoms/PageSubHeader";

export const metadata = {
    title: "Contact",
};

export default function Contact() {
    return (
        <section className="mx-auto max-w-2xl">
            <PageHeader title={configData.pages.contactPage.header} />
            <PageSubHeader text={configData.pages.contactPage.subheader} />
            <ContactForm />
        </section>
    );
}
