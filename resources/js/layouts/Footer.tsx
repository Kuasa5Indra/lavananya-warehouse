import { usePage } from "@inertiajs/react";

const Footer = () => {
    const { name } = usePage().props;

    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 bottom-0">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - {name as string} </p>
            </aside>
        </footer>
    );
}

export default Footer;
