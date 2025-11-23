import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg">Support</h3>
                <ul className="text-sm text-gray-600 flex flex-col gap-2">
                    <li><a href="#" className="hover:underline">Help Center</a></li>
                    <li><a href="#" className="hover:underline">AirCover</a></li>
                    <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
                    <li><a href="#" className="hover:underline">Disability support</a></li>
                </ul>
            </div>
             {/* Column 2 */}
             <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg">Hosting</h3>
                <ul className="text-sm text-gray-600 flex flex-col gap-2">
                    <li><a href="#" className="hover:underline">ALX home</a></li>
                    <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
                    <li><a href="#" className="hover:underline">Hosting resources</a></li>
                    <li><a href="#" className="hover:underline">Community forum</a></li>
                </ul>
            </div>
             {/* Column 3 */}
             <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg">ALX Listing</h3>
                <ul className="text-sm text-gray-600 flex flex-col gap-2">
                    <li><a href="#" className="hover:underline">Newsroom</a></li>
                    <li><a href="#" className="hover:underline">New features</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">Investors</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 ALX Listing App, Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Terms</a>
                <a href="#" className="hover:underline">Sitemap</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;