const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 justify-items-center">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Careers</p>
          <p>Forum</p>
          <p>Blog</p>
          <p>Locations</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">PARTNERS</h5>
          <p>Pricing</p>
          <p>Policy</p>
          <p>All Partners</p>
          <p>Become a Partner</p>
          <p>Partner Space</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Customer Service</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
