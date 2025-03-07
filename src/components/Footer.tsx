export const Footer = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Bozzarella. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-400">
            <span>Proudly made in the Arctic Circle 🇸🇪</span>
            <span className="hidden md:inline">•</span>
            <span>Website by DTID</span>
          </div>
        </div>
      </div>
    </footer>
  );
};