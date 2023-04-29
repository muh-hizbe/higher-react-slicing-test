import { Link } from "react-router-dom";

export default function NotSupportViewPage() {
    return (
        <div className="max-w-[360px] mx-auto p-10 flex items-center justify-center h-screen">
            <div className="flex flex-col gap-4 text-center">
                <p>
                    This page not support on your device or view!
                </p>
                <p>
                    Please resize or open on mobile device!
                </p>

                <p>
                    Or
                </p>

                <div className="w-full text-center">
                    <Link to={'/'}
                        className="bg-gray-700 rounded-full px-3 py-2 hover:bg-gray-800"
                    >
                        Back to Home page
                    </Link>
                </div>
            </div>
        </div>
    )
}