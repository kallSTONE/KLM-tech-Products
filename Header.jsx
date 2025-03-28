import logo from "../Images/chef.png";
export default function Header() {
    return (
        <header className="header">
            <div className="logoPart">
                <img src={logo} className="chef-logo" alt="Globe logo" />
                <p>Chef Claude</p>
            </div>
        </header>
    )
  }
  