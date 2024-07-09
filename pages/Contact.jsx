// import React from "react";
// import useDocumentTitle from "../hooks/useDocumentTitle";
// import { useOutletContext } from "react-router-dom";
// import ContactForm from "../components/ContactForm";
// import PageHeader from "../components/atoms/PageHeader";
// import PageSubHeader from "../components/atoms/PageSubHeader";

// export default function Contact() {
//     const configData = useOutletContext();
//     useDocumentTitle(
//         `${configData.name.first} ${configData.name.last} - ${configData.pages.contactPage.header}`,
//     );
//     return (
//         <div className="mx-auto max-w-2xl">
//             <PageHeader title={configData.pages.contactPage.header} />
//             <PageSubHeader text={configData.pages.contactPage.subheader} />
//             <ContactForm />
//         </div>
//     );
// }
