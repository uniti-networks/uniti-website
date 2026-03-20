import { Link } from "react-router-dom";

const Footer = () =>
<footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-20">
    <div className="container-wide">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold text-primary-foreground mb-4">Uniti</h3>
          <p className="text-sm text-primary-foreground/70">
            Digital activation that pays. Making smartphones productive for everyone.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-3">Pages</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/team" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Team & Careers</Link>
            <Link to="/learn" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Learn with Uniti</Link>
            <Link to="/licensing" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Licensing</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-3">Contact</h4>
          <p className="text-sm text-primary-foreground/70">connect@unitinetworks.com</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
        <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} Uniti. All rights reserved.</p>
      </div>
    </div>
  </footer>;


export default Footer;