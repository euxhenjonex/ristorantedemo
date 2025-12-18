export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
