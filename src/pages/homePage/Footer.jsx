import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 px-6 py-8 mt-12 w-full">
        <div className=" w-full  flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: support@warmhearts.org</p>
            <p>Phone: +880 1234-567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} WarmHearts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
