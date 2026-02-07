import Breadcrumb from "@/components/ui/Breadcrumb";
import PageContent from "@/layouts/PageContent";

const TemplatePage = () => {
    return (
        <PageContent>
            <div className="pl-4 pt-5 text-4xl">
                Starter
            </div>
            <Breadcrumb>
                <Breadcrumb.Item label="Home" active={true} />
                <Breadcrumb.Item label="Home" />
                <Breadcrumb.Item label="Home" />
            </Breadcrumb>
            <div className="content px-4 grow">
                <div className="card lg:card-side bg-base-100 shadow-sm mb-2">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-sm mb-2">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-sm mb-2">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageContent>
    );
}

export default TemplatePage;
