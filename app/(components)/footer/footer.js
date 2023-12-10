const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">Doctors Appointment System</p>
            <p className="text-sm">Additional details or links can go here.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link 2
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
