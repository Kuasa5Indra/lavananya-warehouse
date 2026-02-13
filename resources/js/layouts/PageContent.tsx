import { router } from "@inertiajs/react";
import { type ReactNode } from "react";
import { useEffect } from "react";
import type { SweetAlertIcon } from "sweetalert2";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import BreadcrumbItem from "../ui/Breadcrumbs/BreadcrumbItem";

interface PageContentProps {
    children: ReactNode
}

interface FlashData {
    title?: string,
    message?: string,
    status?: SweetAlertIcon
}

const PageContent = ({ children }: PageContentProps) => {
    useEffect(() => {
        return router.on('flash', (event) => {
            const flashData: FlashData = event.detail.flash
            Swal.fire({
                title: flashData.title,
                text: flashData.message,
                icon: flashData.status,
                timer: 3000
            });
            // console.log(event.detail.flash)
        })
    }, [])

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative flex flex-col min-h-screen">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer" className="btn btn-primary">Open drawer</label> */}
                <Navbar />
                {children}
                <Footer />
            </div>
            <Sidebar />
        </div>
    );
}

export default PageContent;
